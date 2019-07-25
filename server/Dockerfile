FROM node:8-alpine
WORKDIR /w
COPY package.json package.json
RUN npm install -q
COPY . .

CMD [ "npm", "start" ]
