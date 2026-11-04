// Textos de la interfaz en español e inglés.
// Los datos de cada proyecto viven en src/data/proyectos.js.

const CV_ES = "/CV_Jorge_Oteiza_Full_Stack_Developer.pdf";

const ui = {
  es: {
    meta: {
      title: "Jorge Oteiza | Full Stack Developer Junior",
      locale: "es-CL",
    },
    cv: {
      url: CV_ES,
      label: "Ver CV",
      fullLabel: "Ver currículum completo",
      ariaFull: "Abrir currículum de Jorge Oteiza en una pestaña nueva",
    },
    nav: {
      logoAlt: "Logo Full Stack Enduro de Jorge Oteiza",
      open: "Abrir navegación",
      close: "Cerrar navegación",
      projects: "Proyectos",
      technologies: "Tecnologías",
      about: "Sobre mí",
      contact: "Contacto",
      languageGroup: "Idioma",
    },
    home: {
      availability: "Disponible para nuevos desafíos",
      kicker: "Jorge Oteiza · Full Stack Developer Junior",
      titleStart: "Desarrollo productos digitales ",
      titleEm: "de principio a fin.",
      description:
        "Desarrollo aplicaciones con React y Python, desde la interfaz y las APIs hasta los datos y el despliegue.",
      viewProjects: "Ver proyectos",
      socialLabel: "Redes profesionales",
      proof: [
        "Aplicaciones reales",
        "APIs REST",
        "Experiencia de usuario",
        "Datos y automatización",
      ],
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Productos que viven más allá del código.",
      intro:
        "Cada dispositivo abre una historia: el problema, las decisiones y la tecnología que convirtió una idea en una aplicación funcional.",
      featured: "Proyecto destacado",
      case: "Caso",
      mainTech: "Tecnologías principales",
      explore: "Explorar proyecto",
      exploreAria: (titulo) => `Ver caso completo de ${titulo}`,
      viewApp: "Ver aplicación",
      viewRepo: "Ver repositorio",
      viewApiDocs: "Ver documentación API",
      othersEyebrow: "Más exploraciones",
      othersTitle: "Otros proyectos",
      previousImage: (titulo) => `Ver imagen anterior de ${titulo}`,
      nextImage: (titulo) => `Ver imagen siguiente de ${titulo}`,
      previousImageDetail: (titulo) => `Ver imagen anterior de ${titulo} en detalle`,
      nextImageDetail: (titulo) => `Ver imagen siguiente de ${titulo} en detalle`,
      imageN: (n, titulo) => `Ver imagen ${n} de ${titulo}`,
      projectImages: "Imágenes del proyecto",
      closeDetail: "Cerrar detalle del proyecto",
      publicationStatus: "Estado de publicación",
      role: "Rol",
      stack: "Stack",
      solves: "Qué resuelve",
      technicalHighlight: "Aporte técnico destacado",
      quality: "Calidad y validación",
      origin: "Origen del proyecto",
      privateRepo: "Repositorio privado",
    },
    tech: {
      eyebrow: "Tecnologías de mis proyectos",
      title: "Un stack para construir, medir y mejorar.",
      groups: {
        frontend: "Frontend",
        backend: "Backend y APIs",
        data: "Datos e infraestructura",
        testing: "Pruebas y flujo de trabajo",
        tools: "Herramientas complementarias",
      },
      toolsDescription:
        "Diseño, empaquetado y asistentes de IA utilizados como apoyo al desarrollo.",
    },
    about: {
      eyebrow: "La persona detrás del código",
      title: "Sobre mí",
      lead: "Me gusta convertir problemas cotidianos en productos claros, rápidos y fáciles de usar.",
      paragraphs: [
        "Soy desarrollador full stack y trabajo principalmente con React, Flask y FastAPI. Diseño interfaces, construyo APIs REST y modelo datos con PostgreSQL y SQLite para resolver necesidades reales. Me interesa construir productos completos, conectando la experiencia de usuario, la lógica de negocio y los datos.",
        "Uso asistentes de IA como apoyo al desarrollo: defino el contexto y los requisitos, reviso el código generado y valido cómo se integra y funciona dentro del proyecto.",
        "Minimarket Manager resume mi forma de trabajar: entender la operación de un negocio real y construir una solución que permita seguir vendiendo sin internet, con sincronización y administración remota cuando hay conexión.",
        "También trabajo con autenticación, pruebas automatizadas, contenedores y despliegues en producción. Busco mi primera oportunidad profesional en desarrollo de software, dentro de un equipo donde pueda aportar, aprender y seguir creciendo.",
      ],
      processLabel: "Cómo trabajo",
      process: [
        {
          title: "Entender el problema",
          text: "Traduzco la necesidad del usuario y del negocio en un alcance concreto.",
        },
        {
          title: "Diseñar la arquitectura",
          text: "Conecto interfaz, API, datos y reglas de negocio como un solo producto.",
        },
        {
          title: "Probar e iterar",
          text: "Valido recorridos críticos, automatizo pruebas y refino la experiencia.",
        },
        {
          title: "Publicar y observar",
          text: "Preparo el despliegue, la persistencia y la operación del producto.",
        },
      ],
    },
    footer: {
      eyebrow: "¿Construimos algo juntos?",
      titleStart: "Convirtamos la próxima idea ",
      titleEm: "en un producto real.",
      copy: "Estoy disponible para colaborar en productos digitales y sumarme a un equipo donde pueda aportar desde el frontend hasta el backend. Si tienes un desafío, conversemos.",
      cta: "Escríbeme",
    },
  },

  en: {
    meta: {
      title: "Jorge Oteiza | Junior Full Stack Developer",
      locale: "en-US",
    },
    cv: {
      url: "/CV_Jorge_Oteiza_Full_Stack_Developer_EN.pdf",
      label: "View résumé",
      fullLabel: "View full résumé",
      ariaFull: "Open Jorge Oteiza's résumé in a new tab",
    },
    nav: {
      logoAlt: "Jorge Oteiza's Full Stack Enduro logo",
      open: "Open navigation",
      close: "Close navigation",
      projects: "Projects",
      technologies: "Tech stack",
      about: "About",
      contact: "Contact",
      languageGroup: "Language",
    },
    home: {
      availability: "Open to new opportunities",
      kicker: "Jorge Oteiza · Junior Full Stack Developer",
      titleStart: "I build digital products ",
      titleEm: "from start to finish.",
      description:
        "I build applications with React and Python, from the interface and APIs to the data layer and deployment.",
      viewProjects: "View projects",
      socialLabel: "Professional profiles",
      proof: ["Real-world apps", "REST APIs", "User experience", "Data & automation"],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Products that live beyond the code.",
      intro:
        "Each device opens a story: the problem, the decisions and the technology that turned an idea into a working application.",
      featured: "Featured project",
      case: "Case",
      mainTech: "Main technologies",
      explore: "Explore project",
      exploreAria: (titulo) => `View full case study of ${titulo}`,
      viewApp: "View app",
      viewRepo: "View repository",
      viewApiDocs: "View API docs",
      othersEyebrow: "More explorations",
      othersTitle: "Other projects",
      previousImage: (titulo) => `View previous image of ${titulo}`,
      nextImage: (titulo) => `View next image of ${titulo}`,
      previousImageDetail: (titulo) => `View previous detailed image of ${titulo}`,
      nextImageDetail: (titulo) => `View next detailed image of ${titulo}`,
      imageN: (n, titulo) => `View image ${n} of ${titulo}`,
      projectImages: "Project images",
      closeDetail: "Close project details",
      publicationStatus: "Release status",
      role: "Role",
      stack: "Stack",
      solves: "What it solves",
      technicalHighlight: "Technical highlight",
      quality: "Quality and testing",
      origin: "Project origin",
      privateRepo: "Private repository",
    },
    tech: {
      eyebrow: "Technologies from my projects",
      title: "A stack to build, measure and improve.",
      groups: {
        frontend: "Frontend",
        backend: "Backend & APIs",
        data: "Data & infrastructure",
        testing: "Testing & workflow",
        tools: "Supporting tools",
      },
      toolsDescription:
        "Design, packaging and AI assistants used to support development.",
    },
    about: {
      eyebrow: "The person behind the code",
      title: "About me",
      lead: "I enjoy turning everyday problems into clear, fast and easy-to-use products.",
      paragraphs: [
        "I'm a full stack developer working mainly with React, Flask and FastAPI. I design interfaces, build REST APIs and model data with PostgreSQL and SQLite to solve real needs. I'm interested in building complete products that connect user experience, business logic and data.",
        "I use AI assistants to support my work: I define the context and requirements, review the generated code and validate how it integrates and behaves within the project.",
        "Minimarket Manager sums up how I work: understanding how a real business operates and building a solution that keeps sales running without internet, with sync and remote management whenever there's a connection.",
        "I also work with authentication, automated testing, containers and production deployments. I'm looking for my first professional role in software development, on a team where I can contribute, learn and keep growing.",
      ],
      processLabel: "How I work",
      process: [
        {
          title: "Understand the problem",
          text: "I translate user and business needs into a concrete scope.",
        },
        {
          title: "Design the architecture",
          text: "I connect interface, API, data and business rules as a single product.",
        },
        {
          title: "Test and iterate",
          text: "I validate critical flows, automate tests and refine the experience.",
        },
        {
          title: "Ship and observe",
          text: "I prepare deployment, persistence and day-to-day operation of the product.",
        },
      ],
    },
    footer: {
      eyebrow: "Shall we build something together?",
      titleStart: "Let's turn the next idea ",
      titleEm: "into a real product.",
      copy: "I'm available to collaborate on digital products and to join a team where I can contribute from frontend to backend. If you have a challenge in mind, let's talk.",
      cta: "Get in touch",
    },
  },
};

export default ui;
