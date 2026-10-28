# Movie Explorer

Aplicación web en React que consume la API de [The Movie Database (TMDB)](https://developer.themoviedb.org/docs) para buscar películas por título, ver las películas populares y gestionar una lista de favoritos que se conserva entre sesiones (localStorage).

Práctica de Evaluación Continua 2 — Desarrollo Multiplataforma.

## Funcionalidades

- **Home (`/`)**: películas populares al cargar, barra de búsqueda por título, indicador de carga y mensaje de error si falla la API.
- **Favoritos (`/favorites`)**: cuadrícula con las películas favoritas o un mensaje cuando no hay ninguna.
- **Tarjetas**: póster, título, año y botón de favorito (corazón activo/inactivo) en un overlay que aparece al pasar el ratón.
- **Navegación**: barra fija y responsive con React Router.
- **Persistencia**: los favoritos se guardan en `localStorage` mediante Context API.

## Tecnologías

- React 19 + Vite
- React Router DOM 6
- Context API (`createContext`, `useContext`), `useState`, `useEffect`

## Estructura

```
src/
├── App.jsx                 # Rutas y MovieProvider
├── main.jsx                # Punto de entrada (BrowserRouter)
├── components/
│   ├── NavBar.jsx
│   └── MovieCard.jsx
├── pages/
│   ├── Home.jsx            # Llamadas a TMDB (populares y búsqueda)
│   └── Favorites.jsx
├── contexts/
│   └── MovieContext.jsx    # Estado global de favoritos + useMovieContext
└── css/                    # Estilos por componente
```

## Instalación y ejecución

1. Clona el repositorio e instala las dependencias:

   ```bash
   npm install
   ```

2. Crea un archivo `.env` en la raíz (puedes copiar `.env.example`) con tu API Key de TMDB:

   ```
   VITE_TMDB_API_KEY=tu_api_key
   ```

   El archivo `.env` está en `.gitignore` y no se sube al repositorio.

3. Arranca el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   y abre http://localhost:5173.
