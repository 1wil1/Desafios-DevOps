# Desafio 8 - Configurar AWS con Terraform y GitHub Actions

Este proyecto utiliza Terraform y GitHub Actions para desplegar una instancia EC2 en AWS. Aprovecha Terraform Cloud para la gestión de la infraestructura y GitHub Actions para automatizar la ejecución de planes y aplicaciones de Terraform. El desarrollo se realizo con base en el [tutorial](https://developer.hashicorp.com/terraform/tutorials/automation/github-actions) de hashicorp.

## Prerequisitos

- **Terraform Cloud**: Debes tener una cuenta en [Terraform Cloud](https://app.terraform.io/).
- **AWS Account**: Necesitas una cuenta de AWS con permisos adecuados para crear recursos.
- **GitHub**: Un repositorio en GitHub para alojar el código y configurar GitHub Actions.

## Configuración del Proyecto

### 1. Configurar Terraform Cloud

1. **Crear un Workspace**:
   - Accede a [Terraform Cloud](https://app.terraform.io/) y crea un nuevo workspace.
   - Anota el nombre del workspace.

3. **Configurar el Workspace**:

    - En el workspace, configura las variables de entorno necesarias, como las credenciales de AWS (AWS_ACCESS_KEY_ID y AWS_SECRET_ACCESS_KEY), y cualquier otra variable requerida.

2. **Obtener el API Token**:
   - En Terraform Cloud, ve a tu perfil y genera un token de API (Token de Autenticación).
   - Copia tu API Token.

### 2. Configurar GitHub Secrets

1. En tu repositorio de GitHub, ve a `Settings` -> `Secrets and variables` -> `Actions`.
2. Agrega los siguientes secretos:

   - `TF_API_TOKEN`: Tu API Token de Terraform Cloud.
   - `TF_ORGANIZATION`: El nombre de tu organización en Terraform Cloud.
   - `TF_WORKSPACE`: El nombre del workspace que creaste en Terraform Cloud.
### 3. Archivos del Proyecto
1. **Archivo de Workflow de GitHub Actions**
    - En tu repositorio de GitHub, crea un archivo de configuración para GitHub Actions en la ruta /.github/workflows/
    - `terraform-apply.yml`:
   Este archivo configura el flujo de trabajo de GitHub Actions para aplicar los cambios de Terraform a Terraform Cloud.

2. **Archivo principal de terraform** 
    
    - `main.tf`: Este archivo contiene la configuración de Terraform para desplegar una instancia de EC2 en AWS.

### 4. Ejecutar el Flujo de Trabajo

Cada vez que hagas un push a la rama main, GitHub Actions ejecutará el flujo de trabajo terraform-apply.yml, que aplicará los cambios en Terraform Cloud.
- Push a GitHub: Realiza un push a la rama principal (main) o abre un pull request para activar el workflow.
- Monitorea el Workflow: Ve a la pestaña de Actions en tu repositorio de GitHub y revisa la ejecución del workflow para asegurarte de que todo está funcionando correctamente.

### 5. Verificar el Despliegue
- Ve a Terraform Cloud para ver el estado del despliegue.
- Puedes acceder a la instancia EC2 creada en AWS a través del DNS público proporcionado en el output.
