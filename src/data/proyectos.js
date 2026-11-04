// Datos de los proyectos del portafolio.
// Cada texto visible se escribe como t("español", "english"); el componente
// lo resuelve al idioma activo con `localizar` (src/i18n/LanguageContext.jsx).
// El orden del arreglo es el orden en que se muestran las tarjetas.

const t = (es, en) => ({ es, en });

// Nombres que se muestran en las etiquetas de tecnologías de cada proyecto.
export const nombresTecnologias = {
  figma: "Figma",
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  vite: "Vite",
  python: "Python",
  flask: "Flask",
  fastapi: "FastAPI",
  postgres: "PostgreSQL",
  sqlite: "SQLite",
  sqlalchemy: "SQLAlchemy",
  jwt: "JWT",
  postman: "Postman",
  pytest: "Pytest",
  redis: "Redis",
  bootstrap: "Bootstrap",
};

const minimarketMedia = [
  {
    src: "/projects/minimarket-pos/estadisticas-resumen.webp",
    alt: t(
      "Dashboard de estadísticas y resumen comercial de Minimarket Manager",
      "Minimarket Manager statistics dashboard and sales summary",
    ),
    caption: t(
      "Administración local · Resumen comercial y evolución de ventas",
      "Local admin · Sales summary and revenue trend",
    ),
  },
  {
    src: "/projects/minimarket-pos/caja-carrito.webp",
    alt: t(
      "Punto de venta de Minimarket Manager con productos en el carrito",
      "Minimarket Manager point of sale with products in the cart",
    ),
    caption: t(
      "POS local · Venta preparada en la caja con operación offline",
      "Local POS · Sale ready at the checkout, working offline",
    ),
  },
  {
    src: "/projects/minimarket-pos/lista-productos.webp",
    alt: t(
      "Listado y búsqueda de productos en Minimarket Manager",
      "Product list and search in Minimarket Manager",
    ),
    caption: t(
      "Administración local · Búsqueda, precios y estados del inventario",
      "Local admin · Search, prices and inventory status",
    ),
  },
  {
    src: "/projects/minimarket-pos/edicion-producto.webp",
    alt: t(
      "Edición de costos, precios y margen de un producto en Minimarket Manager",
      "Editing a product's cost, price and margin in Minimarket Manager",
    ),
    caption: t(
      "Administración local · Edición de costos, precios y margen",
      "Local admin · Editing cost, price and margin",
    ),
  },
  {
    src: "/projects/minimarket-pos/reposicion-sacos-paquetes.webp",
    alt: t(
      "Registro de reposición de sacos y paquetes",
      "Restocking log for bulk sacks and packages",
    ),
    caption: t(
      "Administración local · Reposición y precios de venta a granel",
      "Local admin · Restocking and bulk selling prices",
    ),
  },
  {
    src: "/projects/minimarket-pos/reportes-ventas.webp",
    alt: t(
      "Reporte de ventas por periodo de Minimarket Manager",
      "Minimarket Manager sales report by period",
    ),
    caption: t(
      "Administración local · Reportes por periodo y exportación PDF",
      "Local admin · Reports by period and PDF export",
    ),
  },
  {
    src: "/projects/minimarket-pos/estadisticas-inventario.webp",
    alt: t(
      "Productos más vendidos y alertas de inventario",
      "Best-selling products and inventory alerts",
    ),
    caption: t(
      "Administración local · Productos más vendidos y alertas de inventario",
      "Local admin · Best sellers and inventory alerts",
    ),
  },
  {
    src: "/projects/minimarket-pos/remoto-reportes-desktop.webp",
    alt: t(
      "Reportes de ventas en la administración remota de Minimarket Manager",
      "Sales reports in Minimarket Manager's remote admin",
    ),
    caption: t(
      "Administración remota · Consulta de ventas desde la web",
      "Remote admin · Checking sales from the web",
    ),
  },
  {
    src: "/projects/minimarket-pos/remoto-productos-phone.webp",
    alt: t(
      "Gestión de productos en la administración remota de Minimarket Manager desde celular",
      "Managing products in Minimarket Manager's remote admin from a phone",
    ),
    device: "phone",
    caption: t(
      "Administración remota · Gestión de productos desde celular",
      "Remote admin · Managing products from a phone",
    ),
  },
  {
    src: "/projects/minimarket-pos/remoto-sincronizacion-tablet.webp",
    alt: t(
      "Reposición de sacos y paquetes con el estado de sincronización pendiente en iPad Air",
      "Restocking sacks and packages with pending sync status on iPad Air",
    ),
    device: "tablet",
    caption: t(
      "Administración remota · Reposición y estado de sincronización en tablet",
      "Remote admin · Restocking and sync status on tablet",
    ),
  },
];

const minimarketPhoneMedia = [minimarketMedia[0], minimarketMedia[1], minimarketMedia[7]];

const ecommercePhoneMedia = [
  {
    src: "/projects/ecommerce/iphone-navigation-home.webp",
    device: "phone",
    alt: t(
      "Menú móvil y portada principal de El Rincón del Vino en iPhone 12 Pro",
      "El Rincón del Vino mobile menu and home page on iPhone 12 Pro",
    ),
  },
  {
    src: "/projects/ecommerce/iphone-cart-menu.webp",
    device: "phone",
    alt: t(
      "Carrito desplegable de El Rincón del Vino en iPhone 12 Pro",
      "El Rincón del Vino slide-out cart on iPhone 12 Pro",
    ),
  },
  {
    src: "/projects/ecommerce/iphone-order-success.webp",
    device: "phone",
    alt: t(
      "Confirmación de compra de El Rincón del Vino en iPhone 12 Pro",
      "El Rincón del Vino order confirmation on iPhone 12 Pro",
    ),
  },
];

