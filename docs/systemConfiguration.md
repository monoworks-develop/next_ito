# システム構成

## 開発環境
* Node.js
* VS Code
* GitHub

## フロントエンド
* TypeScript  
`JavaScriptのスーパーセット。静的型付け言語`  
`コンパイルによりJavaScriptファイルに変換される（言語から言語へのコンパイルをトランスパイルと言う）`

* React  
`コンポーネントベースのJavaScriptライブラリ`  
`SPAのため初期表示は遅いが、更新は速い`

* Next  
`Reactをベースに開発されたフレームワーク`  
`画面のレンダリングをサーバーかクライアントどちらで行うかを選択できるため負荷分散が可能`  
`ファイルベースのルーティングを行う`

* tailwindcss  
`ユーティリティファーストのCSSフレームワーク`  
`クラス名を考える必要がなく直感的にスタイルの指定ができる`  
`コンポーネントアーキテクチャと相性が良い`

* StoryBook  
`コンポーネント単位で、見た目や振る舞いをカタログ化して確認できるツール`

* ESLint  
`JavaScript/TypeScriptの静的解析ツール`  
`Prettierと合わせて使うことでコードスタイルの統一が行える`  

* Prettier  
`JavaScript/TypeScriptの他にhtml/css等にも使えるコードフォーマッター`  
`ESLintが解析を行い、Prettierがフォーマットを行うという使い方が多い`  

* ビルドツール  
`未定`
  * Jest
  * Vitest

* テストツール  
`未定`
  * Jest
  * Vitest

## サーバーサイド
* APIサーバー  
`未定`  
`AWS Lambda + DynamoDB でサーバーレスAPIとか面白そう`  

* データベース  
`未定`  

## デプロイ基盤
* Vercel  
`Nextと親和性の高いWebサーバー兼CI/CDツール`  
`ただし、PaaSの為オンプレで運用する場合は別の手段が必要`