
# Desafio 9 - Docker Image Build and Push
Este proyecto utiliza Docker y GitHub Actions para construir y desplegar una imagen Docker de una aplicación Node.js. La imagen es construida y subida a DockerHub en cada push a la rama main.


## Prerequisitos

- **DockerHub**: Tener una cuenta en DockerHub.
- **GitHub**: Un repositorio en GitHub para alojar el código y configurar GitHub Actions.

## Configuración del Proyecto

### 1. Configuración de GitHub Actions
Se debe configurar un archivo de flujo de trabajo en GitHub Actions que defina los pasos para construir la imagen y subirla. El archivo de flujo de trabajo se coloca en el directorio .github/workflows del repositorio.
### 2. Configuración de GitHub Secrets
configurar los siguientes secretos en tu repositorio de GitHub:

- **DOCKER_USERNAME:** Nombre de usuario de DockerHub.
- **DOCKER_PASSWORD:** Token de acceso a DockerHub.

## Flujo de Trabajo

El flujo de trabajo en GitHub Actions está configurado para ejecutarse en cada *push* a la rama `main` que afecta los archivos en el directorio `Desafio9`. Aquí se detalla el proceso:

1. **Check out the code**: Clona el repositorio para acceder al código fuente.
2. **Set up Docker Buildx**: Configura Docker Buildx, una herramienta avanzada para construir imágenes Docker con soporte para múltiples plataformas.
3. **Login to DockerHub**: Inicia sesión en DockerHub usando las credenciales almacenadas en los secretos del repositorio.
4. **Echo GitHub Run Number**: Imprime el número de ejecución del workflow para referencia.
5. **Build and Push Docker Image**: Construye la imagen Docker basada en el Dockerfile y la empuja al repositorio DockerHub especificado. La imagen es construida para múltiples plataformas (linux/amd64, linux/arm64, linux/arm/v7).
6. **Logout from DockerHub**: Cierra sesión en DockerHub para mantener la seguridad.

## Dockerfile

El `Dockerfile` describe cómo construir la imagen Docker para la aplicación Node.js. Aquí está el contenido del `Dockerfile`:

```Dockerfile
FROM node:18

RUN mkdir -p /home/app

COPY package*.json /home/app/

WORKDIR /home/app

RUN npm install

COPY . /home/app/

EXPOSE 3000

CMD ["node", "index.js"]
```

## Cómo Usar
1. Configura tu repositorio: Asegúrate de que tu repositorio tenga el archivo de flujo de trabajo en .github/workflows/desafio9-dockerhub-push-image.yml y el Dockerfile en el directorio Desafio9.
2. Push a la rama main: Realizar un push a la rama main para activar el flujo de trabajo. El flujo de trabajo construirá y empujará automáticamente la imagen Docker a DockerHub.
