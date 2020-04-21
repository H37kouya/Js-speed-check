/**
 * @see https://nodejs.org/docs/latest-v10.x/api/path.html
 */
import { dirname } from 'path'

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
