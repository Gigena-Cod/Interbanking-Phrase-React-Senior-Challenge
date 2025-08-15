# � Gestor de Frases - Challenge Técnico

Aplicación desarrollada en **React + TypeScript** que permite gestionar frases inspiradoras. Incluye funcionalidades CRUD completas con búsqueda en tiempo real, manejo de estado global con Redux, y una interfaz de usuario intuitiva.

---

## ✨ Funcionalidades principales

- **Agregar frases**
  Modal para ingresar una nueva frase, con validación y notificación al usuario.
- **Visualizar frases en cards**
  Las frases se muestran en una cuadrícula (matriz) con diseño responsive.
- **Búsqueda en tiempo real**
  Filtra dinámicamente las frases mientras el usuario escribe en el buscador.
- **Eliminar frases**
  Botón para borrar cualquier frase de la lista con confirmación visual.

---

## 🛠️ Stack Tecnológico

### Frontend

- **React 18** con TypeScript
- **Vite** como bundler y herramienta de desarrollo
- **Redux Toolkit** para gestión de estado global
- **Styled Components** para estilos
- **React Toastify** para notificaciones

### Herramientas y Utilidades

- **IndexedDB** para almacenamiento local
- **ESLint** + **Prettier** para calidad de código

### Características Principales

- Arquitectura escalable siguiendo principios SOLID y Clean Code
- Tipado estático con TypeScript
- Manejo de errores robusto
- Código modular y reutilizable
- Diseño responsive
- Optimización de rendimiento con memoización

---

## 📂 Estructura del Proyecto

```
src/
├── domain/            # Lógica de negocio y modelos
│   ├── models/        # Interfaces y tipos
│   └── services/      # Servicios y lógica de negocio
│
├── infrastructure/    # Implementación de la infraestructura
│   ├── components/    # Componentes UI reutilizables
│   ├── features/      # Características de la aplicación
│   ├── helpers/       # Utilidades y helpers
│   └── redux/         # Configuración de Redux
│
└── App.tsx            # Componente raíz de la aplicación
```

---

## 🚀 Instalación y Uso

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/interbanking-phrase-challenge.git
   cd interbanking-phrase-challenge
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn
   ```

3. **Iniciar servidor de desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   # o
   yarn build
   ```

---

## � Notas Adicionales

- El proyecto utiliza IndexedDB para persistencia local de datos
- Incluye configuración de ESLint y Prettier para mantener consistencia de código
- Documentación de componentes con JSDoc
- Estructura escalable siguiendo DDD (Domain-Driven Design)

---

## 📄 Licencia

Este proyecto fue desarrollado como parte de un challenge técnico y su código fuente es privado.

---

ℹ️ Para más información sobre la arquitectura o decisiones técnicas, consultar la documentación técnica adjunta.
