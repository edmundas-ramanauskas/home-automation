FROM node:10-alpine

RUN apk --update add git

RUN mkdir -p /home/app
ENV HOME /home/app
WORKDIR $HOME

COPY package.json yarn.lock $HOME/
RUN yarn install

COPY . $HOME

EXPOSE 3000

CMD [ "yarn", "start" ]
