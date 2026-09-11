import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Button from "../../components/ui/Button";
import SocialLinks from "./SocialLinks";
import Footer from "../../components/ui/Footer";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Contact() {
  const apiUrl = "https://back-end-portifolio-alpha.vercel.app/form";
  const { t } = useTranslation();

  useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (response.status === 200) {
        alert(t("dev.contact.success"));
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(t("dev.contact.error"));
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert(t("dev.contact.connectionError"));
    }
  };

  const fieldClass =
    "h-12 w-full bg-transparent border-b-[2px] border-line focus:border-accent text-ink px-4 focus:outline-none transition-all duration-300";

  return (
    <section id="Contact" className="relative flex flex-col min-h-screen overflow-x-hidden">
      <div className="flex flex-col justify-center items-center w-full pt-6 pb-12 flex-grow">
        <div className="flex justify-center w-full max-w-6xl px-4">
          <div className="relative w-full flex flex-col-reverse sm:items-center gap-8 lg:gap-8 p-2 rounded-lg">

            {/* FORM CONTAINER */}
            <div
              className="w-full lg:w-2/3 flex flex-col gap-2 order-1 sm:order-none reveal"
              style={{ "--delay": "0s" }}
            >
              <h1 className="text-3xl text-center font-display font-bold text-ink">
                {t("dev.contact.title")}
              </h1>

              <form
                onSubmit={handleSubmit}
                className="p-6 bg-surface border border-line rounded-lg space-y-6 reveal"
                style={{ "--delay": "0.15s" }}
              >
                <div className="w-full">
                  <label className="text-subtle">{t("dev.contact.name")}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("dev.contact.namePlaceholder")}
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>

                <div className="w-full">
                  <label className="text-subtle">{t("dev.contact.email")}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("dev.contact.emailPlaceholder")}
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>

                <div className="w-full">
                  <label className="text-subtle">{t("dev.contact.phone")}</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("dev.contact.phonePlaceholder")}
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={fieldClass}
                  />
                </div>

                <div className="w-full">
                  <label className="text-subtle">{t("dev.contact.message")}</label>
                  <textarea
                    name="message"
                    placeholder={t("dev.contact.messagePlaceholder")}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${fieldClass} h-32`}
                  />
                </div>

                <div className="w-full flex justify-end mt-6 reveal" style={{ "--delay": "0.3s" }}>
                  <Button type="submit" name="dev.contact.submit" />
                </div>
              </form>

              <div
                className="hidden lg:flex justify-center mt-6 space-x-4 reveal"
                style={{ "--delay": "0.35s" }}
              >
                <SocialLinks />
              </div>
            </div>

            {/* SOCIAL MOBILE */}
            <div
              className="flex items-center justify-center sm:mt-8 order-none sm:order-1 lg:hidden reveal"
              style={{ "--delay": "0.2s" }}
            >
              <SocialLinks />
            </div>

          </div>
        </div>
      </div>

      <div className="reveal" style={{ "--delay": "0.1s" }}>
        <Footer />
      </div>
    </section>
  );
}
