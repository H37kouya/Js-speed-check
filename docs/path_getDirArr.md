# Pathの結果

## 概要

Castをするのと、ifを使うほうが早いのか。

## 結果

ifを使うほうが早い

| No | CastNumber | IfSlice |
|----|--|--|
| 1  | 18.41899999976158 | 8.014999985694885 |
| 2  | 9.709700003266335 | 6.724600002169609 |
| 3  | 11.606800004839897 | 8.954299002885818|

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
```
