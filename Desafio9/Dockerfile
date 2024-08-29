FROM node:18

RUN mkdir -p /home/app

COPY package*.json /home/app/

WORKDIR /home/app

RUN npm install

COPY . /home/app/

EXPOSE 3000

CMD ["node", "index.js"]
