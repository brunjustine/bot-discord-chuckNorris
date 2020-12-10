FROM node:latest
LABEL "Author"="Justine Brun brunjustin@eisti.eu"
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY index.js /app/index.js
COPY config.json /app/config.json
COPY prefixes.json /app/prefixes.json
COPY commands /app/commands

EXPOSE 80

CMD [ "node", "index.js" ]