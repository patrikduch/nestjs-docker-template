FROM node:17

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

EXPOSE 3000

CMD yarn run debug