import { parseStringFormat, mapStringFormatToValue } from '../src/utils';

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

describe('mapStringFormatToValue', () => {
  it('convert format to value', () => {
    const dateExample = new Date(2019, 0, 13);
    const result1 = {
      YYYY: '2019',
      MMM: 'Jan',
      DD: '13',
    };
    expect(mapStringFormatToValue(dateExample, ['YYYY', 'MMM', 'DD'])).toEqual(
      result1
    );
  });
});
