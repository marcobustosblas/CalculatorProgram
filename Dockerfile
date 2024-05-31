FROM node:latest

WORKDIR /usr/src/app

COPY calculator.html calculator.js styles.css /usr/src/app/

RUN npm install -g http-server

EXPOSE 80

CMD ["http-server", "-p", "80"]