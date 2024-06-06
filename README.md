# LeGrafica

Prueba tecnica LeGrafica.

## Prerrequisitos

- **Node.js**: Asegúrate de tener Node.js instalado. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).
- **MySQL**: Asegúrate de tener MySQL instalado y configurado. Puedes descargarlo e instalarlo desde [mysql.com](https://www.mysql.com/).

## Instrucciones de Configuración

### Paso 1: Clonar el Proyecto

Clona el repositorio del proyecto en tu PC:

git clone https://github.com/omarCelaya/LeGrafica.git


### Paso 2: Instalar Dependencias

Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

cd BACK-END_LEGRAFICA
npm install


### Paso 3: Configurar la Base de Datos

- Crea una base de datos en MySQL para el proyecto.
- Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

PORT=3000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_tu_base_de_datos
JWT_SECRET=tu_secreto_jwt

Reemplaza tu_usuario, tu_contraseña, y nombre_de_tu_base_de_datos con tus configuraciones de MySQL.

### Paso 4: Ejecutar las Migraciones
(Este paso es opcional si tienes scripts de migración o puedes crear la tabla manualmente).

-- Crear la base de datos
```
CREATE DATABASE IF NOT EXISTS mi_base_de_datos;
```
-- Usar la base de datos
```
USE mi_base_de_datos;
```
-- Crear la tabla usuarios
```
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(15)
);
```

### Paso 5: Iniciar el Servidor
Inicia el servidor con el siguiente comando:

node index.js

### Uso Probar los Endpoints
Utiliza herramientas como Postman o cURL para probar los endpoints. Aquí hay algunos ejemplos de cómo probar cada endpoint:

### Crear Cliente
```
POST /api/clientes
Content-Type: application/json
```
```
{
  "nombre": "Omar Celaya",
  "email": "omar.celaya@example.com",
  "password": "Password123!",
  "telefono": "1234567890"
}
```
### Obtener Todos los Clientes
```
GET /api/clientes
Authorization: Bearer <tu_token>
```
### Obtener Cliente por ID
```
GET /api/clientes/:id
Authorization: Bearer <tu_token>
```
### Actualizar Cliente
```
PUT /api/clientes/:id
Authorization: Bearer <tu_token>
Content-Type: application/json
```
```
{
  "nombre": "Omar Celaya Actualizado",
  "email": "omar.celaya@example.com",
  "password": "Password123!",
  "telefono": "0987654321"
}
```
### Eliminar Cliente
```
DELETE /api/clientes/:id
Authorization: Bearer <tu_token>
```
### Login y Generar Token JWT
```
POST /api/auth/login
Content-Type: application/json
```
```
{
  "email": "omar.celaya@example.com",
  "password": "Password123!"
}
```

### Desencriptar Token JWT
GET /api/auth/decode
Authorization: Bearer <tu_token>
