# 技術選定

## フレームワーク

- Next.js
- TypeScript

## CMS

microCMSを使う。
流行ってる。無料枠ある。[商用利用も可](https://help.microcms.io/ja/knowledge/free-plan-for-ads)。
個人ブログ用途なら十分と判断。

## ホスティング先

Azure Statics Web Appsを使う。
ホスティング先としては存在が空気。
だが、無料枠あり、商用利用可(たぶん)、next.jsのSSRに対応で割といい選択肢と思う

他の候補としては、Vercel、Netlifyなどが挙げられるが
Vercelは広告掲載ができないため🙅‍♂️
他はよく調べてないけどAzure好きなのでこれでいいの。

# リンク

[Azure Static Web AppsでNext.jsのSSRが動くようになったので何をやっているのか調べる](https://zenn.dev/laiso/articles/685b32abcc68f7)
[microCMS + Next.jsでJamstackブログを作ってみよう](https://blog.microcms.io/microcms-next-jamstack-blog/)
[microCMS × Next.js（TypeScript）で個人ブログを作る](https://qiita.com/hinako_n/items/e53b02c241b8e35d42cb)