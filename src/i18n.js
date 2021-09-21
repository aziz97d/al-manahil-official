import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          menu:{
            home: "Home",
            aboutUs:"About Us",
            ourProjects:"Our Projects",
            contactUs:"Contact Us"
          },
          buttons:{
            donate:"Donate"
          }
        }
      },
      bn:{
          translation:{
            menu:{
              home: "হোম",
              aboutUs:"আমাদের সম্পর্কে",
              ourProjects:"প্রকল্প সমূহ",
              contactUs:"যোগাযোগ করুন"
            },
            buttons:{
              donate:"দান করুন" 
            }
          } 
        }
      ,
      ar:{
        translation:{
          menu:{
            home: "هوم",
            aboutUs:"عن المناهل ",
            ourProjects:"المشاريع",
            contactUs:"اتصل بنا"
          },
          buttons:{
            donate:"تبرع الآن"
          }
        }
      }
    }
  });

export default i18n;