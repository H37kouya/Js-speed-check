/**
 * @see https://nodejs.org/docs/latest-v10.x/api/path.html
 */
import { dirname, extname } from 'path'

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
 * 正規表現を用いて、拡張子を得る
 *
 * @param { String } f
 */
export const getExt__Regex = (f) => {
  return f.split(/(?=\.[^.]+$)/)[1] || null
}

/**
 * Node関数を用いて、拡張子を得る
 *
 * @param { String } f
 */
export const getExt__Node = (f) => extname(f) || null
