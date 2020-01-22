import Locale from '../types/locales';
import { getFormatOptions } from './formats';

export function parseStringFormat(stringFormat: string): Array<string> {
  const regexp = /\bY{2,4}\b|\bM{1,4}\b|\bD{1,2}\b|\bd{1,2}\b|\bh{1,2}\b|\bm{1,2}\b|\bs{1,2}\b/g;
  const matchedFormats = stringFormat.match(regexp) || [];
  return matchedFormats;
}

export function mapStringFormatToValue(
  dateObject: Date,
  stringFormats: Array<string>,
  locale?: Locale
) {
  const values = stringFormats.reduce((value: any, currentKey) => {
    const formatOptions = getFormatOptions(currentKey);
    const mappedValue = dateObject.toLocaleString(locale, formatOptions);
    value[currentKey] = mappedValue;
    return value;
  }, {});

  return values;
}
