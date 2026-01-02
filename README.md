# 🌍 Turismo Sensorial

¡Bienvenido a **Turismo Sensorial**! Una aplicación web diseñada para transformar la forma en que experimentas los viajes, ofreciendo una inmersión profunda a través de experiencias visuales y auditivas de diversos destinos turísticos.

## 📖 Descripción

Este proyecto busca conectar a los viajeros con sus destinos de una manera única, permitiéndoles explorar lugares no solo a través de imágenes, sino también mediante sonidos y narrativas envolventes. La plataforma está construida para ser intuitiva, visualmente atractiva y altamente interactiva.

## ✨ Características Principales

- **Exploración Inmersiva**: Descubre destinos a través de galerías visuales y experiencias auditivas.
- **Interfaz Dinámica**: Animaciones fluidas al navegar y desplazarse (scroll) para una experiencia de usuario premium.
- **Gestión de Destinos**: Información detallada sobre lugares turísticos.
- **Autenticación de Usuarios**: (En desarrollo) Inicio de sesión seguro para guardar favoritos y personalizar la experiencia.
- **Diseño Responsivo**: Adaptado perfectamente para móviles, tablets y escritorio.

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza un stack moderno y eficiente:

- **Frontend**:
  - [React](https://reactjs.org/) (v19) - Biblioteca principal para la interfaz de usuario.
  - [React Router](https://reactrouter.com/) - Para la navegación entre páginas.
  - [SASS](https://sass-lang.com/) - Preprocesador CSS para estilos modulares y avanzados.
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Para animaciones al hacer scroll.
  - [React Icons](https://react-icons.github.io/react-icons/) - Iconografía moderna y escalable.

- **Backend & Servicios**:
  - [Supabase](https://supabase.com/) - Base de datos en tiempo real y autenticación.

## 🚀 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio**
    ```bash
    git clone https://github.com/Danirodrigzz/Turismo_sensorial.git
    cd Turismo_sensorial
    ```

2.  **Instalar dependencias**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**
    Crea un archivo `.env` en la raíz del proyecto basándote en el archivo `.env.example`. Asegúrate de incluir tus credenciales de Supabase:
    ```env
    REACT_APP_SUPABASE_URL=tu-url-de-supabase
    REACT_APP_SUPABASE_ANON_KEY=tu-anon-key-de-supabase
    ```

4.  **Iniciar el servidor de desarrollo**
    ```bash
    npm start
    ```
    La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000).

## 📂 Estructura del Proyecto

```
travel/
├── public/           # Archivos estáticos
├── src/
│   ├── Components/   # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── login/        # Componentes de autenticación
│   ├── pages/        # Páginas principales (Home, Destinos, etc.)
│   ├── services/     # Configuración de servicios externos (Supabase)
│   ├── App.js        # Componente raíz
│   ├── index.js      # Punto de entrada
│   └── ...
├── .env              # Variables de entorno (NO subir al repo)
└── package.json      # Dependencias y scripts
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1.  Haz un Fork del repositorio.
2.  Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`).
3.  Haz commit de tus cambios (`git commit -m 'Agrega nueva característica'`).
4.  Haz push a la rama (`git push origin feature/NuevaCaracteristica`).
5.  Abre un Pull Request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
Diseñado y desarrollado con ❤️ por [Danirodrigzz](https://github.com/Danirodrigzz).
