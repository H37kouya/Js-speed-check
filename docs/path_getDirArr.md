# Pathの結果

## 概要

Castをするのと、ifを使うのはどちらが早いのか。

## 結果

ifを使うほうが早い

| No | CastNumber | IfSlice | IfSlice2 | 結果 |
|----|----|----|----|
| 1  | 18.41899999976158 | 8.014999985694885 | | IfSlice |
| 2  | 9.709700003266335 | 6.724600002169609 | | IfSlice |
| 3  | 11.606800004839897 | 8.954299002885818| | IfSlice |
| 4  | 14.148400008678436ms | 12.68079999089241ms | 11.118900001049042ms | IfSlice2 |
| 5  | 19.46570000052452ms | 18.815601021051407ms | 11.147201001644135ms | IfSlice2 |
| 6  | 50.21579900383949ms | 19.57020002603531ms | 22.8057000041008ms | IfSlice |
| 7  | 16.542600005865097ms | 16.612399995326996ms | 13.876901000738144ms | IfSlice2 |
| 8  | 28.217099994421005ms | 18.73589998483658ms | 20.719101011753082ms | IfSlice |

## ソースコード

``` js
/**
 * ディレクトリの配列を取得する
 *
 * @param { String } p
 * @returns { String[] }
 */
export const getDirArr__CastNumber = (p) =>
  dirname(p.slice(Number(p.startsWith("/")))).split("/");

/**
 * ディレクトリの配列を取得する
 *
 * @param { String } p
 * @returns { String[] }
 */
export const getDirArr__IfSlice = (p) => {
  p = p.startsWith("/") ? p.slice(1) : p
  return dirname(p).split("/");
}

/**
 * ディレクトリの配列を取得する(分岐のタイミングを変えた)
 *
 * @param { String } p
 * @returns { String[] }
 */
export const getDirArr__IfSlice2 = (p) =>
  dirname(p.slice(p.startsWith("/") ? 1 : 0)).split("/");
```

## 関連

- [Boolean型を1か0にするとき、castとifのどちらが早いか](./convertToNumber_castOrBunki.md)
