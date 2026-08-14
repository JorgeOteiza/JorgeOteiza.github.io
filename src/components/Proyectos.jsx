import React, { useEffect, useRef, useState } from "react";
import "../styles/Proyectos.css";

const iconos = {
  figma: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    alt: "Figma",
  },
  javascript: {
    src: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png",
    alt: "JavaScript",
  },
  typescript: {
    src: "https://www.svgrepo.com/show/349540/typescript.svg",
    alt: "TypeScript",
  },
  react: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
  },
  vite: {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
    alt: "Vite",
  },
  python: {
    src: "https://tse4.mm.bing.net/th?id=OIP.dJToM1TiZiJA0GYwzDHwjQHaHY&pid=Api",
    alt: "Python",
  },
  flask: {
    src: "/logo-flask.2.png",
    alt: "Flask",
  },
  fastapi: {
    src: "/pngwing.com.png",
    alt: "FastAPI",
  },
  postgres: {
    src: "/logo-postgreSQL.png",
    alt: "PostgreSQL",
  },
  sqlite: {
    src: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    alt: "SQLite",
  },
  sqlalchemy: {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/SQLAlchemy.svg",
    alt: "SQLAlchemy",
  },
  jwt: {
    src: "/JWTicon.png",
    alt: "JWT",
  },
  postman: {
    src: "/LogoPostman.png",
    alt: "Postman",
  },
  pytest: {
    src: "/pytest-logo.svg",
    alt: "Pytest",
  },
  redis: {
    src: "https://www.svgrepo.com/show/354272/redis.svg",
    alt: "Redis",
  },
  bootstrap: {
    src: "/logoBootstrap.png",
    alt: "Bootstrap",
  },
};

const minimarketMedia = [
  {
    src: "/projects/minimarket-pos/estadisticas-resumen.png",
    alt: "Dashboard de estadísticas y resumen comercial de Minimarket Manager",
  },
  {
    src: "/projects/minimarket-pos/estadisticas-inventario.png",
    alt: "Productos más vendidos y alertas de inventario",
  },
  {
    src: "/projects/minimarket-pos/lista-productos.png",
    alt: "Listado y búsqueda de productos en Minimarket Manager",
  },
  {
    src: "/projects/minimarket-pos/ajuste-inventario.png",
    alt: "Ajuste manual de inventario en Minimarket Manager",
  },
  {
    src: "/projects/minimarket-pos/caja-carrito.png",
    alt: "Punto de venta de Minimarket Manager con productos en el carrito",
  },
  {
    src: "/projects/minimarket-pos/reportes-ventas.png",
    alt: "Reporte de ventas por periodo de Minimarket Manager",
  },
  {
    src: "/projects/minimarket-pos/edicion-producto.png",
    alt: "Edición de costos, precios y stock de un producto",
  },
  {
    src: "/projects/minimarket-pos/reposicion-sacos-paquetes.png",
    alt: "Registro de reposición de sacos y paquetes",
  },
  {
    src: "/projects/minimarket-pos/historial-reposiciones.png",
    alt: "Historial de reposiciones de productos a granel",
  },
  {
    src: "/projects/minimarket-pos/atajos.png",
    alt: "Panel de atajos de teclado de Minimarket Manager",
  },
];

const minimarketPhoneMedia = [
  minimarketMedia[0],
  minimarketMedia[2],
  minimarketMedia[4],
];

const ecommercePhoneMedia = [
  {
    src: "/projects/ecommerce/iphone-navigation-home.png",
    device: "phone",
    alt: "Menú móvil y portada principal de El Rincón del Vino en iPhone 12 Pro",
  },
  {
    src: "/projects/ecommerce/iphone-cart-menu.png",
    device: "phone",
    alt: "Carrito desplegable de El Rincón del Vino en iPhone 12 Pro",
  },
  {
    src: "/projects/ecommerce/iphone-order-success.png",
    device: "phone",
    alt: "Confirmación de compra de El Rincón del Vino en iPhone 12 Pro",
  },
];

const ecommerceMedia = [
  {
    src: "/projects/ecommerce/home.png",
    alt: "Página principal de El Rincón del Vino",
  },
  ecommercePhoneMedia[0],
  {
    src: "/projects/ecommerce/ipad-premium-selection.png",
    device: "tablet",
    alt: "Selección Premium de El Rincón del Vino en iPad Air",
  },
  {
    src: "/projects/ecommerce/favorites.png",
    alt: "Selección de vinos favoritos de El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/product-detail.png",
    alt: "Detalle responsive de un vino en El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/tablet-cart.png",
    device: "tablet",
    alt: "Carrito y resumen de compra de El Rincón del Vino",
  },
  ecommercePhoneMedia[1],
  {
    src: "/projects/ecommerce/payment.png",
    alt: "Selección de método de pago de El Rincón del Vino",
  },
  ecommercePhoneMedia[2],
  {
    src: "/projects/ecommerce/purchase-history.png",
    alt: "Historial de compras de El Rincón del Vino",
  },
  {
    src: "/projects/ecommerce/ipad-responsible-consumption.png",
    device: "tablet",
    alt: "Control de consumo responsable de El Rincón del Vino en iPad Air",
  },
  {
    src: "/projects/ecommerce/responsive-catalog-filters.png",
    device: "tablet",
    alt: "Catálogo responsive con filtros aplicados en El Rincón del Vino",
  },
];

const travelCalculatorTabletMedia = [
  {
    src: "/projects/travel-calculator/ipad-hero.png",
    device: "tablet",
    alt: "Portada responsive de Travel Calculator en iPad",
  },
  {
    src: "/projects/travel-calculator/ipad-calculator.png",
    device: "tablet",
    alt: "Calculadora de ruta con formulario y mapa en iPad",
  },
  {
    src: "/projects/travel-calculator/ipad-result.png",
    device: "tablet",
    alt: "Resultado de costo y consumo de Travel Calculator en iPad",
  },
];

