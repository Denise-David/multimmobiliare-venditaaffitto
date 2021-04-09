FROM node:12-stretch as nodebuilder
WORKDIR /usr/src/app
COPY ./package* /usr/src/app/
COPY .npmrc /usr/src/app/
RUN npm install
COPY . /usr/src/app
ENV REACT_APP_BASENAME=/autoanamnesi-client
ENV GENERATE_SOURCEMAP=false
RUN npm run build

FROM nexus.eoc.ch:5001/ptf/serverfrontend:master
WORKDIR /usr/app
COPY --from=nodebuilder /usr/src/app/build /usr/app/build
ENV SERVERPATH /autoanamnesi-client