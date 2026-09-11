export default function TechBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-canvas" />

      {/* Glow 1 */}
      <div className="absolute w-[900px] h-[900px] bg-accent/10 dark:bg-accent/20 blur-[180px] rounded-full -top-[250px] -left-[250px]" />

      {/* Glow 2 */}
      <div className="absolute w-[700px] h-[700px] bg-[color:var(--color-accent-2)]/10 dark:bg-[color:var(--color-accent-2)]/20 blur-[180px] rounded-full -bottom-[250px] -right-[250px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </>
  );
}
