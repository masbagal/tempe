import { parseStringFormat, translateValue } from '../src/utils';

describe('parseStringFormat', () => {
  it('should get the accepted format', () => {
    const result1 = ['YYYY', 'MMM', 'DD'];
    expect(parseStringFormat('YYYY MMM DD')).toEqual(result1);

    const result2 = ['YYYY', 'MMM', 'DD', 'D', 'd', 'dd', 'hh', 'mm', 'ss'];
    expect(parseStringFormat('YYYY MMM DD D d dd hh:mm:ss')).toEqual(result2);
  });

  it('ignore unacceptable format', () => {
    const result1 = ['YYYY', 'DD'];
    expect(parseStringFormat('YYYY xxxx DD')).toEqual(result1);

    const result2 = ['dd', 'DD', 'MMM', 'YYYY'];
    expect(parseStringFormat('dd, DD MMM YYYY 1230')).toEqual(result2);
  });
});

describe('translateValue', () => {
  const locale = 'en';

  it('should get hour value', () => {
    const formatTime = 'hh',
      result = '03';

    expect(
      translateValue(new Date('2017-01-10 03:04:05.678'), formatTime, locale)
    ).toEqual(result);
  });

  it('should get date value', () => {
    const formatTime = 'DD',
      result = '10';

    expect(
      translateValue(new Date('2017-01-10 03:04:05.678'), formatTime, locale)
    ).toEqual(result);
  });
});
