FROM node:16-alpine

WORKDIR /app

COPY package* .

RUN yarn install

COPY . .

RUN npx prisma generate

RUN yarn build

CMD [ "yarn", "start" ]