#Create Server image
FROM node:10.12

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source

COPY . .

EXPOSE 8000

CMD ["npm", "start]