const travelCalculatorMedia = [
  ...travelCalculatorTabletMedia,
  { src: "/projects/travel-calculator/desktop-calculator-route.png", alt: "Calculadora con ruta activa en la vista de escritorio" },
  { src: "/projects/travel-calculator/desktop-result.png", alt: "Resumen del cálculo de viaje en la vista de escritorio" },
  { src: "/projects/travel-calculator/desktop-analysis.png", alt: "Análisis detallado con elevación y consumo por segmento" },
  { src: "/projects/travel-calculator/desktop-profile.png", alt: "Historial de viajes guardados en la vista de escritorio" },
  { src: "/projects/travel-calculator/ipad-analysis.png", device: "tablet", alt: "Análisis detallado de un viaje en iPad" },
  { src: "/projects/travel-calculator/ipad-share.png", device: "tablet", alt: "Opciones para compartir una estimación en iPad" },
  { src: "/projects/travel-calculator/ipad-profile.png", device: "tablet", alt: "Perfil e historial de estimaciones en iPad" },
  { src: "/projects/travel-calculator/ipad-about.png", device: "tablet", alt: "Metodología y arquitectura de Travel Calculator en iPad" },
  { src: "/projects/travel-calculator/iphone-calculator.png", device: "phone", alt: "Formulario de Travel Calculator en iPhone" },
  { src: "/projects/travel-calculator/iphone-profile.png", device: "phone", alt: "Historial de Travel Calculator en iPhone" },
];

const authflowPhoneMedia = [
  {
    src: "/projects/authflow/iphone-hero.png",
    device: "phone",
    alt: "Portada de AuthFlow en iPhone 12 Pro",
  },
  {
    src: "/projects/authflow/iphone-signup.png",
    device: "phone",
    alt: "Creación de cuenta de AuthFlow en iPhone 12 Pro",
  },
  {
    src: "/projects/authflow/iphone-profile.png",
    device: "phone",
    alt: "Perfil protegido de AuthFlow en iPhone 12 Pro",
  },
];

const authflowMedia = [
  { src: "/projects/authflow/desktop-hero.png", alt: "Portada de AuthFlow en escritorio" },
  { src: "/projects/authflow/desktop-signup.png", alt: "Creación de cuenta de AuthFlow en escritorio" },
  { src: "/projects/authflow/ipad-hero.png", device: "tablet", alt: "Portada responsive de AuthFlow en iPad Air" },
  { src: "/projects/authflow/ipad-profile.png", device: "tablet", alt: "Perfil y seguridad de cuenta de AuthFlow en iPad Air" },
  ...authflowPhoneMedia,
  { src: "/projects/authflow/iphone-email-verified.png", device: "phone", alt: "Confirmación de correo verificado en AuthFlow" },
  { src: "/projects/authflow/iphone-delete-confirmation.png", device: "phone", alt: "Confirmación segura para eliminar una cuenta en AuthFlow" },
  { src: "/projects/authflow/iphone-account-deleted.png", device: "phone", alt: "Cuenta eliminada correctamente en AuthFlow" },
];

const starWarsMedia = [
  {
    src: "/projects/star-wars-blog/desktop-home.png",
    alt: "Portada del archivo galáctico de Star Wars en escritorio",
  },
  {
    src: "/projects/star-wars-blog/desktop-collections.png",
    alt: "Colecciones de personajes, vehículos y planetas en escritorio",
  },
  {
    src: "/projects/star-wars-blog/desktop-characters.png",
    alt: "Catálogo de personajes de Star Wars en escritorio",
  },
  {
    src: "/projects/star-wars-blog/desktop-character-detail.png",
    alt: "Ficha detallada de Yoda en el archivo galáctico",
  },
  {
    src: "/projects/star-wars-blog/desktop-favorites.png",
    alt: "Colección de favoritos abierta sobre el catálogo de planetas",
  },
  {
    src: "/projects/star-wars-blog/tablet-collections.png",
    device: "tablet",
    alt: "Colecciones del archivo galáctico en vista tablet",
  },
  {
    src: "/projects/star-wars-blog/iphone-home.png",
    device: "phone",
    alt: "Portada responsive del blog de Star Wars en iPhone 12 Pro",
  },
  {
    src: "/projects/star-wars-blog/iphone-menu.png",
    device: "phone",
    alt: "Menú móvil y colecciones del blog de Star Wars en iPhone 12 Pro",
  },
];

