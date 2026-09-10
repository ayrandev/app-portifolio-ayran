import { ReactTyped } from "react-typed";
import { useTranslation } from "react-i18next";
import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  const { t } = useTranslation();
  const roles = t("dev.intro.roles", { returnObjects: true });

  return (
    <section
      id="Home"
      className="relative flex justify-center items-center min-h-screen pt-28 sm:pt-32"
    >
      <div className="flex flex-col-reverse sm:flex-row-reverse items-center sm:justify-center sm:gap-28 gap-12 w-full px-6">

        <div className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-lg">
          <p className="text-sm sm:text-base text-subtle tracking-wide">
            {t("dev.intro.greeting")}
          </p>

          <h1 className="font-display font-bold text-4xl sm:text-6xl text-ink">
            {t("dev.intro.name")}
          </h1>

          <div className="h-8 sm:h-10 mt-1">
            <ReactTyped
              strings={roles}
              typeSpeed={40}
              backSpeed={25}
              backDelay={1500}
              loop
              className="font-display text-lg sm:text-2xl text-accent"
              cursorChar="|"
            />
          </div>

          <p className="text-lg sm:text-xl text-subtle mt-4 leading-relaxed">
            {t("dev.intro.description")}
          </p>
        </div>

        <ProfilePhoto />
      </div>
    </section>
  );
}
