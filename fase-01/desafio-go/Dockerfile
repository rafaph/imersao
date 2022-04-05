FROM golang:1.18-alpine3.14 as builder
RUN mkdir /build
COPY go.mod main.go /build/
WORKDIR /build
RUN CGO_ENABLED=0 GOOS=linux go build -a -o main .

FROM scratch
COPY --from=builder /build/main .

ENTRYPOINT [ "./main" ]
