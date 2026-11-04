# Contexto y mantenimiento del portafolio

Revisión del código local: 8 de septiembre de 2026. Actualizado el 4 de noviembre de 2026 (versión bilingüe, optimización de recursos y reorganización de Proyectos).

## Propósito y voz

Portafolio de Jorge Oteiza orientado a mostrar productos funcionales y su capacidad de desarrollo full stack. Busca incorporarse a un equipo de desarrollo y construir productos completos, integrando experiencia de usuario, lógica de negocio y datos. Presentar un perfil full stack equilibrado, sin expresar preferencia por frontend ni backend.

Su experiencia comprende proyectos personales desde noviembre de 2024 y Minimarket Manager, proyecto independiente para un negocio real iniciado el 27 de marzo de 2026. El uso de IA se presenta como apoyo: definir contexto y requisitos, revisar el código generado y validar su integración y funcionamiento. No atribuirle experiencia en entrenamiento de modelos ni resultados medidos que no haya confirmado.

Fechas confirmadas: bootcamp de 4Geeks Academy de julio a diciembre de 2023; proyecto final El Rincón del Vino de noviembre a diciembre de 2023. Su experiencia anterior incluye trabajos temporales durante vacaciones desde 2011 y trabajo como personal trainer aproximadamente de 2017 a 2023. No presentar toda la trayectoria desde 2011 como empleo continuo ni inferir meses exactos para el período 2017-2023.

El contenido utiliza español, con referencias regionales `es-CL`, un tono profesional, cercano y directo, y primera persona para describir la participación del autor. Desde noviembre de 2026 el sitio también tiene versión en inglés (`en-US`), porque Jorge busca además ofertas remotas o en inglés. Todo texto nuevo debe escribirse en ambos idiomas, manteniendo en inglés el mismo nivel de honestidad: no exagerar el rol ni los resultados al traducir. Los términos React, frontend, backend, API REST y full stack forman parte del vocabulario habitual.

La explicación parte del problema y la utilidad del producto, continúa con el rol y las funcionalidades y profundiza en decisiones técnicas. Las tarjetas resumen; los detalles desarrollan la historia. Ejemplos del tono: «Me gusta convertir problemas cotidianos en productos claros, rápidos y fáciles de usar» y «Qué resuelve».

Al incorporar contenido, distinguir trabajo individual, colaboración y evolución posterior. El Rincón del Vino explicita su origen en equipo y mantenimiento individual; AuthFlow explica su origen formativo y reconstrucción posterior. Verificar en el proyecto correspondiente cualquier afirmación sobre seguridad, despliegue, métricas o número de pruebas antes de actualizarla.

## Implementación del sitio

- React 18, JavaScript y JSX; Create React App mediante `react-scripts` 5.
- CSS propio por componente, variables globales y Bootstrap 5 (solo CSS; el menú móvil se controla con estado de React, sin el bundle JavaScript de Bootstrap).
- Iconos mediante clases de Font Awesome 6.7.2 cargadas desde cdnjs. No hay paquetes Font Awesome en `package.json`.
- Internacionalización propia y sin dependencias: `src/i18n/LanguageContext.jsx` (`LanguageProvider`, `useLanguage()` y `localizar()`) y `src/i18n/ui.js` (textos de la interfaz). El idioma inicial sale de `?lang=es|en`, luego de `localStorage` (`portfolio-lang`) y por último del idioma del navegador (español si lo prefiere; inglés en otro caso). Las pruebas fijan el español en `src/setupTests.js`.
- Página única con navegación por anclas. No hay backend ni React Router implementados en este repositorio.
- Estado local con `useState`, referencias con `useRef` y efectos con limpieza de listeners e intervalos.
- Jest y React Testing Library a través de `react-scripts`.
- Publicación configurada en GitHub Pages mediante `gh-pages`, con destino `https://jorgeoteiza.github.io`.

Las tecnologías descritas en las fichas y en la sección de habilidades no equivalen a las dependencias del portafolio. Por ejemplo, Flask, FastAPI, Vite y TypeScript pertenecen a los proyectos o habilidades presentados.

