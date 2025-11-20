import { useId, useState } from 'react';
import { FiFileText, FiFilm, FiStar, FiTrash2, FiUpload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { api } from '@lib/api';
import { normalizeAssetUrl } from '@lib/media';

export interface MediaItem {
  id: string;
  url: string;
  mimetype: string;
  filename?: string;
}

interface AdminMediaUploaderProps {
  folder: string;
  value: MediaItem[];
  onChange: (items: MediaItem[]) => void;
  maxFiles: number;
  coverId?: string | null;
  onCoverChange?: (id: string | null) => void;
}

interface UploadResult {
  id: string;
  filename: string;
  url: string;
  mimetype: string;
}

const isImage = (type: string) => type.startsWith('image/');
const isVideo = (type: string) => type.startsWith('video/');

export const AdminMediaUploader = ({
  folder,
  value,
  onChange,
  maxFiles,
  coverId,
  onCoverChange
}: AdminMediaUploaderProps) => {
  const { t } = useTranslation();
  const inputId = useId();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files?.length) return;

    if (value.length + files.length > maxFiles) {
      setError(t('admin.manager.media.limit', { max: maxFiles }));
      event.target.value = '';
      return;
    }

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append('files', file));
    formData.append('folder', folder);

    try {
      setUploading(true);
      setError(null);
      const response = await api.post('/uploads/multiple', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      const uploads = (response.data?.data ?? []) as UploadResult[];
      const mapped = uploads.map<MediaItem>((item) => ({
        id: item.id ?? item.filename,
        url: normalizeAssetUrl(item.url) ?? item.url,
        mimetype: item.mimetype,
        filename: item.filename
      }));
      onChange([...value, ...mapped]);
    } catch {
      setError(t('admin.manager.media.errorUpload'));
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  const handleRemove = (id: string) => {
    const next = value.filter((item) => item.id !== id);
    onChange(next);
    if (coverId === id && onCoverChange) {
      onCoverChange(next[0]?.id ?? null);
    }
  };

  const currentCoverId = coverId ?? value[0]?.id ?? null;

  const setCover = (id: string) => {
    if (!onCoverChange || currentCoverId === id) {
      return;
    }
    onCoverChange(id);
  };

  return (
    <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">{t('admin.manager.media.title')}</p>
          <p className="text-sm text-foreground/60">{t('admin.manager.media.helper')}</p>
        </div>
        <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70 transition hover:border-accent/50 hover:text-accent">
          <FiUpload />
          {uploading ? t('admin.manager.media.uploading') : t('admin.manager.media.upload')}
          <input
            id={inputId}
            type="file"
            className="hidden"
            multiple
            accept="image/*,application/pdf,video/mp4"
            disabled={uploading}
            onChange={handleUpload}
          />
        </label>
      </div>
      <p className="mt-2 text-xs text-foreground/50">{t('admin.manager.media.limit', { max: maxFiles })}</p>
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}

      {value.length === 0 ? (
        <p className="mt-6 text-sm text-foreground/60">{t('admin.manager.media.empty')}</p>
      ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {value.map((item) => {
            const isCover = currentCoverId === item.id;
            return (
            <div
              key={item.id}
              onClick={() => setCover(item.id)}
              className={clsx(
                'rounded-2xl border border-foreground/10 bg-background/40 p-3 text-sm text-foreground/70 transition',
                onCoverChange ? 'cursor-pointer hover:border-accent/40' : ''
              )}
              role={onCoverChange ? 'button' : undefined}
              tabIndex={onCoverChange ? 0 : undefined}
              aria-pressed={onCoverChange ? isCover : undefined}
            >
              <div className="relative overflow-hidden rounded-xl border border-foreground/10 bg-foreground/5">
                {isImage(item.mimetype) ? (
                  <img src={item.url} alt={item.filename ?? item.id} className="h-32 w-full object-cover" loading="lazy" />
                ) : (
                  <div className="flex h-32 items-center justify-center text-foreground/40">
                    {isVideo(item.mimetype) ? <FiFilm size={32} /> : <FiFileText size={32} />}
                  </div>
                )}
                {isCover ? (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-accent/90 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-black">
                    <FiStar /> {t('admin.manager.media.coverLabel')}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 truncate text-xs text-foreground/60">{item.filename ?? item.url}</p>
              <div className="mt-3 flex items-center justify-between text-xs">
                {onCoverChange ? (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setCover(item.id);
                    }}
                    disabled={isCover}
                    className={clsx(
                      'flex items-center gap-1 text-foreground/60 transition',
                      isCover ? 'cursor-not-allowed opacity-60' : 'hover:text-accent'
                    )}
                  >
                    <FiStar /> {isCover ? t('admin.manager.media.coverCurrent') : t('admin.manager.media.cover')}
                  </button>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleRemove(item.id);
                  }}
                  className="flex items-center gap-1 text-red-400 transition hover:text-red-300"
                >
                  <FiTrash2 /> {t('admin.manager.media.remove')}
                </button>
              </div>
            </div>
          )})}
        </div>
      )}
    </div>
  );
};
