FROM node:18.16-slim AS development

RUN apt-get update
RUN apt-get install -y \
    # Needed for watching for file changes:
    procps

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
