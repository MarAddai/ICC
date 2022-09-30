FROM node:18-alpine
#apk is a package manager
RUN apk upgrade && apk add --no-cache \
    bash

COPY ./package.json /app/api/ 
COPY /package-lock.json /app/api/

WORKDIR /app/api/

# packages above are being added first so that when app changes 
# are made a re-install isnt needed every time unless changes are made to the pkg.json and pkg-lock.json
RUN npm ci 

#add everything else
COPY ./ /app/api/

