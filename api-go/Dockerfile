FROM golang:alpine AS builder

RUN apk update && apk add --no-cache git bash

COPY . $GOPATH/src/warmup-api
WORKDIR $GOPATH/src/warmup-api

ENV GO111MODULE on
RUN go mod download

RUN CGO_ENABLED=0 go build -o /go/bin/warmup-api
RUN chmod +x wait-for-it.sh
