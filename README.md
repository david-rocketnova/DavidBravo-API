# DavidBravo-API

Mini servidor web hecho con **Node.js** y **Express**.
Expone un endpoint `GET /` que devuelve un saludo del desarrollador.

## Endpoint

| Método | Ruta | Respuesta | Código |
|--------|------|-----------|--------|
| GET | `/` | `HOLA SOY DAVID BRAVO` | 200 |
| GET | `/health` | `{"status":"ok","service":"davidbravo-API"}` | 200 |

## Ejecución en local

```bash
npm install
npm start
