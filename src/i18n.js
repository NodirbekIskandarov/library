// import i18 from 'i18next'
// import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import {initReactI18next} from 'react-i18next'
// let til = localStorage.getItem("i18nextLng")

// i18.use(Backend).use(LanguageDetector).use(initReactI18next).init({
//   fallbackLng: til ? til : 'uz',
//   debug: true,
//   detection: {
//     order: ['queryString', 'cookie'],
//     cache: ['cookie']
//   },
//   interpolation: {
//     escapeValue: false
//   }
// })

// export default i18

// i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         greeting: 'Hello, World!',
//         goodbye: 'Goodbye!',
//       },
//     },
//     // Add more languages as needed
//   },
//   lng: 'en',
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;


// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import uz from '../public/locales/uz/translation.json'
// import ru from '../public/locales/ru/translation.json'

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       ru: {
//         translation: ru,
//       },
//       uz: {
//         translation: uz,
//       },
//     },
//     fallbackLng: 'en',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;