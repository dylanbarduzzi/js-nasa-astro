FROM node:14.15.5-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install --production

COPY . .

RUN npm run build

CMD ["node", "server/server.js"]