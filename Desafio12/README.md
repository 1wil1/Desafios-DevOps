
# Desafio 12 - Despliegue de Aplicación NestJS con Helm

## Descripción
Este proyecto utiliza Helm para gestionar el despliegue de una aplicación NestJS junto con una base de datos MongoDB en Kubernetes. Este chart simplifica la instalación y configuración de la aplicación.


## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```plaintext
.
├── README.md
├── desafio12-chart
│   ├── Chart.yaml
│   ├── charts
│   ├── templates
│   │   ├── _helpers.tpl
│   │   ├── deployment.yaml
│   │   ├── mongo-deployment.yaml
│   │   ├── mongo-pvc.yaml
│   │   ├── mongo-service.yaml
│   │   ├── service.yaml
│   │   └── tests
│   │       └── test-connection.yaml
│   └── values.yaml

```

## Requisitos

- **Minikube**
- **kubectl**
- **Docker**
- **Helm**

## Instrucciones para Instalación

### 1. Acceso a un clúster de Kubernetes
Asegúrate de tener kubectl y Docker instalados en tu máquina.
Tener acceso a un clúster de Kubernetes como Minikube.
```bash
minikube start
```

### 2. Instalar el Helm Chart

```bash
helm install desafio12-release ./desafio12-chart
```

### 3. Verifica que los pods están corriendo:

```bash
kubectl get pods
```

### 3. Acceso a la App:
Para redirigir el tráfico del servicio a la máquina local:
```bash
kubectl port-forward < nombre-pod > 30001:3000
```

## Evidencia de Pruebas
La aplicación NestJS expone un endpoint básico:

- GET /: Devuelve un mensaje "Hello World!".

Puedes probar este endpoint accediendo a http://localhost:30001 en un navegador o utilizando Postman.