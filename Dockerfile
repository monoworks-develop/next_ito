# ベースとなるNode.jsのイメージを指定
FROM node:lts

# アプリケーションのソースコードをコンテナ内にコピー
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 8080

# アプリケーションの起動コマンド
# CMD ["node", "app.js"]