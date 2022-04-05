# Fase 01 / Desafio Go

## Link da imagem no Dockerhub: https://hub.docker.com/r/rafaph/imersao-fase-01-desafio-go

## Build da imagem

- Clone este repositório e execute os seguintes comandos:

```bash
cd imersao/fase-01/desafio-go
docker build -t rafaph/imersao-fase-01-desafio-go:1.0.0 .
```

## Publicação da imagem no dockerhub

```bash
docker login
docker push rafaph/imersao-fase-01-desafio-go:1.0.0
```

## Executando

```bash
docker run --rm rafaph/imersao-fase-01-desafio-go:1.0.0
```
