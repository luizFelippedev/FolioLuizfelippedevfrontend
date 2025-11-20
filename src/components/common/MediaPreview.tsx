import clsx from 'clsx';
import { FiFileText, FiImage } from 'react-icons/fi';

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.m4v'];
const PDF_EXTENSIONS = ['.pdf'];

const getExtension = (url?: string) => {
  if (!url) return '';
  try {
    const clean = new URL(url, 'http://localhost').pathname;
    const fragments = clean.split('.');
    return fragments.length > 1 ? `.${fragments.pop()!.toLowerCase()}` : '';
  } catch {
    const parts = url.split('?')[0]?.split('.');
    return parts && parts.length > 1 ? `.${parts.pop()!.toLowerCase()}` : '';
  }
};

export const getMediaType = (url?: string): 'video' | 'pdf' | 'image' => {
  const ext = getExtension(url);
  if (VIDEO_EXTENSIONS.includes(ext)) return 'video';
  if (PDF_EXTENSIONS.includes(ext)) return 'pdf';
  return 'image';
};

interface MediaPreviewProps {
  url?: string;
  alt?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export const MediaPreview = ({
  url,
  alt = 'media',
  className,
  autoPlay = false,
  loop = true,
  muted = true,
  controls = false
}: MediaPreviewProps) => {
  const type = getMediaType(url);

  if (!url) {
    return (
      <div className={clsx('flex h-full w-full items-center justify-center bg-background/30 text-foreground/50', className)}>
        <FiImage size={32} />
      </div>
    );
  }

  if (type === 'video') {
    return (
      <video
        className={clsx('h-full w-full object-cover', className)}
        src={url}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
      />
    );
  }

  if (type === 'pdf') {
    return (
      <div className={clsx('relative h-full w-full rounded-2xl border border-foreground/10 bg-background/20', className)}>
        <iframe
          src={`${url}#toolbar=0&view=fitH`}
          title={alt}
          className="h-full w-full rounded-2xl bg-background/10"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between bg-gradient-to-b from-black/10 to-transparent px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
          <span>PDF</span>
          <FiFileText />
        </div>
      </div>
    );
  }

  return <img src={url} alt={alt} className={clsx('h-full w-full object-cover', className)} loading="lazy" />;
};

export default MediaPreview;
