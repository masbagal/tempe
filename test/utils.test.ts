import { parseStringFormat } from '../src/utils';

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