const ecommerceMedia = [
  {
    src: "/projects/ecommerce/home.webp",
    alt: t("Página principal de El Rincón del Vino", "El Rincón del Vino home page"),
  },
  ecommercePhoneMedia[0],
  {
    src: "/projects/ecommerce/ipad-premium-selection.webp",
    device: "tablet",
    alt: t(
      "Selección Premium de El Rincón del Vino en iPad Air",
      "El Rincón del Vino premium selection on iPad Air",
    ),
  },
  {
    src: "/projects/ecommerce/favorites.webp",
    alt: t(
      "Selección de vinos favoritos de El Rincón del Vino",
      "Favorite wines in El Rincón del Vino",
    ),
  },
  {
    src: "/projects/ecommerce/product-detail.webp",
    alt: t(
      "Detalle responsive de un vino en El Rincón del Vino",
      "Responsive wine detail page in El Rincón del Vino",
    ),
  },
  {
    src: "/projects/ecommerce/tablet-cart.webp",
    device: "tablet",
    alt: t(
      "Carrito y resumen de compra de El Rincón del Vino",
      "El Rincón del Vino cart and order summary",
    ),
  },
  ecommercePhoneMedia[1],
  {
    src: "/projects/ecommerce/payment.webp",
    alt: t(
      "Selección de método de pago de El Rincón del Vino",
      "Payment method selection in El Rincón del Vino",
    ),
  },
  ecommercePhoneMedia[2],
  {
    src: "/projects/ecommerce/purchase-history.webp",
    alt: t(
      "Historial de compras de El Rincón del Vino",
      "El Rincón del Vino purchase history",
    ),
  },
  {
    src: "/projects/ecommerce/ipad-responsible-consumption.webp",
    device: "tablet",
    alt: t(
      "Control de consumo responsable de El Rincón del Vino en iPad Air",
      "El Rincón del Vino responsible drinking check on iPad Air",
    ),
  },
  {
    src: "/projects/ecommerce/responsive-catalog-filters.webp",
    device: "tablet",
    alt: t(
      "Catálogo responsive con filtros aplicados en El Rincón del Vino",
      "Responsive catalog with filters applied in El Rincón del Vino",
    ),
  },
];

const travelCalculatorTabletMedia = [
  {
    src: "/projects/travel-calculator/ipad-hero.webp",
    device: "tablet",
    alt: t(
      "Portada responsive de Travel Calculator en iPad",
      "Travel Calculator responsive landing page on iPad",
    ),
  },
  {
    src: "/projects/travel-calculator/ipad-calculator.webp",
    device: "tablet",
    alt: t(
      "Calculadora de ruta con formulario y mapa en iPad",
      "Route calculator with form and map on iPad",
    ),
  },
  {
    src: "/projects/travel-calculator/ipad-result.webp",
    device: "tablet",
    alt: t(
      "Resultado de costo y consumo de Travel Calculator en iPad",
      "Travel Calculator cost and fuel result on iPad",
    ),
  },
];

const travelCalculatorMedia = [
  ...travelCalculatorTabletMedia,
  {
    src: "/projects/travel-calculator/desktop-calculator-route.webp",
    alt: t(
      "Calculadora con ruta activa en la vista de escritorio",
      "Calculator with an active route on desktop",
    ),
  },
  {
    src: "/projects/travel-calculator/desktop-result.webp",
    alt: t(
      "Resumen del cálculo de viaje en la vista de escritorio",
      "Trip estimate summary on desktop",
    ),
  },
  {
    src: "/projects/travel-calculator/desktop-analysis.webp",
    alt: t(
      "Análisis detallado con elevación y consumo por segmento",
      "Detailed analysis with elevation and fuel use per segment",
    ),
  },
  {
    src: "/projects/travel-calculator/desktop-profile.webp",
    alt: t(
      "Historial de viajes guardados en la vista de escritorio",
      "Saved trip history on desktop",
    ),
  },
  {
    src: "/projects/travel-calculator/ipad-analysis.webp",
    device: "tablet",
    alt: t("Análisis detallado de un viaje en iPad", "Detailed trip analysis on iPad"),
  },
  {
    src: "/projects/travel-calculator/ipad-share.webp",
    device: "tablet",
    alt: t(
      "Opciones para compartir una estimación en iPad",
      "Options to share an estimate on iPad",
    ),
  },
  {
    src: "/projects/travel-calculator/ipad-profile.webp",
    device: "tablet",
    alt: t(
      "Perfil e historial de estimaciones en iPad",
      "Profile and estimate history on iPad",
    ),
  },
  {
    src: "/projects/travel-calculator/ipad-about.webp",
    device: "tablet",
    alt: t(
      "Metodología y arquitectura de Travel Calculator en iPad",
      "Travel Calculator methodology and architecture on iPad",
    ),
  },
  {
    src: "/projects/travel-calculator/iphone-calculator.webp",
    device: "phone",
    alt: t("Formulario de Travel Calculator en iPhone", "Travel Calculator form on iPhone"),
  },
  {
    src: "/projects/travel-calculator/iphone-profile.webp",
    device: "phone",
    alt: t("Historial de Travel Calculator en iPhone", "Travel Calculator history on iPhone"),
  },
];

const authflowPhoneMedia = [
  {
    src: "/projects/authflow/iphone-hero.webp",
    device: "phone",
    alt: t("Portada de AuthFlow en iPhone 12 Pro", "AuthFlow landing page on iPhone 12 Pro"),
  },
  {
    src: "/projects/authflow/iphone-signup.webp",
    device: "phone",
    alt: t(
      "Creación de cuenta de AuthFlow en iPhone 12 Pro",
      "AuthFlow sign-up on iPhone 12 Pro",
    ),
  },
  {
    src: "/projects/authflow/iphone-profile.webp",
    device: "phone",
    alt: t(
      "Perfil protegido de AuthFlow en iPhone 12 Pro",
      "AuthFlow protected profile on iPhone 12 Pro",
    ),
  },
];

