

# Desafio 7 - Despliegue Multibranch de Sitio en Diferentes Ambientes Usando Jenkins y Ansible

Este proyecto está configurado para desplegar un sitio HTML en diferentes máquinas utilizando Jenkins y Ansible. Se emplea un pipeline multibranch en Jenkins para gestionar el despliegue en distintos ambientes (main, staging y dev). El proceso de despliegue se controla a través de Ansible, que automatiza la configuración y el manejo de los nodos de las máquinas según el ambiente especificado.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```plaintext
.
├── Jenkinsfile
├── README.md
└── ansible
    ├── files
    │   └── index-template.html
    ├── includes
    │   ├── change-webmaster-email.yml
    │   ├── configure-apache-site.yml
    │   ├── copy-index-html.yml
    │   ├── create-site-directory.yml
    │   ├── disable-default-site.yml
    │   ├── enable-site.yml
    │   └── install-apache2.yml 
    ├── inventory.ini
    ├── main.yml
    ├── templates
    │   └── ansible_site.conf.j2
    └── vars
        └── vars-site.yml
```

## Requisitos

- **Jenkins:** Debe estar configurado con el plugin de Pipeline y el plugin de Ansible.

- **Ansible**: Asegúrate de tener Ansible instalado en tu sistema. Puedes instalarlo usando `pip`:
  ```bash 
  pip install ansible
  ```
- **Acceso SSH**: Asegúrate de tener acceso SSH a los servidores en el archivo inventory.ini.
- **Credenciales SSH:** Las claves SSH para conectarse a los nodos deben estar configuradas en Jenkins.

## Configuración de Jenkins

### 1. **Pipeline Multibranch**

El proyecto utiliza un pipeline multibranch en Jenkins para gestionar el despliegue en diferentes ramas. Asegúrate de configurar tu repositorio en Jenkins como un proyecto de tipo "Pipeline Multibranch".

### 2. **Jenkinsfile**

El `Jenkinsfile` define el pipeline y las etapas necesarias para desplegar el sitio. El archivo `Jenkinsfile` debería estar en la raíz del repositorio y se encarga de:

- **Checkout**: Clonar el código fuente desde el repositorio.
- **Debug**: Imprimir variables de entorno para depuración.
- **Set Environment**: Determinar el ambiente según la rama y reemplazar variables en el archivo HTML.
- **Run Ansible Playbook**: Ejecutar el playbook de Ansible para desplegar el sitio.

### 3. **Credenciales**

Las credenciales para la conexión SSH deben estar configuradas en Jenkins. Crea una credencial de tipo "Secret file" con la clave privada y usa el ID de la credencial en el `Jenkinsfile`.

## Archivos de Ansible

- **`inventory.ini`**: Define los hosts y grupos de nodos para Ansible.
- **`main.yml`**: El playbook principal que llama a los roles y tareas.
- **`vars/vars-site.yml`**: Variables usadas en el playbook de Ansible.
- **`includes/*.yml`**: Tareas y roles incluidos en el playbook principal.
- **`templates/ansible_site.conf.j2`**: Plantilla de configuración para el servidor Apache.
- **`files/index-template.html`**: Archivo HTML de plantilla con variables a reemplazar.

## Uso del Pipeline

### 1. **Preparar el Repositorio**

Asegúrate de que el repositorio esté configurado en Jenkins como un proyecto multibranch. El `Jenkinsfile` debería estar en la raíz del repositorio.

### 2. **Configurar el Pipeline**

En Jenkins, configura el pipeline para usar el `Jenkinsfile` del repositorio. Asegúrate de que el pipeline esté configurado para ejecutar en las ramas adecuadas (main, staging, dev).

### 3. **Ejecutar el Pipeline**

Cuando se realiza un cambio en una rama, el pipeline se activará automáticamente. 
