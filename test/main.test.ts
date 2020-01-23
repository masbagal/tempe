import tempe from '../src/index';

describe('Main function', () => {
  it('should format the date correctly', () => {
    const dateExample = new Date(2019, 0, 13, 8, 5, 3);

    const format1 = 'dd, DD MMM YYYY';
    const date1 = tempe(dateExample).format(format1);
    expect(date1).toEqual('Sunday, 13 Jan 2019');

    const format2 = 'M MMM MMMM';
    const date2 = tempe(dateExample).format(format2);
    expect(date2).toEqual('1 Jan January');

    const format3 = 'hh:mm:ss HH m:s';
    const date3 = tempe(dateExample).format(format3);
    expect(date3).toEqual('08:05:03 8 AM 5:3');
  });

  it('should initialize and format the date correctly', () => {
    const tempeDate = tempe(2019, 0, 13, 8, 5, 3);

    const format1 = 'dd, DD MMM YYYY';
    const date1 = tempeDate.format(format1);
    expect(date1).toEqual('Sunday, 13 Jan 2019');

    const format2 = 'M MMM MMMM';
    const date2 = tempeDate.format(format2);
    expect(date2).toEqual('1 Jan January');

    const format3 = 'hh:mm:ss HH m:s';
    const date3 = tempeDate.format(format3);
    expect(date3).toEqual('08:05:03 8 AM 5:3');
  });

  it('should initialize and able to chain format the date correctly', () => {
    const format1 = 'dd, DD MMM YYYY';
    const tempeDate1 = tempe(2019, 0, 13, 8, 5, 3).format(format1);
    expect(tempeDate1).toEqual('Sunday, 13 Jan 2019');

    const format2 = 'M MMM MMMM';
    const tempeDate2 = tempe(2019, 0, 13, 8, 5, 3).format(format2);
    expect(tempeDate2).toEqual('1 Jan January');

    const format3 = 'hh:mm:ss HH m:s';
    const tempeDate3 = tempe(2019, 0, 13, 8, 5, 3).format(format3);
    expect(tempeDate3).toEqual('08:05:03 8 AM 5:3');
  });
});
