import Locale from '../types/locales';
import { mapStringFormatToValue, parseStringFormat } from './utils';

export default function(
  dateObject: Date,
  stringFormat: string,
  locale?: Locale
) {
  const matchedFormats = parseStringFormat(stringFormat);
  const mappedValues = mapStringFormatToValue(
    dateObject,
    matchedFormats,
    locale
  );

  const keys = Object.keys(mappedValues);

  const finalResult = keys.reduce((result, currentKey) => {
    const regexToReplace = new RegExp('\\b' + currentKey + '\\b', 'g');
    result = result.replace(regexToReplace, mappedValues[currentKey]);
    return result;
  }, stringFormat);

  return finalResult;
}
