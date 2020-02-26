export function parseStringFormat(stringFormat: string): Array<string> {
  const regexp = /\bY{2,4}\b|\bM{1,4}\b|\bD{1,2}\b|\bd{1,2}\b|\bh{1,2}\b|\bH{1,2}\b|\bm{1,2}\b|\bs{1,2}\b/g;
  const matchedFormats = stringFormat.match(regexp) || [];
  return matchedFormats;
}

const PADDED_FORMATS: Array<string> = ['hh', 'DD', 'mm', 'ss', 'HH'];
const FORMATS: any = {
  YYYY: { year: 'numeric' },
  YYY: { year: 'numeric' },
  YY: { year: '2-digit' },
  MMMM: { month: 'long' },
  MMM: { month: 'short' },
  MM: { month: '2-digit' },
  M: { month: 'numeric' },
  DD: { day: '2-digit' },
  D: { day: 'numeric' },
  dd: { weekday: 'long' },
  d: { weekday: 'short' },
  hh: { hour: 'numeric', hour12: false },
  h: { hour: 'numeric', hour12: false },
  HH: { hour: 'numeric', hour12: true },
  H: { hour: 'numeric', hour12: true },
  mm: { minute: 'numeric' },
  m: { minute: 'numeric' },
  ss: { second: 'numeric' },
  s: { second: 'numeric' },
};

export function translateValue(
  dateObject: Date,
  stringFormat: string,
  locale: string
) {
  const format = FORMATS[stringFormat];
  const value = dateObject.toLocaleString(locale, format);

  const shouldPad = PADDED_FORMATS.includes(stringFormat);
  return shouldPad ? value.padStart(2, '0') : value;
}
