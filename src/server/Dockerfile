FROM node:20

RUN mkdir /var/log/node

WORKDIR /app
RUN npm install -g nodemon

COPY app/package.json app/

COPY app/ app/

EXPOSE 3000

CMD npm run start:dev