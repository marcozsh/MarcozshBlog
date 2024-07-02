# Api Rest Blog

Este es un proyecto para un blog creado con django y React (Next.js)

## Requisitos Previos

Asegúrate de tener instalados los siguientes componentes en tu sistema:

- Python 3.x
- pip (gestor de paquetes de Python)
- virtualenv (opcional pero recomendado)
- Node v22.3.0
- NPM v10.8.1

## Instalación

### Proyecto Django
1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/proyecto.git
   cd proyecto
   ```
   
2. crear e iniciar el virtual env
   ``` bash
      python -m venv nombre_virtualenv
      carpeta_descargada\nombre_virtualenv\Scripts\activate
   ```

3. Una vez iniciado el virtual env, se deben instalar los requerimientos
   ``` bash
   pip install -r requeriments.txt
   ```

4. Realizar las migraciones correspondientes
   ``` bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. Crear el super usuario
   ```bash
   python manage.py createsuperuser
   ```

6. Por último levantar el back end
   ```
   python manage.py runserver
   ```

### Proyecto React(Next.js)

1. Ir a la carpeta `blog_project_front` y abrir una terminal y escribir
   ``` bash
   npm install
   ```



