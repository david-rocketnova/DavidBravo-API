# DavidBravo-API

API REST de práctica desarrollada con **Node.js** y **Express**. Expone varios
endpoints (usuarios, productos y estado del servicio) y sirve una página HTML
como panel de inicio que consume la propia API con `fetch()`.

Proyecto desplegado en la nube con **Render** y versionado con **Git/GitHub**.

---

## Descripción

Este proyecto es una práctica de desarrollo backend en la que se ha construido,
desde cero, un servidor web capaz de:

- Servir una página HTML estática (panel de inicio).
- Exponer una API JSON con datos de ejemplo (usuarios y productos).
- Gestionar rutas con parámetros y códigos de estado HTTP (200, 404).
- Consumir la propia API desde el frontend mediante `fetch()`.
- Desplegarse automáticamente en la nube a partir de un repositorio de GitHub.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **Node.js** | Entorno de ejecución del servidor |
| **Express** | Framework para definir rutas y servir archivos |
| **HTML5** | Estructura de la página de inicio |
| **CSS3** | Estilos de la página |
| **JavaScript (fetch)** | Consumo de la API desde el navegador |
| **Git / GitHub** | Control de versiones |
| **Render** | Despliegue en la nube con auto-deploy |

---

## Cómo ejecutar el proyecto localmente

1. Clona el repositorio:

   ```bash
   git clone https://github.com/david-rocketnova/DavidBravo-API.git
   cd DavidBravo-API
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Arranca el servidor:

   ```bash
   node server.js
   ```

   (o `npm start`)

4. Abre en el navegador:

   ```
   http://localhost:3000
   ```

---

## Lista de endpoints

| Método | Ruta | Descripción | Código |
|---|---|---|---|
| GET | `/` | Página HTML de inicio (panel) | 200 |
| GET | `/health` | Estado del servicio | 200 |
| GET | `/usuarios` | Lista completa de usuarios | 200 |
| GET | `/usuarios/:id` | Usuario por id | 200 / **404** |
| GET | `/productos` | Lista completa de productos | 200 |

### Ejemplos de respuesta

**`GET /usuarios`**

```json
[
  { "id": 1, "nombre": "Juan" },
  { "id": 2, "nombre": "Maria" },
  { "id": 3, "nombre": "Pedro" }
]
```

**`GET /usuarios/99`** → `404 Not Found`

```json
{ "mensaje": "Usuario no encontrado", "id": 99 }
```

**`GET /productos`**

```json
[
  { "id": 1, "nombre": "Pizza", "precio": 30000 },
  { "id": 2, "nombre": "Hamburguesa", "precio": 25000 },
  { "id": 3, "nombre": "Coca-Cola", "precio": 10000 }
]
```

---

## Aplicación en producción (Render)

🔗 **URL pública:** https://davidbravo-api.onrender.com

- Página HTML: https://davidbravo-api.onrender.com/
- Usuarios: https://davidbravo-api.onrender.com/usuarios
- Productos: https://davidbravo-api.onrender.com/productos

> ℹ️ El servicio usa el plan gratuito de Render, que se "duerme" tras un tiempo
> de inactividad. La primera petición puede tardar unos 50 segundos en responder.

---

## Explicación de lo realizado

1. **Preparación del entorno:** creación del repositorio y del proyecto Node.js
   con Express, y despliegue inicial en Render conectado a GitHub.
2. **Endpoint `/usuarios`:** primera ruta que devuelve un array de objetos en JSON.
3. **Endpoint `/usuarios/:id`:** ruta con parámetro y gestión del error 404 cuando
   el usuario no existe.
4. **Página HTML:** carpeta `public/` con un `index.html` servido como archivo
   estático mediante `express.static()`.
5. **Conexión HTML ↔ API:** uso de `fetch()` desde el navegador para cargar los
   usuarios de forma dinámica.
6. **Endpoint `/productos`:** nueva ruta con datos de productos, también mostrados
   en la página.
7. **Despliegue continuo:** cada commit en GitHub redespliega la aplicación en
   Render automáticamente.
8. **Pruebas:** verificación de todos los endpoints en local y en producción, y
   pruebas de las peticiones HTTP con Postman.