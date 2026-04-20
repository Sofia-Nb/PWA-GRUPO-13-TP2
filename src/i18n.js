import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: {
        "titulo": "Mis ...",
      }
    },
    en: {
      translation: {
        "titulo": "My ...",
      }
    }
  },
  lng: "es",
  fallbackLng: "en",
});

export default i18n;