import { Locale } from '../types';
import { parseStringFormat, translateValue } from './utils';

class TempeDate {
  date: Date;

  constructor(dateObject: Date) {
    this.date = dateObject;
    return this;
  }

  format(stringFormat: string, locale?: Locale) {
    const processedLocale = locale || 'en';
    const matchedFormatsFromString = parseStringFormat(stringFormat);
    const mappedValues = this.mapAvailableStringFormatToValue(
      matchedFormatsFromString,
      processedLocale
    );

    const keys = Object.keys(mappedValues);

    const finalResult = keys.reduce((result, currentKey) => {
      const regexToReplace = new RegExp('\\b' + currentKey + '\\b', 'g');
      result = result.replace(regexToReplace, mappedValues[currentKey]);
      return result;
    }, stringFormat);

    return finalResult;
  }

  mapAvailableStringFormatToValue(
    stringFormats: Array<string>,
    locale: Locale
  ) {
    const values = stringFormats.reduce(
      (valueMap: any, currentStringFormat) => {
        valueMap[currentStringFormat] = translateValue(
          this.date,
          currentStringFormat,
          locale
        );
        return valueMap;
      },
      {}
    );
    return values;
  }
}

function init(...args: any) {
  // @ts-ignore
  const passedDate = args ? new Date(...args) : new Date();
  return new TempeDate(passedDate);
}

export default init;
