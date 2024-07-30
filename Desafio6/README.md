

# Desafio 6 Ansible Modularizado

Este proyecto utiliza Ansible para desplegar un sitio web estático en servidores Ubuntu, utilizando una configuración modularizada. El playbook está diseñado para instalar Apache, configurar un sitio web, y realizar tareas relacionadas con la administración del servidor.

## Estructura del Proyecto


```plaintext
├── README.md
└── ansible
    ├── files
    │   └── index.html                  # Archivo HTML que se desplegará
    ├── includes
    │   ├── change-webmaster-email.yml  # Tarea para cambiar el e-mail del webmaster
    │   ├── configure-apache-site.yml   # Tarea para configurar el sitio en Apache
    │   ├── copy-index-html.yml         # Tarea para copiar el archivo index.html
    │   ├── create-site-directory.yml   # Tarea para crear el directorio del sitio
    │   ├── disable-default-site.yml    # Tarea para deshabilitar el sitio default en Apache
    │   ├── enable-site.yml             # Tarea para habilitar el nuevo sitio en Apache
    │   └── install-apache2.yml          # Tarea para instalar Apache
    ├── inventory.ini                   # Archivo de inventario con los hosts
    ├── main.yml                        # Playbook principal
    ├── templates
    │   └── ansible_site.conf.j2         # Plantilla de configuración de Apache
    └── vars
        └── vars-site.yml               # Archivo de variables

```

## Requisitos

- **Ansible**: Asegúrate de tener Ansible instalado en tu sistema. Puedes instalarlo usando `pip`:
  ```bash 
  pip install ansible
  ```
- **Acceso SSH**: Asegúrate de tener acceso SSH a los servidores en el archivo inventory.ini.



## Ejecutar el Playbook

Para desplegar el sitio web, ejecuta el siguiente comando en la raíz del proyecto:


  ```bash 
  ansible-playbook -i ansible/inventory.ini ansible/main.yml
```

