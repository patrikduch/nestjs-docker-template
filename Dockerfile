FROM node:22-alpine

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

EXPOSE 3000

CMD yarn run debug