const proyectos = [
  {
    titulo: "Minimarket Manager",
    imagen: minimarketMedia[0].src,
    alt: minimarketMedia[0].alt,
    resumen:
      "Sistema local de gestión comercial para ventas, inventario, reportes y respaldos.",
    repo: "https://github.com/JorgeOteiza/minimarket-pos",
    demo: "",
    rol: "Desarrollo full stack: diseño de interfaz, arquitectura frontend, API REST, modelado de datos, reglas de negocio, respaldos y empaquetado para Windows.",
    enfoque:
      "Sistema local de gestión comercial para operar ventas, inventario, reportes y respaldos desde un solo equipo, sin servidor remoto ni conexión permanente a internet. Registra cada venta, actualiza automáticamente el stock y conserva la información necesaria para analizar la operación del negocio.",
    phoneMedia: minimarketPhoneMedia,
    media: minimarketMedia,
    detalles: [
      "Centraliza productos, precios, stock y ventas.",
      "Registra ventas y descuenta automáticamente el inventario.",
      "Detecta productos con stock insuficiente o sin precio.",
      "Permite administrar productos unitarios, sacos y ventas a granel.",
      "Genera reportes, estadísticas comerciales y documentos PDF.",
      "Importa productos desde archivos CSV.",
      "Mantiene respaldos manuales y automáticos de la información.",
      "Permite configurar localmente los datos del negocio.",
    ],
    stack: {
      "Backend y datos": [
        "Python 3.12",
        "Flask",
        "SQLAlchemy",
        "Flask-Migrate / Alembic",
        "SQLite local",
        "Marshmallow",
        "pytest",
      ],
      Frontend: [
        "React",
        "TypeScript",
        "Vite",
        "React Router",
        "Recharts",
      ],
    },
    aporteTecnico:
      "Aplicación preparada para funcionar localmente y distribuirse como programa de escritorio en Windows, con persistencia en SQLite, migraciones de base de datos, pruebas automatizadas y respaldos integrados.",
    tecnologias: [
      "typescript",
      "react",
      "vite",
      "python",
      "flask",
      "sqlite",
      "sqlalchemy",
      "pytest",
    ],
    tecnologiasTarjeta: ["react", "flask", "sqlite"],
    cardDevice: "desktop",
    destacado: true,
  },
  {
    titulo: "El Rincón del Vino",
    imagen: ecommerceMedia[0].src,
    alt: ecommerceMedia[0].alt,
    resumen:
      "E-commerce full stack de vinos con catálogo, favoritos y compra responsive.",
    repo: "https://github.com/JorgeOteiza/final-project-FT22-g2_sitio.Web_E-Comerce",
    demo: "",
    rol: "Desarrollo full stack en equipo y posterior mantenimiento y evolución individual.",
    enfoque:
      "Aplicación e-commerce desarrollada originalmente en equipo para descubrir vinos, filtrar el catálogo, guardar favoritos y completar un flujo de compra desde distintos dispositivos.",
    stack: {
      Frontend: ["React", "JavaScript"],
      "Backend y datos": [
        "Python",
        "Flask",
        "SQLAlchemy",
        "PostgreSQL",
        "JWT",
      ],
      "Diseño y colaboración": ["Figma", "Kanban"],
    },
    phoneMedia: ecommercePhoneMedia,
    media: ecommerceMedia,
    detalles: [
      "Autenticación y protección de rutas mediante JWT.",
      "API REST para usuarios, productos, favoritos y compras.",
      "Catálogo con búsqueda, filtros, stock y precios promocionales.",
      "Carrito y flujo de compra responsive de principio a fin.",
      "Gestión de estado y consumo de datos desde React.",
      "Desarrollo colaborativo con metodología Kanban.",
    ],
    aporteTecnico:
      "Flujo de compra responsive conectado a una API REST, con autenticación JWT y persistencia en PostgreSQL para usuarios, productos, favoritos y compras.",
    tecnologias: [
      "figma",
      "javascript",
      "react",
      "python",
      "flask",
      "postgres",
      "sqlalchemy",
      "jwt",
    ],
    tecnologiasTarjeta: ["react", "flask", "postgres"],
  },
  {
    titulo: "Travel Calculator",
    imagen: travelCalculatorTabletMedia[0].src,
    alt: travelCalculatorTabletMedia[0].alt,
    resumen:
      "Estima el consumo y costo de una ruta según el vehículo, rendimiento, pendientes, clima, tráfico y carga.",
    fraseImpacto:
      "Una estimación de combustible que entiende el vehículo y la ruta completa.",
    repo: "https://github.com/JorgeOteiza/travel.calculator",
    demo: "",
    rol: "Desarrollo full stack: diseño de interfaz responsive, arquitectura frontend, API REST, modelo de cálculo, integración de servicios externos, persistencia y pruebas automatizadas.",
    enfoque:
      "Travel Calculator transforma los datos del vehículo y las condiciones del recorrido en una estimación contextual y explicable. Además del resultado rápido, permite revisar el consumo por segmento, el perfil de elevación y los factores que modificaron el cálculo.",
    stack: {
      Frontend: ["React", "JavaScript", "Vite"],
      "Backend y datos": [
        "Python",
        "Flask",
        "SQLAlchemy",
        "PostgreSQL",
        "JWT",
      ],
      "Servicios externos": ["Google Maps", "Open-Meteo"],
    },
    phoneMedia: travelCalculatorTabletMedia,
    media: travelCalculatorMedia,
    detalles: [
      "Mejora las estimaciones basadas únicamente en distancia y consumo promedio.",
      "Adapta el rendimiento estándar o informado por el usuario al contexto de la ruta.",
      "Considera pendientes, elevación, clima, tipo de vía, tráfico horario, pasajeros, carga y estilo de conducción.",
      "Presenta un resumen inmediato y un análisis detallado con gráficos por segmento.",
      "Permite buscar rutas, utilizar la ubicación actual y consultar viajes guardados.",
      "Mantiene un historial autenticado con vistas de cuadrícula y lista.",
      "Utiliza proveedores gratuitos para clima y elevación y bloquea servicios pagados del backend por defecto.",
      "Persistencia de usuarios e historial de viajes en PostgreSQL mediante SQLAlchemy.",
    ],
    aporteTecnico:
      "Modelo de consumo modular y probado mediante 17 casos automatizados, con cálculo segmentado de la ruta, persistencia en PostgreSQL y una experiencia responsive optimizada para escritorio, iPad y dispositivos móviles.",
    tecnologias: [
      "javascript",
      "react",
      "vite",
      "python",
      "flask",
      "postgres",
      "sqlalchemy",
      "jwt",
    ],
    tecnologiasTarjeta: ["react", "flask", "postgres"],
    cardDevice: "tablet",
  },
  {
    titulo: "AuthFlow",
    imagen: authflowPhoneMedia[0].src,
    alt: authflowPhoneMedia[0].alt,
    resumen:
      "Plataforma full stack de autenticación con sesiones JWT en cookies HttpOnly, verificación de correo y gestión segura de cuentas.",
    fraseImpacto:
      "Autenticación full stack con JWT en cookies HttpOnly, protección CSRF, rotación y revocación de sesiones, PostgreSQL, Redis y pruebas E2E responsive.",
    repo: "https://github.com/JorgeOteiza/authflow-react-flask",
    demo: "",
    rol: "Diseño y desarrollo full stack. Implementé la interfaz responsive, la API REST, el modelo de datos, la gestión de sesiones, los controles de seguridad, las migraciones y la estrategia de pruebas automatizadas.",
    enfoque:
      "Sistema full stack de autenticación diseñado para gestionar el ciclo completo de una cuenta: registro, verificación de correo, inicio y renovación de sesión, recuperación de contraseña, edición del perfil y eliminación segura.",
    phoneMedia: authflowPhoneMedia,
    media: authflowMedia,
    detalles: [
      "Registro con normalización de correo y política de contraseñas.",
      "Verificación de correo mediante tokens de un solo uso y duración limitada.",
      "Inicio de sesión con protección frente a intentos de fuerza bruta.",
      "Sesiones mediante access tokens de 15 minutos y refresh tokens de 7 días.",
      "Rotación del refresh token e invalidación del token anterior.",
      "Revocación efectiva de sesiones al cerrar sesión o eliminar la cuenta.",
      "Recuperación segura de contraseña mediante enlaces temporales.",
      "Perfil privado que obtiene la identidad directamente desde el JWT.",
      "Actualización y eliminación de la propia cuenta verificando la contraseña actual.",
      "Límites de solicitudes compartidos mediante Redis.",
      "Persistencia en PostgreSQL y migraciones administradas con Alembic.",
      "Interfaz responsive validada en escritorio, iPad, iPhone 12 Pro y Galaxy.",
    ],
    stack: {
      Frontend: ["React 19", "JavaScript", "React Router", "Context API", "Webpack"],
      "Backend y datos": ["Python", "Flask", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis"],
      Seguridad: [
        "JWT en cookies HttpOnly",
        "Protección CSRF",
        "Access y refresh tokens",
        "Rotación y revocación de tokens",
        "Verificación de correo",
        "Recuperación de contraseña",
        "Hash seguro de contraseñas",
        "Rate limiting",
        "Registro de eventos de seguridad",
      ],
      "Pruebas e infraestructura": [
        "Pytest",
        "Vitest",
        "Playwright",
        "Docker Compose",
        "GitHub Actions",
        "Render",
      ],
    },
    aporteTecnico:
      "Diseñé un flujo de autenticación de extremo a extremo donde los JWT no se almacenan en localStorage ni sessionStorage, sino en cookies HttpOnly. La aplicación combina protección CSRF, access tokens breves, rotación de refresh tokens, revocación persistente y control de versión de sesión para invalidar credenciales comprometidas. También implementé verificación de correo, recuperación de contraseña con tokens de un solo uso, comprobación opcional de contraseñas comprometidas mediante k-anonymity y auditoría interna de eventos de seguridad.",
    calidadValidacion:
      "La API cuenta con pruebas de autenticación, permisos, CSRF, revocación, rotación, rate limiting y preflights CORS. El frontend utiliza pruebas con Vitest y el recorrido completo se verifica con Playwright en escritorio y dispositivos móviles, utilizando un entorno E2E aislado con SQLite en memoria.",
    origenProyecto:
      "AuthFlow comenzó como un ejercicio de autenticación durante un bootcamp full stack. Posteriormente fue reconstruido, ampliado y mantenido de forma independiente, incorporando una arquitectura propia, controles de seguridad modernos, PostgreSQL, Redis, pruebas automatizadas y una nueva interfaz responsive.",
    tecnologias: [
      "javascript",
      "react",
      "python",
      "flask",
      "postgres",
      "sqlalchemy",
      "jwt",
      "pytest",
      "redis",
    ],
    tecnologiasTarjeta: ["react", "flask", "postgres", "redis"],
  },
  {
    titulo: "Archivo Galáctico de Star Wars",
    imagen: starWarsMedia[0].src,
    alt: starWarsMedia[0].alt,
    resumen:
      "Aplicación React para explorar personajes, vehículos y planetas mediante SWAPI, con catálogos paginados, fichas detalladas y favoritos persistentes.",
    fraseImpacto:
      "Una experiencia de exploración galáctica construida a partir de datos públicos.",
    repo: "https://github.com/JorgeOteiza/project_Blog_de_StarWars",
    demo: "",
    rol: "Desarrollo frontend integral: arquitectura de componentes en React, integración y normalización de SWAPI, estado global, persistencia local, interfaz responsive y gestión de estados de carga, errores e imágenes alternativas.",
    enfoque:
      "Aplicación web interactiva que transforma los datos de SWAPI en un archivo galáctico visual y responsive, con navegación por categorías, catálogos paginados, fichas detalladas y una colección de favoritos persistente.",
    media: starWarsMedia,
    detalles: [
      "Explora personajes, vehículos y planetas de Star Wars.",
      "Presenta catálogos paginados y fichas individuales con información detallada.",
      "Carga progresivamente nuevos registros desde SWAPI.",
      "Permite añadir y eliminar elementos de una colección de favoritos.",
      "Conserva los favoritos entre sesiones mediante LocalStorage.",
      "Gestiona estados de carga, errores e imágenes alternativas.",
      "Adapta la navegación a teléfonos, tablets, notebooks y monitores.",
    ],
    stack: {
      Frontend: [
        "React",
        "JavaScript",
        "React Router",
        "Context API",
        "HTML5",
        "CSS3",
      ],
      Herramientas: ["Webpack", "Babel", "ESLint", "npm"],
      "Servicio externo": ["SWAPI"],
      Persistencia: ["LocalStorage"],
    },
    aporteTecnico:
      "Implementé una capa centralizada para consultar y transformar los datos de SWAPI, acompañada de componentes reutilizables para representar diferentes tipos de recursos sin duplicar lógica entre categorías. La aplicación gestiona paginación, estados de carga, errores, rutas dinámicas y favoritos persistentes. También incorpora un sistema de respaldo de imágenes que recurre a fuentes alternativas o placeholders locales cuando el recurso principal no está disponible.",
    tecnologias: ["javascript", "react"],
    secundario: true,
  },
  {
    titulo: "Short URL",
    imagen: "/URL-SHORT-portfolio.png",
    alt: "Captura del proyecto Short URL",
    resumen:
      "Acortador de enlaces full stack con redirecciones propias, persistencia y una interfaz accesible.",
    repo: "https://github.com/JorgeOteiza/Short-url",
    demo: "https://short-url-jorge.onrender.com",
    rol: "Diseño y desarrollo full stack: experiencia responsive, API REST, persistencia, seguridad básica, pruebas y despliegue con Docker.",
    enfoque:
      "Aplicación autocontenida que transforma enlaces extensos en identificadores cortos propios, conserva su destino y resuelve cada visita mediante una redirección HTTP real.",
    media: [
      {
        src: "/URL-SHORT-portfolio.png",
        alt: "Pantalla del acortador de URL",
      },
    ],
    detalles: [
      "Generación segura de identificadores cortos sin depender de servicios externos.",
      "Persistencia mediante SQLite en desarrollo y PostgreSQL en producción.",
      "Redirecciones HTTP reales y reutilización de URLs ya registradas.",
      "Validación en frontend y backend, estados accesibles y copia al portapapeles.",
      "Rate limiting configurable, health check y logs estructurados.",
      "Pruebas automatizadas y pipeline de calidad con GitHub Actions.",
      "Despliegue gratuito en Render con PostgreSQL administrado por Neon.",
    ],
    stack: {
      Frontend: ["React", "JavaScript", "Vite"],
      "Backend y datos": [
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "SQLite",
        "PostgreSQL",
      ],
      Infraestructura: ["Docker", "GitHub Actions", "Render"],
    },
    aporteTecnico:
      "Reemplacé una integración que exponía credenciales en el navegador por una arquitectura full stack propia. La API genera identificadores con aleatoriedad criptográfica, persiste los destinos y sirve la compilación de React desde el mismo contenedor.",
    tecnologias: [
      "javascript",
      "react",
      "vite",
      "python",
      "fastapi",
      "sqlite",
      "sqlalchemy",
      "postgres",
    ],
    secundario: true,
  },
];

const formatCurrentDateTime = (date) => ({
  time: new Intl.DateTimeFormat("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date),
  date: new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date),
});

const PhoneMediaCarousel = ({ proyecto, eager = false }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStart = useRef(null);
  const slides = proyecto.phoneMedia?.length
    ? proyecto.phoneMedia
    : proyecto.media?.length
      ? proyecto.media
    : [{ src: proyecto.imagen, alt: proyecto.alt }];
  const hasMultipleSlides = slides.length > 1;
  const currentSlide = slides[activeSlide];

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const handlePointerDown = (event) => {
    if (event.target.closest("button")) return;

    pointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
    };
    setIsDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (pointerStart.current?.id !== event.pointerId) return;

    const distance = event.clientX - pointerStart.current.x;
    const dragLimit = event.currentTarget.clientWidth
      ? event.currentTarget.clientWidth * 0.88
      : 280;
    setDragOffset(Math.max(-dragLimit, Math.min(dragLimit, distance)));
  };

  const finishPointerDrag = (event) => {
    if (pointerStart.current?.id !== event.pointerId) return;

    const distance = pointerStart.current.x - event.clientX;
    pointerStart.current = null;
    setDragOffset(0);
    setIsDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);

    if (Math.abs(distance) < 42) return;
    if (distance > 0) showNext();
    else showPrevious();
  };

  const cancelPointerDrag = (event) => {
    if (pointerStart.current?.id !== event.pointerId) return;
    pointerStart.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <div
      className={`phone-media ${
        currentSlide.cardFrame === "monitor" ? "phone-media-monitor" : ""
      } ${isDragging ? "is-dragging" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishPointerDrag}
      onPointerCancel={cancelPointerDrag}
      style={{ "--phone-drag-offset": `${dragOffset}px` }}
    >
      {currentSlide.cardFrame === "monitor" ? (
        <div className="phone-monitor-preview" key={currentSlide.src}>
          <img
            src={currentSlide.src}
            alt={currentSlide.alt}
            loading={eager ? "eager" : "lazy"}
            draggable="false"
          />
        </div>
      ) : (
        <img
          key={currentSlide.src}
          src={currentSlide.src}
          alt={currentSlide.alt}
          loading={eager ? "eager" : "lazy"}
          draggable="false"
        />
      )}
      {hasMultipleSlides && (
        <>
          <button
            type="button"
            className="phone-gallery-control previous"
            onClick={showPrevious}
            aria-label={`Ver imagen anterior de ${proyecto.titulo}`}
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="phone-gallery-control next"
            onClick={showNext}
            aria-label={`Ver imagen siguiente de ${proyecto.titulo}`}
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <div className="phone-gallery-dots" aria-label="Imágenes del proyecto">
            {slides.map((slide, index) => (
              <button
                type="button"
                className={index === activeSlide ? "active" : ""}
                key={slide.src}
                onClick={() => setActiveSlide(index)}
                aria-label={`Ver imagen ${index + 1} de ${proyecto.titulo}`}
                aria-current={index === activeSlide ? "true" : undefined}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Proyectos = () => {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [mediaActiva, setMediaActiva] = useState(0);
  const [modalDragOffset, setModalDragOffset] = useState(0);
  const [isModalDragging, setIsModalDragging] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(() =>
    formatCurrentDateTime(new Date()),
  );
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const modalPointerStart = useRef(null);
  const thumbnailStripRef = useRef(null);
  const thumbnailPointerStart = useRef(null);
  const thumbnailDidDrag = useRef(false);

  const abrirDetalle = (proyecto) => {
    triggerRef.current = document.activeElement;
    setProyectoActivo(proyecto);
    setMediaActiva(0);
  };

  const cerrarDetalle = () => {
    setProyectoActivo(null);
    setMediaActiva(0);
    setModalDragOffset(0);
    setIsModalDragging(false);
  };

  useEffect(() => {
    const updateCurrentDateTime = () => {
      setCurrentDateTime(formatCurrentDateTime(new Date()));
    };
    const clockInterval = window.setInterval(updateCurrentDateTime, 1000);

    return () => window.clearInterval(clockInterval);
  }, []);

  useEffect(() => {
    if (!proyectoActivo) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        cerrarDetalle();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setMediaActiva((current) => {
          const total = proyectoActivo.media?.length || 1;
          return (current + 1) % total;
        });
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setMediaActiva((current) => {
          const total = proyectoActivo.media?.length || 1;
          return (current - 1 + total) % total;
        });
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);
    dialogRef.current
      ?.querySelector(".project-modal-close")
      ?.focus();

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [proyectoActivo]);

  const mediaSeleccionada = proyectoActivo?.media?.[mediaActiva];
  const proyectosPrincipales = proyectos.filter((proyecto) => !proyecto.secundario);
  const proyectosSecundarios = proyectos.filter((proyecto) => proyecto.secundario);
  const mostrarMediaAnterior = () => {
    setMediaActiva((current) => {
      const total = proyectoActivo?.media?.length || 1;
      return (current - 1 + total) % total;
    });
  };
  const mostrarMediaSiguiente = () => {
    setMediaActiva((current) => {
      const total = proyectoActivo?.media?.length || 1;
      return (current + 1) % total;
    });
  };

  useEffect(() => {
    if (!proyectoActivo || !thumbnailStripRef.current) return;
    const activeThumbnail = thumbnailStripRef.current.querySelector(
      `button[data-media-index="${mediaActiva}"]`,
    );
    activeThumbnail?.scrollIntoView?.({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [mediaActiva, proyectoActivo]);

  const iniciarArrastreModal = (event) => {
    if (event.target.closest("button") || !proyectoActivo?.media?.length) return;
    modalPointerStart.current = { id: event.pointerId, x: event.clientX };
    setIsModalDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const moverArrastreModal = (event) => {
    if (modalPointerStart.current?.id !== event.pointerId) return;
    const distance = event.clientX - modalPointerStart.current.x;
    const limit = Math.max(120, event.currentTarget.clientWidth * 0.72);
    setModalDragOffset(Math.max(-limit, Math.min(limit, distance)));
  };

  const finalizarArrastreModal = (event) => {
    if (modalPointerStart.current?.id !== event.pointerId) return;
    const distance = modalPointerStart.current.x - event.clientX;
    modalPointerStart.current = null;
    setModalDragOffset(0);
    setIsModalDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);
    if (Math.abs(distance) < 55) return;
    if (distance > 0) mostrarMediaSiguiente();
    else mostrarMediaAnterior();
  };

  const cancelarArrastreModal = (event) => {
    if (modalPointerStart.current?.id !== event.pointerId) return;
    modalPointerStart.current = null;
    setModalDragOffset(0);
    setIsModalDragging(false);
  };

  const iniciarArrastreMiniaturas = (event) => {
    const strip = thumbnailStripRef.current;
    if (!strip || (event.button !== undefined && event.button !== 0)) return;
    const thumbnail = event.target.closest("button[data-media-index]");
    thumbnailDidDrag.current = false;
    thumbnailPointerStart.current = {
      id: event.pointerId,
      x: event.clientX,
      scrollLeft: strip.scrollLeft,
      mediaIndex: thumbnail ? Number(thumbnail.dataset.mediaIndex) : null,
    };
  };

  const moverArrastreMiniaturas = (event) => {
    const start = thumbnailPointerStart.current;
    const strip = thumbnailStripRef.current;
    if (!strip || start?.id !== event.pointerId) return;
    const distance = event.clientX - start.x;
    if (Math.abs(distance) > 7 && !thumbnailDidDrag.current) {
      thumbnailDidDrag.current = true;
      strip.setPointerCapture?.(event.pointerId);
    }
    strip.scrollLeft = start.scrollLeft - distance;
  };

  const finalizarArrastreMiniaturas = (event) => {
    if (thumbnailPointerStart.current?.id !== event.pointerId) return;
    const { mediaIndex } = thumbnailPointerStart.current;
    const huboArrastre = thumbnailDidDrag.current;
    thumbnailPointerStart.current = null;
    if (thumbnailStripRef.current?.hasPointerCapture?.(event.pointerId)) {
      thumbnailStripRef.current.releasePointerCapture(event.pointerId);
    }
    if (!huboArrastre && Number.isInteger(mediaIndex)) {
      setMediaActiva(mediaIndex);
    }
    // El clic sintético que sigue a un arrastre se ignora, pero el próximo
    // clic normal sobre cualquier miniatura vuelve a quedar disponible.
    if (huboArrastre) {
      window.setTimeout(() => {
        thumbnailDidDrag.current = false;
      }, 0);
    }
  };

  const cancelarArrastreMiniaturas = (event) => {
    if (thumbnailPointerStart.current?.id !== event.pointerId) return;
    thumbnailPointerStart.current = null;
    thumbnailDidDrag.current = false;
    if (thumbnailStripRef.current?.hasPointerCapture?.(event.pointerId)) {
      thumbnailStripRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section id="proyectos" className="proyectos">
      <div className="projects-heading">
        <div className="projects-title-row">
          <span className="section-number">01</span>
          <div>
            <span className="section-eyebrow">Trabajo seleccionado</span>
            <h2 className="title-prjct">Productos que viven más allá del código.</h2>
          </div>
        </div>
        <p className="projects-intro">
          Cada dispositivo abre una historia: el problema, las decisiones y la
          tecnología que convirtió una idea en una aplicación funcional.
        </p>
      </div>

      <div className="projects-grid">
        {proyectosPrincipales.map((proyecto, projectIndex) => (
          <article
            className={`phone-project ${proyecto.destacado ? "featured" : ""} ${
              proyecto.phoneMedia?.every((item) => item.device === "phone")
                ? "phone-project-native"
                : ""
            } ${proyecto.titulo === "El Rincón del Vino" ? "ecommerce-phone-card" : ""} ${
              proyecto.titulo === "AuthFlow" ? "authflow-phone-card" : ""
            } ${
              proyecto.cardDevice === "desktop" ? "desktop-project-card" : ""
            } ${
              proyecto.cardDevice === "tablet" ? "tablet-project-card" : ""
            }`}
            key={proyecto.titulo}
          >
            {proyecto.cardDevice === "desktop" ? (
              <div className="desktop-card-stage">
                {proyecto.destacado && (
                  <span className="featured-label">Proyecto destacado</span>
                )}
                <div className="desktop-card-monitor">
                  <div className="desktop-card-toolbar" aria-hidden="true">
                    <span className="desktop-card-controls">
                      <i></i><i></i><i></i>
                    </span>
                    <strong>{proyecto.titulo}</strong>
                    <time>{currentDateTime.time}</time>
                  </div>
                  <PhoneMediaCarousel
                    proyecto={proyecto}
                    eager={projectIndex === 0}
                  />
                </div>
                <div className="desktop-card-stand" aria-hidden="true"></div>
                <div className="desktop-card-content">
                  <div className="phone-project-number">
                    Caso {String(projectIndex + 1).padStart(2, "0")}
                  </div>
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.resumen}</p>
                  <div className="phone-tags" aria-label="Tecnologías principales">
                    {(proyecto.tecnologiasTarjeta || proyecto.tecnologias.slice(0, 3)).map((tecnologia) => (
                      <span key={tecnologia}>{iconos[tecnologia].alt}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="phone-open-project"
                    onClick={() => abrirDetalle(proyecto)}
                    aria-label={`Ver caso completo de ${proyecto.titulo}`}
                  >
                    Explorar proyecto
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ) : proyecto.cardDevice === "tablet" ? (
              <div className="tablet-card-stage">
                <div className="tablet-card-device">
                  <span className="tablet-card-camera" aria-hidden="true"></span>
                  <div className="tablet-card-screen">
                    <PhoneMediaCarousel
                      proyecto={proyecto}
                      eager={projectIndex === 0}
                    />
                  </div>
                </div>
                <div className="desktop-card-content tablet-card-content">
                  <div className="phone-project-number">
                    Caso {String(projectIndex + 1).padStart(2, "0")}
                  </div>
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.resumen}</p>
                  <div className="phone-tags" aria-label="Tecnologías principales">
                    {(proyecto.tecnologiasTarjeta || proyecto.tecnologias.slice(0, 3)).map((tecnologia) => (
                      <span key={tecnologia}>{iconos[tecnologia].alt}</span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="phone-open-project"
                    onClick={() => abrirDetalle(proyecto)}
                    aria-label={`Ver caso completo de ${proyecto.titulo}`}
                  >
                    Explorar proyecto
                    <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ) : (
            <div className="phone-stage">
              {proyecto.destacado && (
                <span className="featured-label">Proyecto destacado</span>
              )}
              <div className="phone-shadow" aria-hidden="true"></div>
              <div className="phone-device">
                <div
                  className="phone-side-button phone-volume phone-volume-up"
                  aria-hidden="true"
                ></div>
                <div
                  className="phone-side-button phone-volume phone-volume-down"
                  aria-hidden="true"
                ></div>
                <div className="phone-side-button phone-power" aria-hidden="true"></div>
                <div className="phone-screen">
                  <div className="phone-status" aria-hidden="true">
                    <time dateTime={new Date().toISOString()}>
                      {currentDateTime.time}
                    </time>
                    <div className="phone-island"></div>
                    <span className="status-icons">
                      <i className="fa-solid fa-signal"></i>
                      <i className="fa-solid fa-battery-three-quarters"></i>
                    </span>
                  </div>
                  <PhoneMediaCarousel
                    proyecto={proyecto}
                    eager={projectIndex === 0}
                  />
                  <div className="phone-content">
                    <div className="phone-project-number">
                      Caso {String(projectIndex + 1).padStart(2, "0")}
                    </div>
                    <h3>{proyecto.titulo}</h3>
                    <p>{proyecto.resumen}</p>
                    <div className="phone-tags" aria-label="Tecnologías principales">
                      {(proyecto.tecnologiasTarjeta || proyecto.tecnologias.slice(0, 3)).map((tecnologia) => (
                        <span key={tecnologia}>{iconos[tecnologia].alt}</span>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="phone-open-project"
                      onClick={() => abrirDetalle(proyecto)}
                      aria-label={`Ver caso completo de ${proyecto.titulo}`}
                    >
                      Explorar proyecto
                      <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                  <div className="phone-home-indicator" aria-hidden="true"></div>
                </div>
              </div>
            </div>
            )}
          </article>
        ))}
      </div>

      <div className="other-projects">
        <div className="other-projects-heading">
          <span className="section-eyebrow">Más exploraciones</span>
          <h3>Otros proyectos</h3>
        </div>

        <div className="other-projects-list">
          {proyectosSecundarios.map((proyecto) => (
            <button
              type="button"
              className="other-project-card"
              key={proyecto.titulo}
              onClick={() => abrirDetalle(proyecto)}
            >
              <span>{proyecto.titulo}</span>
              <small>{proyecto.resumen}</small>
            </button>
          ))}
        </div>
      </div>

      {proyectoActivo && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              cerrarDetalle();
            }
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            ref={dialogRef}
          >
            <button
              type="button"
              className="project-modal-close"
              onClick={cerrarDetalle}
              aria-label="Cerrar detalle del proyecto"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="project-modal-media">
              <div
                className={`project-modal-featured-media ${isModalDragging ? "is-dragging" : ""}`}
                onPointerDown={iniciarArrastreModal}
                onPointerMove={moverArrastreModal}
                onPointerUp={finalizarArrastreModal}
                onPointerCancel={cancelarArrastreModal}
                style={{ "--modal-drag-offset": `${modalDragOffset}px` }}
              >
                <div
                  className={`project-monitor project-preview-${mediaSeleccionada?.device || "desktop"}`}
                >
                  <div className="project-monitor-screen">
                    <div className="project-monitor-toolbar" aria-hidden="true">
                      <div className="project-monitor-window-controls">
                        <span>
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-minus"></i>
                        </span>
                        <span>
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                      <time
                        className="project-monitor-datetime"
                        dateTime={new Date().toISOString()}
                        aria-label={`${currentDateTime.time}, ${currentDateTime.date}`}
                      >
                        <strong>{currentDateTime.time}</strong>
                        <small>{currentDateTime.date}</small>
                      </time>
                    </div>
                    <div className="project-monitor-display">
                      {mediaSeleccionada?.type === "video" ? (
                        <video src={mediaSeleccionada.src} controls playsInline />
                      ) : (
                        <img
                          key={mediaSeleccionada?.src || proyectoActivo.imagen}
                          src={mediaSeleccionada?.src || proyectoActivo.imagen}
                          alt={mediaSeleccionada?.alt || proyectoActivo.alt}
                          draggable="false"
                        />
                      )}

                      {proyectoActivo.media.length > 1 && (
                        <span className="project-modal-media-count">
                          {mediaActiva + 1} / {proyectoActivo.media.length}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="project-monitor-chin" aria-hidden="true">
                    <span className="project-monitor-power"></span>
                  </div>
                </div>
                {(mediaSeleccionada?.device || "desktop") === "desktop" && (
                  <div className="project-monitor-stand" aria-hidden="true">
                    <span></span>
                  </div>
                )}
                {proyectoActivo.media.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="phone-gallery-control modal-gallery-control previous"
                      onClick={mostrarMediaAnterior}
                      aria-label={`Ver imagen anterior de ${proyectoActivo.titulo} en detalle`}
                    >
                      <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      className="phone-gallery-control modal-gallery-control next"
                      onClick={mostrarMediaSiguiente}
                      aria-label={`Ver imagen siguiente de ${proyectoActivo.titulo} en detalle`}
                    >
                      <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                  </>
                )}
              </div>

              {proyectoActivo.media.length > 1 && (
                <div
                  className="project-thumbnails"
                  ref={thumbnailStripRef}
                  onPointerDown={iniciarArrastreMiniaturas}
                  onPointerMove={moverArrastreMiniaturas}
                  onPointerUp={finalizarArrastreMiniaturas}
                  onPointerCancel={cancelarArrastreMiniaturas}
                  onDragStart={(event) => event.preventDefault()}
                >
                  {proyectoActivo.media.map((item, index) => (
                    <button
                      type="button"
                      className={index === mediaActiva ? "active" : ""}
                      key={item.src}
                      data-media-index={index}
                      onClick={() => {
                        if (thumbnailDidDrag.current) return;
                        setMediaActiva(index);
                      }}
                      aria-current={index === mediaActiva ? "true" : undefined}
                      aria-label={`Ver imagen ${index + 1} de ${proyectoActivo.titulo}`}
                    >
                      <img src={item.src} alt="" draggable="false" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="project-modal-content">
              <span className="section-kicker">Detalle del proyecto</span>
              <h2 id="project-modal-title">{proyectoActivo.titulo}</h2>
              {proyectoActivo.fraseImpacto && (
                <p className="project-impact-line">{proyectoActivo.fraseImpacto}</p>
              )}
              <p className="project-modal-summary">{proyectoActivo.enfoque}</p>

              <div className={`project-meta ${proyectoActivo.stack ? "role-only" : ""}`}>
                <div>
                  <span>Rol</span>
                  <strong>{proyectoActivo.rol}</strong>
                </div>
                {!proyectoActivo.stack && (
                  <div>
                    <span>Stack</span>
                    <strong>
                      {proyectoActivo.stackTexto ||
                        proyectoActivo.tecnologias
                          .map((tecnologia) => iconos[tecnologia].alt)
                          .join(", ")}
                    </strong>
                  </div>
                )}
              </div>

              {proyectoActivo.stack && (
                <div className="project-stack-detail">
                  {Object.entries(proyectoActivo.stack).map(([area, items]) => (
                    <div className="stack-group" key={area}>
                      <h3>{area}</h3>
                      <ul>
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <h3>Qué resuelve</h3>
              <ul className="modal-detail-list">
                {proyectoActivo.detalles.map((detalle) => (
                  <li key={detalle}>{detalle}</li>
                ))}
              </ul>

              {proyectoActivo.aporteTecnico && (
                <div className="project-technical-highlight">
                  <h3>Aporte técnico destacado</h3>
                  <p>{proyectoActivo.aporteTecnico}</p>
                </div>
              )}

              {proyectoActivo.calidadValidacion && (
                <div className="project-context-block">
                  <h3>Calidad y validación</h3>
                  <p>{proyectoActivo.calidadValidacion}</p>
                </div>
              )}

              {proyectoActivo.origenProyecto && (
                <div className="project-context-block">
                  <h3>Origen del proyecto</h3>
                  <p>{proyectoActivo.origenProyecto}</p>
                </div>
              )}

              <div className="project-modal-actions">
                <a
                  href={proyectoActivo.repo}
                  className="repositorios-target"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                  <span>Ver repositorio</span>
                </a>
                {proyectoActivo.demo && (
                  <a
                    href={proyectoActivo.demo}
                    className="repositorios-target secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-up-right-from-square"></i>
                    <span>Ver demo</span>
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default Proyectos;
