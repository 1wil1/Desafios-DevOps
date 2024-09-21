
# Desafio 11 - Implementación: NestJS y MongoDB en Kubernetes

Este proyecto contiene la configuración y los archivos necesarios para desplegar una aplicación construida con NestJS y MongoDB en un clúster de Kubernetes


## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```plaintext
.
educacionit-app/
│
├── k8s/
│   ├── app-deployment.yaml
│   ├── mongo-deployment.yaml
│   └── mongo-pvc.yaml
├── Dockerfile
├── docker-compose.yaml
├── src/
│   └── ... (código fuente de la aplicación)
└── ...

```
- **docker-compose.yml**: Archivo de configuración de Docker Compose.
- **Dockerfile**: Dockerfile para construir la imagen de la aplicación NestJS.
- **app-deployment.yaml**: Este archivo define el Deployment y el Service para la aplicación NestJS.
- **mongo-deployment.yaml**: Este archivo define el Deployment y el Service para MongoDB.
- **mongo-pvc.yaml**: Este archivo define un Persistent Volume Claim (PVC) para la base de datos MongoDB.

## Requisitos

- **Minikube**
- **kubectl**
- **Docker**
- **Docker Hub**

## Instrucciones para desplegar en Kubernetes

### 1. Acceso a un clúster de Kubernetes
Asegúrate de tener kubectl y Docker instalados en tu máquina.
Tener acceso a un clúster de Kubernetes como Minikube.
```bash
minikube start
```

### 2. Construir y subir la imagen de Docker

Asegúrate de que la imagen esté disponible en un registro accesible:
```bash
docker build -t tu_usuario/app:latest .
docker push tu_usuario/app:latest
```

### 3. Aplicar los manifiestos en Kubernetes:

Navega a tu directorio k8s y ejecutar los comandos:
```bash
kubectl apply -f mongo-pvc.yaml
kubectl apply -f mongo-deployment.yaml
kubectl apply -f app-deployment.yaml
```

### 3. Verifica que los pods están corriendo:

```bash
kubectl get pods
```

### 3. Acceso a la App:
Para redirigir el tráfico del servicio a la máquina local:
```bash
kubectl port-forward service/desafio11-service 30002:3000
```

## Evidencia de Pruebas
La aplicación NestJS expone un endpoint básico:

- GET /: Devuelve un mensaje "Hello World!".

Puedes probar este endpoint accediendo a http://localhost:30002 en un navegador o utilizando Postman.