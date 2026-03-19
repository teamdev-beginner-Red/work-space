## ブランチルール

- main：完成版（触らない）
- develop：開発用
- feature/○○：作業用ブランチ

例：
feature/add-button
feature/fix-style

## 作業手順

1. developを最新にする
git switch develop
git pull origin develop

2. 作業ブランチ作成
git switch -c feature/xxx

3. 作業

4. add & commit
git add .
git commit -m "内容"

5. push
git push origin feature/xxx

6. PR作成


## 命名規則

### ファイル名
- 小文字
- 単語はハイフンで区切る

例：
style.css
result-area.css

### 変数名（JS）
- camelCase

例：
fortuneResult
drawButton

### id / class
- ケバブケース

例：
result-area
draw-button

## コミットメッセージ

- 何をしたかを書く

例：
add: ボタン追加
fix: CSS修正
update: デザイン調整

## PRルール

- タイトルは内容がわかるように書く
- 必ず誰か1人にレビューしてもらう