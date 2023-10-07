FROM node:16-alpine

WORKDIR /app

COPY package* .

RUN yarn install

COPY . .

CMD [ "yarn", "dev" ]