
# Desafío 12 - Instalación de ArgoCD en Minikube y Despliegue de Aplicación NestJS

## Descripción
Esta es una guía completa para desplegar el Helm Chart desarrollado en el desafío anterior utilizando ArgoCD, siguiendo los principios de GitOps.

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
2. Repository URL: Configurar la URL del repositorio Git .
3. Revision: Normalmente HEAD.
4. Path: Especifica la carpeta donde se encuentra el Helm Chart
5. Cluster: El clúster de Kubernetes (por defecto https://kubernetes.default.svc).
6. Namespace: El namespace donde deseas desplegar (por ejemplo, default).

## Verificar el Despliegue
1. Accede al dashboard de ArgoCD.
2. Verifica el estado de los recursos y la sincronización con el repositorio Git.
