FROM node:8.4.0

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/backend/

WORKDIR $HOME/backend

RUN npm install --silent --progress=false

COPY . $HOME/backend

CMD ["npm", "start"]

