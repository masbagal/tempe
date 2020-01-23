import { Locale } from '../types';
import { parseStringFormat } from './utils';

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
        valueMap[currentStringFormat] = this._formatter(
          currentStringFormat,
          locale
        );
        return valueMap;
      },
      {}
    );
    return values;
  }

  _formatter(stringFormat: string, locale: Locale) {
    const formatters: any = {
      YYYY: () => this.date.toLocaleString(locale, { year: 'numeric' }),
      YYY: () => this.date.toLocaleString(locale, { year: 'numeric' }),
      YY: () => this.date.toLocaleString(locale, { year: '2-digit' }),
      MMMM: () => this.date.toLocaleString(locale, { month: 'long' }),
      MMM: () => this.date.toLocaleString(locale, { month: 'short' }),
      MM: () => this.date.toLocaleString(locale, { month: '2-digit' }),
      M: () => this.date.toLocaleString(locale, { month: 'numeric' }),
      DD: () => this.date.toLocaleString(locale, { day: '2-digit' }),
      D: () => this.date.toLocaleString(locale, { day: 'numeric' }),
      dd: () => this.date.toLocaleString(locale, { weekday: 'long' }),
      d: () => this.date.toLocaleString(locale, { weekday: 'short' }),
      hh: () =>
        this.date
          .toLocaleString(locale, { hour: 'numeric', hour12: false })
          .padStart(2, '0'),
      h: () =>
        this.date.toLocaleString(locale, { hour: 'numeric', hour12: false }),
      HH: () =>
        this.date.toLocaleString(locale, { hour: 'numeric', hour12: true }),
      H: () =>
        this.date.toLocaleString(locale, { hour: 'numeric', hour12: true }),
      mm: () =>
        this.date
          .toLocaleString(locale, { minute: 'numeric' })
          .padStart(2, '0'),
      m: () => this.date.toLocaleString(locale, { minute: 'numeric' }),
      ss: () =>
        this.date
          .toLocaleString(locale, { second: 'numeric' })
          .padStart(2, '0'),
      s: () => this.date.toLocaleString(locale, { second: 'numeric' }),
    };

    const formatter = formatters[stringFormat];
    const receivedValue = formatter();
    return receivedValue;
  }
}

function init(...args: any) {
  // @ts-ignore
  const passedDate = args ? new Date(...args) : new Date();
  return new TempeDate(passedDate);
}

export default init;
