import { getTranslation } from './getTranslation'

const mockTranslatableObject = {
  fi: 'Suomi',
  en: 'English'
}

describe('getTranslation', () => {
  it('returns correct value with fi', () => {
    expect(getTranslation(mockTranslatableObject, 'fi')).toMatch("Suomi");
  });
  it('returns correct value with en', () => {
    expect(getTranslation(mockTranslatableObject, 'en')).toMatch("English");
  });
  it('Does not break if language is not found', () => {
    expect(getTranslation(mockTranslatableObject, 'pl')).toBeUndefined();
  });
});