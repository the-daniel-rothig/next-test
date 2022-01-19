FROM node:17-alpine

ARG REACT_APP_API_HOST
ENV REACT_APP_API_HOST $REACT_APP_API_HOST

COPY . .
RUN npm install
RUN npm run build

CMD npm run serve