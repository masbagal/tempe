import { Locale, CalendarType } from './types';
import { parseStringFormat, translateValue } from './utils';

class TempeDate {
  date: Date;

  constructor(dateObject: Date) {
    this.date = dateObject;
    return this;
  }

  /**
   * Format the inputted date object
   * @param stringFormat printed format such as DD MMM YYYY
   * @param locale locale code with BCP 47 standard language tag
   * @param calendarType the calendar types, usually affect the year. Possible input includes but not limited to "gregory", "buddhist", "islamic", "japanese"
   * @returns string
   */
  format(stringFormat: string, locale?: Locale, calendarType?: CalendarType) {
    const processedLocale = locale || 'en';

    /**  Some locale defaulted to their own calendar (e.g. Thailand that automatically use Buddhist year),
    /*   while sometimes we want to use standard gregorian calendar
    /*   For reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    */
    const processedLocaleWithCalendarType = calendarType
      ? `${processedLocale}-u-ca-${calendarType}`
      : processedLocale;

    const matchedFormatsFromString = parseStringFormat(stringFormat);
    const mappedValues = this.mapAvailableStringFormatToValue(
      matchedFormatsFromString,
      processedLocaleWithCalendarType
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
    locale: Locale | string
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