## Mapa de archivos

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `src/index.js` | Arranque de React, StrictMode y carga de Bootstrap |
| `src/App.js` | `LanguageProvider`, fondo de video (solo ≥768 px y sin movimiento reducido) y orden: Navbar, Home, Proyectos, Tecnologías, SobreMi, Footer |
| `src/data/proyectos.js` | Datos de los seis proyectos y sus capturas, con textos `t(es, en)`; el orden del arreglo es el de las tarjetas |
| `src/i18n/` | Contexto de idioma y diccionario de textos de la interfaz |
| `src/components/Home.js` | Presentación, disponibilidad, CV y redes |
| `src/components/Proyectos.jsx` | Tarjetas de dispositivos, carruseles, relojes aislados (`HoraActual`, `FechaHoraActual`) y modal |
| `src/components/Tecnologías.jsx` | Catálogo de iconos y habilidades agrupadas |
| `src/components/SobreMi.jsx` | Perfil, proceso de trabajo y enlace al CV |
| `src/components/Navbar.js` | Navegación por anclas, selector ES/EN, menú móvil y ocultación al bajar |
| `src/components/Footer.js` | Contacto por correo, redes y año dinámico |
| `src/styles/index.css` | Variables de color y tipografía, estilos base |
| `src/styles/Proyectos.css` | Dispositivos, galerías, modal y adaptación responsive |
| `public/projects/` | Capturas en WebP agrupadas por proyecto (máximo 1920 px de ancho, calidad 80) |
| `public/logos/` | Logos de tecnologías alojados localmente |
| `public/index.html` | Idioma, metadatos sociales, fuentes y Font Awesome |
| `public/CV_Jorge_Oteiza_Full_Stack_Developer.pdf` | CV en español, enlazado desde Home y SobreMi en modo español |
| `public/CV_Jorge_Oteiza_Full_Stack_Developer_EN.pdf` | Traducción fiel al inglés del CV, con el mismo diseño, enlazada en modo inglés (`cv.url` en `src/i18n/ui.js`). Si cambia el CV en español, regenerar también la versión en inglés |

`Experiencia.jsx` y su CSS existen, pero el componente no está montado en `App.js`. Fue una decisión de Jorge: la experiencia ya aparece en el CV y en sus perfiles.

## Presentación de proyectos

Principales: Minimarket Manager (destacado, monitor), El Rincón del Vino (teléfono), Travel Calculator (tablet) y AuthFlow (teléfono). Secundarios: Archivo Galáctico de Star Wars y Short URL.

La ficha de Minimarket Manager fue actualizada con el contexto proporcionado por Jorge: POS y administración offline en el PC principal, sincronización cuando hay internet y administración remota con cuentas autorizadas mediante Supabase y Render. La galería utiliza diez capturas actualizadas: siete locales y tres remotas, incluyendo celular y tablet. La tarjeta muestra resumen comercial, POS y reportes remotos. Las leyendas distinguen el entorno de cada captura. Los textos para otras plataformas se entregan en el chat, según la preferencia de Jorge.

La ficha de Travel Calculator se actualizó el 22 de septiembre de 2026 con contexto obtenido de dos sesiones de Claude Code que mantienen el desarrollo de ese proyecto (no de Jorge directamente), contrastado contra el bundle JavaScript servido en `https://travel-calculator-44v.pages.dev/`. Agrega: cálculo como invitado sin cuenta (antes solo había demo estática) además del guardado autenticado, declaración de un vehículo fuera de catálogo, manejo de sesión que reintenta como invitado si el token vence a mitad de un cálculo, límites de solicitudes con Flask-Limiter, corrección de condiciones de carrera del mapa de Google Maps, y el paso a producción real: frontend en Cloudflare Pages, backend en Render y base de datos migrada a Neon (antes Render PostgreSQL), con `pool_pre_ping` habilitado tras un incidente real de conexiones muertas. Se agregó el enlace de demo. El texto público ya no cita un número de pruebas ni atribuye un framework de pruebas al backend: la cifra de 56 provino de contar `def test_` en el código, no de una corrida verificada, y el propio README (desactualizado también en el estado de despliegue) todavía indica 17 pruebas con `unittest`, no con pytest. Antes de citar un número de pruebas o un framework de pruebas de backend específico en la ficha pública, confirmarlo directamente en el repositorio de Travel Calculator.

Minimarket Manager y Travel Calculator tienen repositorio privado por estar en producción; su ficha lo indica con `repoPrivado`. No agregar enlaces a esos repositorios. Jorge planea grabar videos: primero de Travel Calculator (para LinkedIn) y después de Minimarket Manager. El modal ya admite `type: "video"` en `media`.

El arreglo `proyectos` reúne id, título, categoría, resumen, repositorio, rol, enfoque, funcionalidades, stack y aporte técnico. Algunos proyectos agregan frase de presentación, calidad y validación u origen. `secundario`, `destacado` y `cardDevice` controlan la presentación.

