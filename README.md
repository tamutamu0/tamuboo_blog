# 技術選定

## CMS

microCMSを使う。
流行ってる。無料枠ある。[商用利用も可](https://help.microcms.io/ja/knowledge/free-plan-for-ads)。
個人ブログ用途なら十分と判断。

## ホスティング先

Azure Statics Web Appsを使う。
ホスティング先としては存在が空気な気がするが、
無料枠あり、商用利用可(たぶん)、転送上限あるが、100GBあれば十分

最近next.jsのSSRに対応

他の候補としては、Vercel、Netlifyなどが挙げられるが
Vercelは広告掲載ができないため🙅‍♂️
他はよく調べてないけどAzure好きなのでこれでいいの。

# 参考にした記事

[Azure Static Web AppsでNext.jsのSSRが動くようになったので何をやっているのか調べる](https://zenn.dev/laiso/articles/685b32abcc68f7)