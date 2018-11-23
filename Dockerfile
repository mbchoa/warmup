# build environment
FROM node:10.13.0-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN apk add --no-cache make gcc g++ python
RUN npm install --silent
RUN npm install react-scripts@2.1.1 -g --silent
COPY . /usr/src/app
RUN npm run build

# production environment
FROM arm32v7/nginx:stable
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
