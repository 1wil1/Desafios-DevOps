
# Desafío 12 - Instalación de ArgoCD en Minikube y Despliegue de Aplicación NestJS

## Descripción
Esta guía detalla los pasos necesarios para instalar y configurar ArgoCD en un entorno de Minikube, permitiendo la gestión de despliegues de aplicaciones de manera automatizada utilizando un enfoque GitOps.

## Requisitos

- **Minikube**
- **kubectl**

## Pasos de Instalación

### 1. Iniciar Minikube
```bash
minikube start
```

### 2. Crear el Namespace de ArgoCD
```bash
kubectl create namespace argocd
```

### 3. Desplegar ArgoCD:

```bash
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

### 4. Configuración de ArgoCD:
- **Exponer el servicio**
```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443

```
- **Obtener la contraseña inicial**
```bash
kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | base64 --decode

```
- **Acceder al Dashboard**
    - URL: https://localhost:8080
    - Usuario: admin
    - Contraseña: la contraseña obtenida en el paso anterior.

## Conectar ArgoCD a un Repositorio Git
1. Crear una nueva aplicación en el dashboard de ArgoCD.
2. Configurar la URL del repositorio Git y la ruta del manifiesto. Para este ejercicio:
    - URL: https://localhost:8080
    - Usuario: admin
## Verificar el Despliegue
1. Accede al dashboard de ArgoCD.
2. Verifica el estado de los recursos y la sincronización con el repositorio Git.
