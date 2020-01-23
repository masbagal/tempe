# Tempe

> Simple and lightweight (< 2kB) helper for date formatting

Sometimes all you need is just a simple date formatting without all of those super powers.

Name is taken from `tempo` and [tempe](https://en.wikipedia.org/wiki/Tempeh)


## 📦 Install

```sh
$ yarn add tempe

# or

$ npm install tempe --save
```

## 💻 Usage
Use the default export, and pass existing date object or you can initialize it like normal Javascript Date object.

```js
import tempe from 'tempe';

// use tempe as Date initializer
tempe(2020, 0, 13).format('dd, DD MMM YYYY'); // "Monday, 13 Jan 2020"

// pass existing Date object to tempe
const sampleDate = new Date(2020, 0, 13);
tempe(sampleDate).format('dd, DD MMM YYYY'); // "Monday, 13 Jan 2020"

// time formatting
tempe(2020, 2, 25, 23, 59).format('DD MMMM YYYY hh:mm:ss'); // "25 March 2020 23:59:00"
tempe(2020, 2, 25, 23, 59).format('H at DD/MM/YYYY'); // "11 PM at 25/03/2020"

```

## 🌐 i18n
Tempe supports internationalization by specifying the locale while formatting

```js
import tempe from 'tempe';

tempe(2020, 5, 13).format('DD MMM YYYY', 'ja'); // "13日 6月 2020年"
tempe(2020, 5, 13).format('DD MMM YYYY', 'vi'); // "13 Tháng 6 2020"
tempe(2020, 5, 13).format('DD MMM YYYY', 'id'); // "13 Tháng 6 2020"

```

## 📝 List of all available formats

| Format | Output           | Description                           |
| ------ | ---------------- | ------------------------------------- |
| `YY`   | 18               | Two-digit year                        |
| `YYYY` | 2018             | Four-digit year                       |
| `M`    | 1-12             | The month, beginning at 1             |
| `MM`   | 01-12            | The month, 2-digits                   |
| `MMM`  | Jan-Dec          | The abbreviated month name            |
| `MMMM` | January-December | The full month name                   |
| `D`    | 1-31             | The day of the month                  |
| `DD`   | 01-31            | The day of the month        |
| `dd`   | Sun-Sat            | The short name of the day of the week   |
| `ddd` | Sunday-Saturday  | The name of the day of the week       |
| `H`    | 0-23 AM/PM            | The hour with AM/PM                             |
| `h`    | 01-12             | The hour, 12-hour clock               |
| `hh`   | 01-12            | The hour, 12-hour clock     |
| `m`    | 0-59             | The minute                            |
| `mm`   | 00-59            | The minute, 2-digits                  |
| `s`    | 0-59             | The second                            |
| `ss`   | 00-59            | The second, 2-digits                  |

---

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).
