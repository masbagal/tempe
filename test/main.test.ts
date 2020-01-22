import tempe from '../src/index';

describe('Main function', () => {
  it('should format the date correctly', () => {
    const dateExample = new Date(2019, 0, 13, 8, 25, 59);

    const format1 = 'dd, DD MMM YYYY';
    expect(tempe(dateExample, format1)).toEqual('Sunday, 13 Jan 2019');

    const format2 = 'M MMM MMMM';
    expect(tempe(dateExample, format2)).toEqual('1 Jan January');
  });
});
