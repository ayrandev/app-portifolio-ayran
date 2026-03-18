export default function TechBackground() {
  return (
    <>
      {/* Base */}
      <div className="absolute inset-0 bg-[#0B0F0E]" />

      {/* Gradiente principal */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02120E] via-[#06221B] to-[#0B0F0E]" />

      {/* Glow 1 */}
      <div className="absolute w-[900px] h-[900px] bg-[#00D1A0]/20 blur-[180px] rounded-full -top-[250px] -left-[250px]" />

      {/* Glow 2 */}
      <div className="absolute w-[700px] h-[700px] bg-[#0EA5E9]/20 blur-[180px] rounded-full -bottom-[250px] -right-[250px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </>
  );
}