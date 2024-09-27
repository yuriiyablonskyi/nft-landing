import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import pl from './locales/pl.json'
import uk from './locales/uk.json'

interface TranslationResources {
  translation: typeof en;
}

const resources: Record<string, TranslationResources> = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
  uk: {
    translation: uk,
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') || 'en',
  lng: 'en',
})

export default i18next