const authflowMedia = [
  {
    src: "/projects/authflow/desktop-hero.webp",
    alt: t("Portada de AuthFlow en escritorio", "AuthFlow landing page on desktop"),
  },
  {
    src: "/projects/authflow/desktop-signup.webp",
    alt: t("Creación de cuenta de AuthFlow en escritorio", "AuthFlow sign-up on desktop"),
  },
  {
    src: "/projects/authflow/ipad-hero.webp",
    device: "tablet",
    alt: t(
      "Portada responsive de AuthFlow en iPad Air",
      "AuthFlow responsive landing page on iPad Air",
    ),
  },
  {
    src: "/projects/authflow/ipad-profile.webp",
    device: "tablet",
    alt: t(
      "Perfil y seguridad de cuenta de AuthFlow en iPad Air",
      "AuthFlow profile and account security on iPad Air",
    ),
  },
  ...authflowPhoneMedia,
  {
    src: "/projects/authflow/iphone-email-verified.webp",
    device: "phone",
    alt: t(
      "Confirmación de correo verificado en AuthFlow",
      "Email verified confirmation in AuthFlow",
    ),
  },
  {
    src: "/projects/authflow/iphone-delete-confirmation.webp",
    device: "phone",
    alt: t(
      "Confirmación segura para eliminar una cuenta en AuthFlow",
      "Secure account deletion confirmation in AuthFlow",
    ),
  },
  {
    src: "/projects/authflow/iphone-account-deleted.webp",
    device: "phone",
    alt: t("Cuenta eliminada correctamente en AuthFlow", "Account successfully deleted in AuthFlow"),
  },
];

const starWarsMedia = [
  {
    src: "/projects/star-wars-blog/desktop-home.webp",
    alt: t(
      "Portada del archivo galáctico de Star Wars en escritorio",
      "Star Wars Galactic Archive landing page on desktop",
    ),
  },
  {
    src: "/projects/star-wars-blog/desktop-collections.webp",
    alt: t(
      "Colecciones de personajes, vehículos y planetas en escritorio",
      "Character, vehicle and planet collections on desktop",
    ),
  },
  {
    src: "/projects/star-wars-blog/desktop-characters.webp",
    alt: t(
      "Catálogo de personajes de Star Wars en escritorio",
      "Star Wars character catalog on desktop",
    ),
  },
  {
    src: "/projects/star-wars-blog/desktop-character-detail.webp",
    alt: t(
      "Ficha detallada de Yoda en el archivo galáctico",
      "Yoda's detail page in the Galactic Archive",
    ),
  },
  {
    src: "/projects/star-wars-blog/desktop-favorites.webp",
    alt: t(
      "Colección de favoritos abierta sobre el catálogo de planetas",
      "Favorites collection open over the planet catalog",
    ),
  },
  {
    src: "/projects/star-wars-blog/tablet-collections.webp",
    device: "tablet",
    alt: t(
      "Colecciones del archivo galáctico en vista tablet",
      "Galactic Archive collections on tablet",
    ),
  },
  {
    src: "/projects/star-wars-blog/iphone-home.webp",
    device: "phone",
    alt: t(
      "Portada responsive del blog de Star Wars en iPhone 12 Pro",
      "Star Wars blog responsive landing page on iPhone 12 Pro",
    ),
  },
  {
    src: "/projects/star-wars-blog/iphone-menu.webp",
    device: "phone",
    alt: t(
      "Menú móvil y colecciones del blog de Star Wars en iPhone 12 Pro",
      "Star Wars blog mobile menu and collections on iPhone 12 Pro",
    ),
  },
];

const shortUrlMedia = [
  {
    src: "/projects/short-url/desktop-home.webp",
    alt: t(
      "Portada de Short URL con el formulario para acortar enlaces",
      "Short URL landing page with the link shortening form",
    ),
  },
  {
    src: "/projects/short-url/desktop-shortened-link.webp",
    alt: t(
      "Enlace acortado con contador de visitas en Short URL",
      "Shortened link with visit counter in Short URL",
    ),
  },
  {
    src: "/projects/short-url/desktop-qr.webp",
    alt: t(
      "Generador de códigos QR de Short URL en escritorio",
      "Short URL QR code generator on desktop",
    ),
  },
  {
    src: "/projects/short-url/ipad-qr-form.webp",
    device: "tablet",
    alt: t(
      "Generador de códigos QR de Short URL en iPad Air",
      "Short URL QR code generator on iPad Air",
    ),
  },
  {
    src: "/projects/short-url/ipad-qr-result.webp",
    device: "tablet",
    alt: t(
      "Código QR generado y enlaces recientes en iPad Air",
      "Generated QR code and recent links on iPad Air",
    ),
  },
  {
    src: "/projects/short-url/iphone-home.webp",
    device: "phone",
    alt: t(
      "Vista inicial responsive de Short URL en iPhone 12 Pro",
      "Short URL responsive home view on iPhone 12 Pro",
    ),
  },
  {
    src: "/projects/short-url/iphone-qr-result.webp",
    device: "phone",
    alt: t(
      "Código QR generado por Short URL en iPhone 12 Pro",
      "QR code generated by Short URL on iPhone 12 Pro",
    ),
  },
];

const REPO_PRIVADO_PRODUCCION = t(
  "El código no es público porque el sistema está en producción.",
  "The source code is private because the system is running in production.",
);

