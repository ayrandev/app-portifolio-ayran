import Photo from "../../assets/PerfilPortifolio.jpg";

export default function ProfilePhoto() {
  return (
    <div className="flex items-center justify-center">
      <img
        className="rounded-full border-4 border-double border-accent/60 hover:border-accent transition-colors w-[90%] sm:w-[100%] max-h-[400px] z-10"
        src={Photo}
        alt="Foto de perfil de Ayran Vieira"
      />
    </div>
  );
}
