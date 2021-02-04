import { TranslatableObject } from '../types/TranslatableObject'

export const getTranslation = (obj: TranslatableObject, currentLang: string): string => {
  return obj[currentLang];
}