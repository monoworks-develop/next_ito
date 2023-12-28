# Next環境構築

## 作業環境

`Node.js` v20.9.0

`VSCode` 1.85.1  
| 拡張機能 | 機能 |
| --- | --- |
| Japanese Launguage Pack | 日本語化 |
| Material Icon Theme | ファイルアイコンが見やすくなる |
| indent-rainbow | インデントに色をつけられる<br>`4タブ`だと画面がうるさくなるので`2タブ`で使うことをオススメします |
| ESLint | ファイル保存時に`ESLint`を自動実行したりできる |
| Prettier | ファイル保存時に`Prettier`を自動実行したりできる |
| Git Graph | ブランチの状態を視覚的に見れるようになる |
| Markdown Named CodeBlocks | `md`ファイルのコードブロックに名前をつけれる |
| markdownlint | `md`ファイルを静的解析できる |
| Dev Containers | 開発用コンテナにアクセスするための拡張機能<br>今回は不要 |

基本的に `VSCode` の ツールバー → Terminal → New Terminal でターミナルを開いてそこでコマンドを実行し、  
環境構築を行っています。

また Dev Containersは各位でDockerのセットアップ等が必要になるため、今回は使用していません。

## [Next.js](https://nextjs.org/) プロジェクトの作成

### CLIツールの実行

`npx create-next-app myapp`

選択肢はすべてそのままEnter  
`myapp` フォルダ内にあるファイルを全てrootに出す  
`myapp` フォルダは消してOK

`Next.js 13` から `App Router` が採用され、`/src/app/` 内のディレクトリ構造がそのままルーティングされる。

機能が多すぎて説明しきれないので主要な部分のリンク集を置いておきます。

