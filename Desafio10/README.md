
# Desafio 10 - App NestJS + MongoDB Docker Compose Setup
Este proyecto utiliza Docker Compose para gestionar una aplicación web y una base de datos MongoDB. La aplicación está construida con NestJS y se conecta a una base de datos MongoDB.


## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```plaintext
.
├── Dockerfile
├── README.md
├── docker-compose.yaml
├── nest-cli.json
├── package-lock.json
├── package.json
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
```
- **docker-compose.yml**: Archivo de configuración de Docker Compose.
- **Dockerfile**: Dockerfile para construir la imagen de la aplicación NestJS.

## Requisitos

- **Docker**
- **Docker Compose**

## Configuración del Proyecto

### 1. Variables de Entorno
Asegúrate de tener un archivo .env en el directorio raíz del proyecto con las siguientes variables.
```plaintext
MONGO_DB_URI=mongodb://mongodb:27017
MONGO_DB_NAME=app-desafio10
MONGO_DB_USER=root
MONGO_DB_PASS=password
```

### 1. Dockerfile para la Aplicación y docker-compose

Asegúrate de que los archivos Dockerfile y docker-compose.yml estén configurado correctamente en el directorio raíz del proyecto. 

## Construcción y Ejecución

Para construir y levantar los contenedores en segundo plano, utiliza:
```bash
docker-compose up --build -d
```

Para verificar el estado de los contenedores, utiliza:

```bash
docker-compose ps
```
Para detener y eliminar los contenedores:
```bash
docker-compose down
```


## Construcción y Ejecución
La aplicación NestJS expone un endpoint básico:

- GET /: Devuelve un mensaje "Hello World!".

Puedes probar este endpoint accediendo a http://localhost:3000 en tu navegador o utilizando una herramienta como Postman.
