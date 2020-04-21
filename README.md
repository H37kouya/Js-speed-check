# JavaScript Speed Check

JavaScriptの関数の速度を確認するためのプロジェクト

計測時に見やすくするため、テストが終了した関数はdescribe.skipとしている。再確認する場合は、.skipを消す。

## 環境構築と実行

``` bash
// インストール
npm i

// テストの実行
npm run test
```

## 目次

- [Boolean型を1か0にするとき、castとifのどちらが早いか](./docs/convertToNumber_castOrBunki.md)
- [PathでBoolean型をNumber型にするとき、castかifか](./docs/path_getDirArr.md)
- [拡張子を取得するとき、正規表現をつかうのとnode関数を使うのがいいか](./docs/path_getExt.md)
