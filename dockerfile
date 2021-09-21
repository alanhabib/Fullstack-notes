FROM node:14

WORKDIR /usr/src/fullstack-notes

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["./bash.sh"]
