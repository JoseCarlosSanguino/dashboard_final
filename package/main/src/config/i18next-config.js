import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'es',
  resources: {
    es: {
      translation: {
        login: {
          textoInicio: "Iniciar sesión como administrador",
          user: "Usuario",
          pass: "Contraseña",
          enter: "Ingresar"
        }
      }
    },
    en: {
      translation: {
        login: {
          textoInicio: "Sign In to Admin",
          user: "User",
          pass: "Password",
          enter: "Login"
        }
      }
    }
  }
})