export const NeonGridBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-30 overflow-hidden">
      <div className="neon-gradient absolute inset-0 opacity-70" />
      <div className="neon-grid absolute inset-0 opacity-40" />
      <div className="neon-aurora absolute inset-0 opacity-50" />
    </div>
  );
};
