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

# 公開ポートの指定
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["npm", "run", "start"]