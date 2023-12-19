# ベースとなるNode.jsのイメージを指定
FROM node:20-alpine

# アプリケーションディレクトリを設定
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストール
# package.json と package-lock.json をコピー
COPY package*.json ./
RUN npm install

# ソースをコピー
COPY . .

# アプリケーションのビルド
RUN npm run build