FROM node:8-alpine
WORKDIR /w
COPY package.json package.json
RUN npm install -q
COPY . .
RUN npm run build

CMD [ "npm", "start" ]