const proyectos = [
  {
    id: "minimarket",
    titulo: "Minimarket Manager",
    categoria: t("Comercio · Full stack", "Retail · Full stack"),
    imagen: minimarketMedia[0].src,
    alt: minimarketMedia[0].alt,
    resumen: t(
      "Solución para un minimarket familiar con POS offline, sincronización y administración web remota.",
      "A system for a family-run minimarket with an offline POS, data sync and remote web administration.",
    ),
    fraseImpacto: t(
      "La operación sigue en el local; la administración también puede hacerse a distancia.",
      "Sales keep running in the store; management can also be done remotely.",
    ),
    repoPrivado: REPO_PRIVADO_PRODUCCION,
    rol: t(
      "Desarrollo full stack independiente para un minimarket familiar: POS local, interfaz, API REST, modelado de datos, respaldos y empaquetado para Windows. Evolución del sistema con sincronización, autenticación de administradoras y despliegue de la administración web remota.",
      "Independent full stack development for a family-run minimarket: local POS, interface, REST API, data modeling, backups and Windows packaging. Later evolved the system with data sync, authentication for the store's administrators and deployment of the remote web admin.",
    ),
    enfoque: t(
      "Aplicación para un minimarket real que comenzó como un POS local y evolucionó para permitir la administración a distancia. El PC principal conserva el punto de venta y la administración, con Flask y SQLite para funcionar sin internet. Cuando hay conexión, sincroniza información con Supabase, que aporta almacenamiento remoto y autenticación para cuentas autorizadas. La vista web desplegada en Render ofrece solo administración y se adapta a celulares y tablets.",
      "An application for a real minimarket that started as a local POS and evolved to support remote management. The main PC keeps the point of sale and administration, using Flask and SQLite to work without internet. When a connection is available, it syncs data with Supabase, which provides remote storage and authentication for authorized accounts. The web view deployed on Render is admin-only and adapts to phones and tablets.",
    ),
    phoneMedia: minimarketPhoneMedia,
    media: minimarketMedia,
    detalles: [
      t(
        "Registra ventas y descuenta stock en el PC principal, incluso sin conexión a internet.",
        "Records sales and updates stock on the main PC, even without an internet connection.",
      ),
      t(
        "Administra productos, precios, stock base, inventario, sacos, paquetes y ajustes del negocio.",
        "Manages products, prices, base stock, inventory, bulk sacks, packages and store settings.",
      ),
      t(
        "Reúne reportes, estadísticas e historial de movimientos para revisar la operación.",
        "Brings together reports, statistics and movement history to review operations.",
      ),
      t(
        "Mantiene respaldos locales y agrega almacenamiento y sincronización remotos cuando hay conexión.",
        "Keeps local backups and adds remote storage and sync when a connection is available.",
      ),
      t(
        "Permite a administradoras con cuentas autorizadas acceder a una vista web solo de administración.",
        "Lets administrators with authorized accounts access an admin-only web view.",
      ),
      t(
        "Adapta la administración remota a celulares y tablets para usuarias no técnicas.",
        "Adapts the remote admin to phones and tablets for non-technical users.",
      ),
      t(
        "Incorpora estados de carga, opción para ver la contraseña y mensajes claros de sincronización.",
        "Includes loading states, a show-password option and clear sync messages.",
      ),
      t(
        "Conserva la información visible ante recargas y comunica el progreso de carga.",
        "Keeps on-screen data across reloads and communicates loading progress.",
      ),
    ],
    stack: [
      {
        area: t("Backend y datos", "Backend & data"),
        items: [
          "Python 3.12",
          "Flask",
          "SQLAlchemy",
          "Flask-Migrate / Alembic",
          t("SQLite local", "Local SQLite"),
          "Marshmallow",
          "pytest",
        ],
      },
      {
        area: "Frontend",
        items: ["React", "TypeScript", "Vite", "React Router", "Recharts"],
      },
      {
        area: t("Servicios remotos", "Remote services"),
        items: [
          t("Supabase · base de datos y autenticación", "Supabase · database and authentication"),
          t("Render · administración web", "Render · web admin"),
        ],
      },
    ],
    aporteTecnico: t(
      "Conecté la persistencia local en SQLite con los servicios remotos de Supabase, manteniendo el POS operativo sin internet y separando la administración web del punto de venta. También ajusté la continuidad de la interfaz ante recargas, los mensajes de sincronización y la experiencia de carga inicial en el plan gratuito de Render.",
      "I connected local SQLite persistence with Supabase's remote services, keeping the POS operational without internet and separating the web admin from the point of sale. I also refined how the interface survives reloads, the sync messages and the initial loading experience on Render's free tier.",
    ),
    origenProyecto: t(
      "Nació para cubrir la operación diaria de un minimarket real desde un PC. La necesidad de administrar el negocio a distancia impulsó su evolución hacia una solución local con servicios remotos, cuidando que la interfaz siguiera siendo clara para personas no técnicas.",
      "It was born to support the daily operation of a real minimarket from a single PC. The need to manage the business remotely drove its evolution into a local-first solution with remote services, while keeping the interface clear for non-technical people.",
    ),
    tecnologias: ["typescript", "react", "vite", "python", "flask", "sqlite", "sqlalchemy", "pytest"],
    tecnologiasTarjeta: ["react", "flask", "sqlite"],
    cardDevice: "desktop",
    destacado: true,
  },
  {
    id: "travel-calculator",
    titulo: "Travel Calculator",
    categoria: t("Datos y rutas · Full stack", "Data & routing · Full stack"),
    imagen: travelCalculatorTabletMedia[0].src,
    alt: travelCalculatorTabletMedia[0].alt,
    resumen: t(
      "Aplicación personal Full Stack con una versión publicada para estimar el consumo y costo de una ruta según el vehículo y sus condiciones.",
      "A personal full stack application, with a live version, that estimates the fuel use and cost of a route based on the vehicle and trip conditions.",
    ),
    fraseImpacto: t(
      "Una estimación de combustible que considera el vehículo y las condiciones de la ruta.",
      "A fuel estimate that accounts for the vehicle and the route's conditions.",
    ),
    demo: "https://travel-calculator-44v.pages.dev/",
    repoPrivado: REPO_PRIVADO_PRODUCCION,
    estadoPublicacion: t(
      "La demo está publicada en Cloudflare Pages; no todas las mejoras locales descritas están integradas en esa versión.",
      "The demo is published on Cloudflare Pages; not every local improvement described here is included in that version yet.",
    ),
    rol: t(
      "Desarrollo personal full stack: diseño de interfaz responsive, arquitectura frontend, API REST, modelo de cálculo, integración de servicios externos, persistencia, gestión de sesión y pruebas automatizadas.",
      "Personal full stack project: responsive interface design, frontend architecture, REST API, estimation model, external service integration, persistence, session management and automated testing.",
    ),
    enfoque: t(
      "Travel Calculator transforma los datos del vehículo y las condiciones del recorrido en una estimación contextual y explicable, incluso cuando el vehículo no está en el catálogo y se declara manualmente. Permite calcular un viaje como invitado o iniciar sesión para guardarlo en el historial, y además del resultado rápido, permite revisar el consumo por segmento, el perfil de elevación y los factores que modificaron el cálculo.",
      "Travel Calculator turns vehicle data and route conditions into a contextual, explainable estimate, even when the vehicle isn't in the catalog and is entered manually. Users can calculate a trip as a guest or sign in to save it to their history, and beyond the quick result they can review fuel use per segment, the elevation profile and the factors that changed the estimate.",
    ),
    phoneMedia: travelCalculatorTabletMedia,
    media: travelCalculatorMedia,
    detalles: [
      t(
        "Incorpora factores adicionales a la distancia y al consumo promedio para estimar combustible.",
        "Adds factors beyond distance and average consumption to estimate fuel.",
      ),
      t(
        "Adapta el rendimiento estándar o informado por el usuario al contexto de la ruta.",
        "Adjusts the standard or user-reported fuel efficiency to the route's context.",
      ),
      t(
        "Considera pendientes, elevación, clima, tipo de vía, congestión estimada según el horario, pasajeros, carga y estilo de conducción. No utiliza datos de tráfico en tiempo real.",
        "Considers slopes, elevation, weather, road type, estimated congestion by time of day, passengers, load and driving style. It does not use real-time traffic data.",
      ),
      t(
        "Permite declarar un vehículo personalizado con marca, modelo, año, combustible y rendimiento cuando no aparece en el catálogo.",
        "Lets users enter a custom vehicle (make, model, year, fuel and efficiency) when it isn't in the catalog.",
      ),
      t(
        "Presenta un resumen inmediato y un análisis detallado con gráficos por segmento.",
        "Shows an instant summary and a detailed analysis with per-segment charts.",
      ),
      t(
        "Permite calcular un viaje como invitado, sin crear una cuenta, o iniciar sesión para guardarlo en el historial.",
        "Lets users calculate a trip as a guest, without an account, or sign in to save it to their history.",
      ),
      t(
        "Si la sesión expira durante un cálculo autenticado, cierra sesión de forma segura y reintenta automáticamente como invitado.",
        "If the session expires during an authenticated calculation, it signs out safely and automatically retries as a guest.",
      ),
      t(
        "Permite iniciar sesión con Google y guardar los viajes en el historial.",
        "Supports Google sign-in and saving trips to the history.",
      ),
      t(
        "Permite buscar rutas, utilizar la ubicación actual y consultar viajes guardados.",
        "Lets users search routes, use their current location and browse saved trips.",
      ),
      t(
        "Mantiene un historial autenticado con vistas de cuadrícula y lista.",
        "Keeps an authenticated history with grid and list views.",
      ),
      t(
        "Persistencia de usuarios e historial de viajes en PostgreSQL mediante SQLAlchemy.",
        "Users and trip history persisted in PostgreSQL through SQLAlchemy.",
      ),
    ],
    stack: [
      { area: "Frontend", items: ["React", "TypeScript", "JavaScript", "Vite"] },
      {
        area: t("Backend y datos", "Backend & data"),
        items: ["Python", "Flask", "Flask-Limiter", "SQLAlchemy", "PostgreSQL", "SQLite", "JWT"],
      },
      { area: t("Autenticación", "Authentication"), items: ["JWT", "Google"] },
      {
        area: t("Mapas y servicios externos", "Maps & external services"),
        items: ["MapLibre", "LocationIQ", "Open-Meteo"],
      },
      {
        area: t("Pruebas", "Testing"),
        items: [
          "unittest · backend",
          t("Playwright · validaciones funcionales", "Playwright · functional checks"),
        ],
      },
      {
        area: t("Infraestructura", "Infrastructure"),
        items: ["Cloudflare Pages · frontend", "Render · backend", "Neon · PostgreSQL"],
      },
    ],
    aporteTecnico: t(
      "El modelo de consumo es modular y calcula la ruta por segmentos, adaptando el rendimiento del vehículo —del catálogo o declarado a mano— al contexto de cada tramo. Diseñé el cálculo como invitado y el de vehículo personalizado sobre esa misma lógica de estimación, con una recuperación automática a modo invitado si el token expira a mitad de un cálculo autenticado. También invalido sesiones activas al cerrar sesión mediante una lista de revocación y una versión de sesión por usuario, y resolví en producción un incidente real de conexiones PostgreSQL muertas habilitando pool_pre_ping en SQLAlchemy.",
      "The fuel model is modular and evaluates the route segment by segment, adapting the vehicle's efficiency (from the catalog or entered manually) to each stretch. I built guest calculations and custom vehicles on top of that same estimation logic, with automatic fallback to guest mode if the token expires mid-calculation. I also invalidate active sessions on sign-out using a revocation list and a per-user session version, and I fixed a real production incident of dead PostgreSQL connections by enabling pool_pre_ping in SQLAlchemy.",
    ),
    calidadValidacion: t(
      "El backend incluye pruebas con unittest para cálculo, autenticación, vehículos personalizados y viajes como invitado. El frontend cuenta con una prueba E2E manual con Playwright para el flujo de invitado y la invalidación de sesión.",
      "The backend includes unittest tests for calculations, authentication, custom vehicles and guest trips. The frontend has a manually run Playwright E2E test for the guest flow and session invalidation.",
    ),
    tecnologias: ["javascript", "react", "vite", "python", "flask", "postgres", "sqlalchemy", "jwt"],
    tecnologiasTarjeta: ["react", "flask", "postgres"],
    cardDevice: "tablet",
  },
  {
    id: "rincon-del-vino",
    titulo: "El Rincón del Vino",
    categoria: t("E-commerce · Full stack", "E-commerce · Full stack"),
    imagen: ecommerceMedia[0].src,
    alt: ecommerceMedia[0].alt,
    resumen: t(
      "E-commerce full stack de vinos con catálogo, favoritos y compra responsive.",
      "A full stack wine e-commerce site with a catalog, favorites and a responsive checkout.",
    ),
    repo: "https://github.com/JorgeOteiza/Sitio.Web_E-Comerce-wine",
    rol: t(
      "Proyecto colaborativo desarrollado junto a un equipo de cuatro personas durante la formación en 4Geeks Academy.",
      "Collaborative project built with a team of four during the 4Geeks Academy bootcamp.",
    ),
    enfoque: t(
      "E-commerce colaborativo realizado durante la formación en 4Geeks Academy para descubrir vinos, filtrar el catálogo, guardar favoritos y completar un flujo de compra desde distintos dispositivos.",
      "A collaborative e-commerce site built during the 4Geeks Academy bootcamp to discover wines, filter the catalog, save favorites and complete a purchase flow from any device.",
    ),
    stack: [
      { area: "Frontend", items: ["React", "JavaScript"] },
      {
        area: t("Backend y datos", "Backend & data"),
        items: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
      },
      { area: t("Diseño y colaboración", "Design & collaboration"), items: ["Figma", "Kanban"] },
    ],
    phoneMedia: ecommercePhoneMedia,
    media: ecommerceMedia,
    detalles: [
      t(
        "Autenticación y protección de rutas mediante JWT.",
        "Authentication and route protection with JWT.",
      ),
      t(
        "API REST para usuarios, productos, favoritos y compras.",
        "REST API for users, products, favorites and purchases.",
      ),
      t(
        "Catálogo con búsqueda, filtros, stock y precios promocionales.",
        "Catalog with search, filters, stock and promotional prices.",
      ),
      t(
        "Carrito y flujo de compra responsive de principio a fin.",
        "Responsive cart and end-to-end purchase flow.",
      ),
      t(
        "Gestión de estado y consumo de datos desde React.",
        "State management and data fetching in React.",
      ),
      t(
        "Desarrollo colaborativo con metodología Kanban.",
        "Collaborative development using Kanban.",
      ),
    ],
    aporteTecnico: t(
      "Flujo de compra responsive conectado a una API REST, con autenticación JWT y persistencia en PostgreSQL para usuarios, productos, favoritos y compras.",
      "A responsive purchase flow connected to a REST API, with JWT authentication and PostgreSQL persistence for users, products, favorites and purchases.",
    ),
    tecnologias: ["figma", "javascript", "react", "python", "flask", "postgres", "sqlalchemy", "jwt"],
    tecnologiasTarjeta: ["react", "flask", "postgres"],
  },
  {
    id: "authflow",
    titulo: "AuthFlow",
    categoria: t(
      "Proyecto de práctica · Seguridad · Full stack",
      "Practice project · Security · Full stack",
    ),
    imagen: authflowPhoneMedia[0].src,
    alt: authflowPhoneMedia[0].alt,
    resumen: t(
      "Proyecto de práctica full stack de autenticación con sesiones JWT en cookies HttpOnly, verificación de correo y gestión de cuentas.",
      "A full stack authentication practice project with JWT sessions in HttpOnly cookies, email verification and account management.",
    ),
    fraseImpacto: t(
      "Gestión de cuentas y sesiones, desde el registro hasta la recuperación de acceso.",
      "Account and session management, from sign-up to access recovery.",
    ),
    repo: "https://github.com/JorgeOteiza/authflow-react-flask",
    rol: t(
      "Diseño y desarrollo full stack. Implementé la interfaz responsive, la API REST, el modelo de datos, la gestión de sesiones, los controles de seguridad, las migraciones y la estrategia de pruebas automatizadas.",
      "Full stack design and development. I built the responsive interface, the REST API, the data model, session management, security controls, migrations and the automated testing strategy.",
    ),
    enfoque: t(
      "Sistema full stack de autenticación diseñado para gestionar el ciclo completo de una cuenta: registro, verificación de correo, inicio y renovación de sesión, recuperación de contraseña, edición del perfil y eliminación segura.",
      "A full stack authentication system designed to handle the full account lifecycle: sign-up, email verification, sign-in and session renewal, password recovery, profile editing and secure deletion.",
    ),
    phoneMedia: authflowPhoneMedia,
    media: authflowMedia,
    detalles: [
      t(
        "Registro con normalización de correo y política de contraseñas.",
        "Sign-up with email normalization and a password policy.",
      ),
      t(
        "Verificación de correo mediante tokens de un solo uso y duración limitada.",
        "Email verification with single-use, time-limited tokens.",
      ),
      t(
        "Inicio de sesión con protección frente a intentos de fuerza bruta.",
        "Sign-in protected against brute-force attempts.",
      ),
      t(
        "Sesiones mediante access tokens de 15 minutos y refresh tokens de 7 días.",
        "Sessions using 15-minute access tokens and 7-day refresh tokens.",
      ),
      t(
        "Rotación del refresh token e invalidación del token anterior.",
        "Refresh token rotation that invalidates the previous token.",
      ),
      t(
        "Revocación efectiva de sesiones al cerrar sesión o eliminar la cuenta.",
        "Effective session revocation on sign-out or account deletion.",
      ),
      t(
        "Recuperación segura de contraseña mediante enlaces temporales.",
        "Secure password recovery through temporary links.",
      ),
      t(
        "Perfil privado que obtiene la identidad directamente desde el JWT.",
        "Private profile that reads the user's identity directly from the JWT.",
      ),
      t(
        "Actualización y eliminación de la propia cuenta verificando la contraseña actual.",
        "Updating and deleting your own account after confirming the current password.",
      ),
      t(
        "Límites de solicitudes compartidos mediante Redis.",
        "Shared rate limits backed by Redis.",
      ),
      t(
        "Persistencia en PostgreSQL y migraciones administradas con Alembic.",
        "PostgreSQL persistence with migrations managed by Alembic.",
      ),
      t(
        "Interfaz responsive validada en escritorio, iPad, iPhone 12 Pro y Galaxy.",
        "Responsive interface tested on desktop, iPad, iPhone 12 Pro and Galaxy.",
      ),
    ],
    stack: [
      {
        area: "Frontend",
        items: ["React 19", "JavaScript", "React Router", "Context API", "Webpack"],
      },
      {
        area: t("Backend y datos", "Backend & data"),
        items: ["Python", "Flask", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis"],
      },
      {
        area: t("Seguridad", "Security"),
        items: [
          t("JWT en cookies HttpOnly", "JWT in HttpOnly cookies"),
          t("Protección CSRF", "CSRF protection"),
          t("Access y refresh tokens", "Access and refresh tokens"),
          t("Rotación y revocación de tokens", "Token rotation and revocation"),
          t("Verificación de correo", "Email verification"),
          t("Recuperación de contraseña", "Password recovery"),
          t("Hash seguro de contraseñas", "Secure password hashing"),
          "Rate limiting",
          t("Registro de eventos de seguridad", "Security event logging"),
        ],
      },
      {
        area: t("Pruebas e infraestructura", "Testing & infrastructure"),
        items: ["Pytest", "Vitest", "Playwright", "Docker Compose", "GitHub Actions", "Render"],
      },
    ],
    aporteTecnico: t(
      "Diseñé un flujo de autenticación de extremo a extremo donde los JWT no se almacenan en localStorage ni sessionStorage, sino en cookies HttpOnly. La aplicación combina protección CSRF, access tokens breves, rotación de refresh tokens, revocación persistente y control de versión de sesión para invalidar credenciales comprometidas. También implementé verificación de correo, recuperación de contraseña con tokens de un solo uso, comprobación opcional de contraseñas comprometidas mediante k-anonymity y auditoría interna de eventos de seguridad.",
      "I designed an end-to-end authentication flow where JWTs are stored in HttpOnly cookies rather than localStorage or sessionStorage. The app combines CSRF protection, short-lived access tokens, refresh token rotation, persistent revocation and session versioning to invalidate compromised credentials. I also implemented email verification, password recovery with single-use tokens, an optional breached-password check using k-anonymity and internal auditing of security events.",
    ),
    calidadValidacion: t(
      "La API cuenta con pruebas de autenticación, permisos, CSRF, revocación, rotación, rate limiting y preflights CORS. El frontend utiliza pruebas con Vitest y el recorrido completo se verifica con Playwright en escritorio y dispositivos móviles, utilizando un entorno E2E aislado con SQLite en memoria.",
      "The API has tests for authentication, permissions, CSRF, revocation, rotation, rate limiting and CORS preflights. The frontend is tested with Vitest, and the full journey is verified with Playwright on desktop and mobile devices, using an isolated E2E environment with in-memory SQLite.",
    ),
    origenProyecto: t(
      "AuthFlow comenzó como un ejercicio de autenticación durante un bootcamp full stack. Posteriormente fue reconstruido, ampliado y mantenido de forma independiente, incorporando una arquitectura propia, controles de seguridad modernos, PostgreSQL, Redis, pruebas automatizadas y una nueva interfaz responsive.",
      "AuthFlow started as an authentication exercise during a full stack bootcamp. I later rebuilt, extended and maintained it on my own, adding my own architecture, modern security controls, PostgreSQL, Redis, automated testing and a new responsive interface.",
    ),
    tecnologias: ["javascript", "react", "python", "flask", "postgres", "sqlalchemy", "jwt", "pytest", "redis"],
    tecnologiasTarjeta: ["react", "flask", "postgres", "redis"],
  },
  {
    id: "star-wars",
    titulo: t("Archivo Galáctico de Star Wars", "Star Wars Galactic Archive"),
    categoria: t("Exploración · Frontend", "Exploration · Frontend"),
    imagen: starWarsMedia[0].src,
    alt: starWarsMedia[0].alt,
    resumen: t(
      "Aplicación React para explorar personajes, vehículos y planetas mediante SWAPI, con catálogos paginados, fichas detalladas y favoritos persistentes.",
      "A React app to explore characters, vehicles and planets through SWAPI, with paginated catalogs, detail pages and persistent favorites.",
    ),
    fraseImpacto: t(
      "Una experiencia de exploración galáctica construida a partir de datos públicos.",
      "A galactic exploration experience built on public data.",
    ),
    repo: "https://github.com/JorgeOteiza/project_Blog_de_StarWars",
    rol: t(
      "Desarrollo frontend integral: arquitectura de componentes en React, integración y normalización de SWAPI, estado global, persistencia local, interfaz responsive y gestión de estados de carga, errores e imágenes alternativas.",
      "End-to-end frontend development: React component architecture, SWAPI integration and normalization, global state, local persistence, responsive interface and handling of loading, error and fallback image states.",
    ),
    enfoque: t(
      "Aplicación web interactiva que transforma los datos de SWAPI en un archivo galáctico visual y responsive, con navegación por categorías, catálogos paginados, fichas detalladas y una colección de favoritos persistente.",
      "An interactive web app that turns SWAPI data into a visual, responsive galactic archive, with category navigation, paginated catalogs, detail pages and a persistent favorites collection.",
    ),
    media: starWarsMedia,
    detalles: [
      t(
        "Explora personajes, vehículos y planetas de Star Wars.",
        "Explore Star Wars characters, vehicles and planets.",
      ),
      t(
        "Presenta catálogos paginados y fichas individuales con información detallada.",
        "Shows paginated catalogs and individual pages with detailed information.",
      ),
      t(
        "Carga progresivamente nuevos registros desde SWAPI.",
        "Progressively loads new records from SWAPI.",
      ),
      t(
        "Permite añadir y eliminar elementos de una colección de favoritos.",
        "Lets users add and remove items from a favorites collection.",
      ),
      t(
        "Conserva los favoritos entre sesiones mediante LocalStorage.",
        "Keeps favorites across sessions with LocalStorage.",
      ),
      t(
        "Gestiona estados de carga, errores e imágenes alternativas.",
        "Handles loading states, errors and fallback images.",
      ),
      t(
        "Adapta la navegación a teléfonos, tablets, notebooks y monitores.",
        "Adapts navigation to phones, tablets, laptops and monitors.",
      ),
    ],
    stack: [
      {
        area: "Frontend",
        items: ["React", "JavaScript", "React Router", "Context API", "HTML5", "CSS3"],
      },
      { area: t("Herramientas", "Tooling"), items: ["Webpack", "Babel", "ESLint", "npm"] },
      { area: t("Servicio externo", "External service"), items: ["SWAPI"] },
      { area: t("Persistencia", "Persistence"), items: ["LocalStorage"] },
    ],
    aporteTecnico: t(
      "Implementé una capa centralizada para consultar y transformar los datos de SWAPI, acompañada de componentes reutilizables para representar diferentes tipos de recursos sin duplicar lógica entre categorías. La aplicación gestiona paginación, estados de carga, errores, rutas dinámicas y favoritos persistentes. También incorpora un sistema de respaldo de imágenes que recurre a fuentes alternativas o placeholders locales cuando el recurso principal no está disponible.",
      "I built a centralized layer to fetch and transform SWAPI data, along with reusable components that render different resource types without duplicating logic across categories. The app handles pagination, loading states, errors, dynamic routes and persistent favorites. It also includes an image fallback system that switches to alternative sources or local placeholders when the main resource is unavailable.",
    ),
    tecnologias: ["javascript", "react"],
    secundario: true,
  },
  {
    id: "short-url",
    titulo: "Short URL",
    categoria: t("Productividad · Full stack", "Productivity · Full stack"),
    imagen: shortUrlMedia[0].src,
    alt: shortUrlMedia[0].alt,
    resumen: t(
      "Aplicación web para acortar enlaces, generar códigos QR y consultar estadísticas de uso.",
      "A web app to shorten links, generate QR codes and check usage statistics.",
    ),
    repo: "https://github.com/JorgeOteiza/Short-url",
    demo: "https://short-url-cl.onrender.com/",
    apiDocs: "https://short-url-cl.onrender.com/docs",
    rol: t(
      "Desarrollo full stack: diseño responsive, construcción de la API, persistencia de datos y despliegue en producción.",
      "Full stack development: responsive design, API development, data persistence and production deployment.",
    ),
    enfoque: t(
      "Aplicación full stack con FastAPI y React que permite crear enlaces cortos, compartirlos mediante códigos QR y registrar sus visitas.",
      "A full stack app built with FastAPI and React to create short links, share them as QR codes and track their visits.",
    ),
    media: shortUrlMedia,
    detalles: [
      t("Creación y redirección de enlaces cortos.", "Short link creation and redirection."),
      t("Generación y descarga de códigos QR.", "QR code generation and download."),
      t("Consulta de visitas por enlace.", "Visit counts per link."),
      t(
        "Validación de URLs y protección ante solicitudes abusivas.",
        "URL validation and protection against abusive requests.",
      ),
      t("Persistencia de datos en PostgreSQL.", "Data persistence in PostgreSQL."),
    ],
    stack: [
      { area: "Frontend", items: ["React", "JavaScript", "Vite"] },
      { area: "Backend", items: ["Python", "FastAPI", "PostgreSQL"] },
      { area: t("Infraestructura", "Infrastructure"), items: ["Neon", "Render", "GitHub Actions"] },
    ],
    aporteTecnico: t(
      "Arquitectura full stack desplegada en producción, con frontend responsive, API documentada, almacenamiento persistente y un flujo automatizado de pruebas y despliegue.",
      "A full stack architecture deployed to production, with a responsive frontend, documented API, persistent storage and an automated test and deploy pipeline.",
    ),
    tecnologias: ["javascript", "react", "vite", "python", "fastapi", "postgres"],
    secundario: true,
  },
];

export default proyectos;