[ルーティング](https://nextjs.org/docs/app/building-your-application/routing)  
[データ取得](https://nextjs.org/docs/app/building-your-application/data-fetching)  
[レンダリングの違い](https://nextjs.org/docs/app/building-your-application/rendering)

## Test ([Jest](https://jestjs.io/ja/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/))

### パッケージのインストール

`npm install --save-dev jest jest-environment-jsdom @types/jest @testing-library/react @testing-library/jest-dom`

### コンフィグファイルの作成

rootディレクトリ配下に以下のファイルを作成

``` js:jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

### testスクリプトの追加  

rootディレクトリにある `package.json` の `"scripts"` に以下を追加

``` json:package.json
"test": "jest"
```

### 最初のテストを作成  

#### src配下にtest用ディレクトリ作成

`/src/__tests__`

#### test用ディレクトリにテストファイルの作成(****.test.tsx)

``` tsx:hello.test.tsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Hello World', () => {
  test('Hello', () => {
    expect("Hello" + " World" + " !").toBe("Hello World !")
  })

  test('PASS Case', () => {
    expect(1).toBe(1)
  })

  test('ERROR Case', () => {
    expect(100).toBe(1)
  })
})
```

#### テストの実行

`npm run test` で実行

テスト結果がターミナルに表示される。  
`Tests: 1 failed, 2 passed, 3 total` になっている筈

## [ESLint](https://eslint.org/)

create-next-appを使ってプロジェクトを作成した場合は、インストール等は不要。  
またルールもある程度設定されている。  
ルールの設定は `.eslintrc.json` で可能  
`npm run lint` で実行  
VSCodeに`ESLint`のプラグインを入れれば保存時に自動で実行等が可能になる。

### 追加したほうが良い設定等

調査中...

## [Prettier](https://prettier.io/)

調査中...

## [Tailwind CSS](https://tailwindcss.com/)

create-next-appを使ってプロジェクトを作成した場合は、インストール等は不要。  
[チートシート](https://tailwindcomponents.com/cheatsheet/)

## [StoryBook](https://storybook.js.org/)

コーディングしたコンポーネントをブラウザ上で閲覧出来るツール

### CLIツールでセットアップ

`npx storybook@latest init`

途中聞かれる質問は `yes`  
しばらくすると勝手にStoryBookが立ち上がる

### スクリプトの修正 (storybook → sb)

``` json:package.json
"sb": "storybook dev -p 6006",
"build-sb": "storybook build"
```

次回から `npm run sb` で起動できる

### Tailwind CSS をimport

初期状態だとTailwind CSSが読み込まれておらず、
スタイルが適用されないためimportを行う。

``` ts:/.storybook/preview.ts
import "../src/app/globals.css";
```

### 最初のStoryを作成

#### Storyの元となるコンポーネントを作成 (****.tsx)

`/src/components/` フォルダを作成し、配下に以下のコンポーネントを作成

``` tsx:SimpleButton.tsx
type SimpleButtonProps = {
  children?: React.ReactNode;
}

const SimpleButton = ({children, ...props} : SimpleButtonProps) => {
  return (
    <div>
      <button className="px-10 py-2 bg-red-700 text-white-100 rounded-md border-2 border-red-400">{children}</button>
    </div>
  )
}

export default SimpleButton
```

#### 作成したコンポーネントを元にStoryを作成 (****.stories.tsx)

`****.stories.tsx` というファイル名にするとStoryBook用のコンポーネントファイルとして認識される。  
対象のコンポーネントと同じ場所に `stories.tsx` ファイルを置いておくとimportが楽

``` tsx:SimpleButton.stories.tsx
import { Meta, StoryObj } from "@storybook/react"
import SimpleButton from "./SimpleButton"

// メタデータの定義とexport default
const meta: Meta = {
  title: "SimpleButton",
  component: SimpleButton,
}
export default meta

// Storyの定義
type Story = StoryObj<typeof SimpleButton>

export const Primary: Story = {
  args: {
    children: "Primary"
  }
}
export const Secondary: Story = {
  args: {
    children: "Secondary"
  }
}
```

### StoryBookの起動

`npm run sb`

左のナビゲーションバーにSimpleButtonが存在し、
その中に作成した2つのStory (Primary, Secondary) があることを確認する。

### Examplesとして用意されているStoryは適宜削除

`/src/stories/` フォルダはまるごと削除してOK

## CI/CD

Github ActionsでのCI/CDの設定方法を解説します。  
まず前提にですが、Github Actionsとは、リポジトリに対してプッシュやプルリクエスト等の任意の操作がされたタイミングで、定義されたジョブを自動で実行するサービスです。  
ジョブは `/.github/workflows/` 配下に `yml` で定義します。

これを用いてプッシュがされたタイミングで自動でビルド・テスト・コードの解析等を行いソースコードの品質を高めることを `CI (継続的インティグレーション)`

任意のブランチのソースコードがプッシュ及びプルリクにより更新されたら、自動で指定した環境にデプロイすることを `CD (継続的デリバリー)` と呼びます。

### Github にリポジトリ作成とプッシュ

[Github](https://github.com/dashboard)にリポジトリを作成  
ライセンスは迷ったらMITライセンスで大丈夫です。

また `create-next-app` でプロジェクトを立ち上げた場合は、`git init` は不要です。

#### ローカルリポジトリとリモートリポジトリを接続

`git remote add origin 作成したリポジトリのリンク.git`

#### 最初のコミット

`git add .`  
`git commit -m "コミットメッセージ"`  
`git push -u origin main`

### CI の設定方法

`npm run test` でテストが実行できることを確認してください。
このコマンドを Github Actions からキックすることでテストを自動化できます。

#### ジョブ定義ファイルの作成

`/.github/workflows/` フォルダを作成し、配下に以下のファイルを作成

``` yml:ci_test_frontend.yml
name: CI-Test-Frontend

on: [push]

jobs:
  CI-Jest:
    name: CI-Jest
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./
    steps:
      - name: ソースをチェックアウト
        uses: actions/checkout@v4
      - name: Nodeのセットアップ
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: パッケージのインストール
        run: npm install
      - name: テスト実行
        run: npm run test
```

#### 実行確認

作成した `yml` ファイルを含めてプッシュし、
[Github](https://github.com/)から対象のリポジトリを開く。  
ツールバーの `Actions` でテストが実行されていることを確認する。

> テストでエラーが起きたりするとメールが発信されてしまいますので注意

参考までに私のリポジトリのActionsを貼っておきます。  
[Actions](https://github.com/monoworks-develop/next_ito/actions)

### CD の設定方法

調査中...
