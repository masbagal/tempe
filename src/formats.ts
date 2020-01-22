interface ObjFormatType {
  [key: string]: {
    [key: string]: string;
  };
}

const objFormat: ObjFormatType = {
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
  hh: { hour: '2-digit' },
  h: { hour: 'numeric' },
  mm: { minute: '2-digit' },
  m: { minute: 'numeric' },
  ss: { second: '2-digit' },
  s: { second: 'numeric' },
};

export const possibleFormat = Object.keys(objFormat);

export function getFormatOptions(key: string): {} {
  return objFormat[key];
}

export default objFormat;
