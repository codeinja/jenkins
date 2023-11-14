FROM node:alpine3.18
COPY . /home/frontend
WORKDIR /home/frontend
RUN npm ci
EXPOSE 3000

CMD npm start