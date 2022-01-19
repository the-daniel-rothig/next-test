FROM node:17-alpine

COPY . .
RUN npm install
RUN npm run build

CMD node dist/index.js