`id` identifica al proyecto en el estado del modal y en las clases específicas de tarjeta; no usar el título para eso, porque cambia con el idioma. Los demos usan siempre la etiqueta «Ver aplicación» / «View app».

`media` contiene la galería completa. `phoneMedia`, cuando existe, selecciona capturas para la tarjeta; también se utiliza para tarjetas de otros dispositivos. Cada captura identifica `src`, `alt` y, cuando corresponde, `device: "phone"` o `"tablet"`. Conservar las proporciones reales y el propósito de cada selección.

Las demos son opcionales. Short URL tiene demo y documentación API configuradas; Travel Calculator suma un enlace de demo desde el 22 de septiembre de 2026. Esto no verifica la disponibilidad permanente de esos servicios.

## Identidad visual e interacciones a preservar

Fondo oscuro con video de estrellas, acentos cian y amarillo, superficies translúcidas y esquinas redondeadas. Inter para cuerpo y Space Grotesk para títulos. Las capturas se muestran en marcos de monitor, tablet o teléfono construidos con CSS.

Las galerías admiten botones, indicadores y arrastre. El modal permite Escape, flechas, recorrido de foco con Tab y restauración del foco al cerrar. La tira de miniaturas distingue pulsación de arrastre. Mantener estas interacciones al modificar la estructura.

Hay reglas responsive y soporte parcial para preferencia de movimiento reducido. Una modificación visual requiere revisar escritorio, tablet y móvil en navegador; las pruebas de DOM no validan proporciones ni apariencia.

## Flujo de mantenimiento

1. Revisar el estado de Git y los archivos afectados.
2. Para un proyecto nuevo o actualizado, comprobar contenido y capturas en su fuente; actualizar su ficha y las habilidades si corresponde.
3. Reutilizar las variables visuales y los patrones existentes. Revisar la cascada de CSS: hay selectores redefinidos más adelante en `Proyectos.css`.
4. Ejecutar las pruebas pertinentes y compilar. Para cambios visuales o de interacción, verificar también en navegador.
5. Revisar el diff y comunicar alcance, validación y limitaciones.

Comandos en Windows PowerShell:

```powershell
npm.cmd start
npm.cmd test -- --watchAll=false --runInBand
npm.cmd run build
```

El README declara Node 20 y npm 10 o superior. El entorno de la revisión dispone de Node 24.18.0. `npm.cmd` evita el bloqueo del lanzador `npm.ps1` sin cambiar la política de ejecución del sistema.

`npm.cmd run deploy` ejecuta previamente la compilación y publica mediante `gh-pages`; no forma parte de una simple revisión local.

## Aspectos a considerar en futuras mejoras

- El selector de idioma es un control segmentado ES | EN que resalta el idioma activo (`aria-pressed`).
- En el modal, el ancho de las vistas de tablet y teléfono también se limita por `--modal-device-max-h` (alto del modal menos leyenda y miniaturas), para que no se salgan en pantallas de poca altura, como un notebook de 14" al 100 %. Se verificó en Edge con 1536×730, 1366×768 y 1920×1080.
- Los metadatos sociales de `public/index.html` están en español: el sitio es estático y los rastreadores sin JavaScript no ven el cambio de idioma. Se declararon `hreflang` y `og:locale:alternate`.
- Siguen dependiendo de servicios externos las fuentes de Google, Font Awesome y la foto de perfil de GitHub.
- Se mezclan rutas con `PUBLIC_URL` (componentes) y rutas absolutas desde `/` en los datos; `conPublicUrl()` las resuelve en Proyectos. Revisar ambas si cambia el destino de publicación a una subcarpeta.
- Hay cinco capturas de El Rincón del Vino sin referenciar (`cart`, `contact`, `mobile-showcase`, `order-confirmation` y `profile`), conservadas por si se usan más adelante.
- `build/` ya no se versiona. Se genera con `npm run build` o `npm run deploy`.

## Validación de esta revisión

4 de noviembre de 2026: pasaron las siete suites, con 17 pruebas en total; se sumó `src/Language.test.js` para el cambio de idioma y el menú móvil. La compilación con `CI=true`, que convierte las advertencias en errores, terminó correctamente. Las 60 capturas referenciadas existen en WebP, y las capturas bajaron de unos 20 MB a 3 MB. Persisten las advertencias de `ReactDOMTestUtils.act` de React Testing Library. No se realizó una inspección visual en navegador: queda pendiente revisar en escritorio, tablet y móvil el selector de idioma, el fondo sin video en móvil y los textos en inglés más largos.

Esta guía describe el repositorio local; no constituye una auditoría de los repositorios enlazados, de las demos ni del CV.
