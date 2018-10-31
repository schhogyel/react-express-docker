#Create Client image
FROM node:8

#Create app directory
WORKDIR /usr/src/app

RUN mkdir client

#Install app dependencies
COPY ./client/package*.json ./client/

RUN npm install

#Bundle app source

COPY . .

EXPOSE 8080

CMD ["npm", "start"]