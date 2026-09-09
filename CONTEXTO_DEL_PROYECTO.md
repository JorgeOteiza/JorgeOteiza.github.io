# Contexto y mantenimiento del portafolio

Revisión del código local: 8 de septiembre de 2026.

## Propósito y voz

Portafolio de Jorge Oteiza orientado a mostrar productos funcionales y su capacidad de desarrollo full stack. Busca incorporarse a un equipo de desarrollo y tiene especial afinidad por el frontend y la experiencia de usuario. Su interés abarca frontend y backend; no presentarlo como alguien que prioriza trabajar en backend.

Su experiencia comprende proyectos personales desde noviembre de 2024 y Minimarket Manager, proyecto independiente para un negocio real iniciado el 27 de marzo de 2026. El uso de IA se presenta como apoyo: definir contexto y requisitos, revisar el código generado y validar su integración y funcionamiento. No atribuirle experiencia en entrenamiento de modelos ni resultados medidos que no haya confirmado.

El contenido utiliza español, con referencias regionales `es-CL`, un tono profesional, cercano y directo, y primera persona para describir la participación del autor. Los términos React, frontend, backend, API REST y full stack forman parte del vocabulario habitual.

La explicación parte del problema y la utilidad del producto, continúa con el rol y las funcionalidades y profundiza en decisiones técnicas. Las tarjetas resumen; los detalles desarrollan la historia. Ejemplos del tono: «Me gusta convertir problemas cotidianos en productos claros, rápidos y fáciles de usar» y «Qué resuelve».

Al incorporar contenido, distinguir trabajo individual, colaboración y evolución posterior. El Rincón del Vino explicita su origen en equipo y mantenimiento individual; AuthFlow explica su origen formativo y reconstrucción posterior. Verificar en el proyecto correspondiente cualquier afirmación sobre seguridad, despliegue, métricas o número de pruebas antes de actualizarla.

## Implementación del sitio

- React 18, JavaScript y JSX; Create React App mediante `react-scripts` 5.
- CSS propio por componente, variables globales, Bootstrap 5 y su bundle JavaScript.
- Iconos mediante clases de Font Awesome cargadas desde CDN; también hay paquetes Font Awesome declarados en `package.json`.
- Página única con navegación por anclas. No hay backend ni React Router implementados en este repositorio.
- Estado local con `useState`, referencias con `useRef` y efectos con limpieza de listeners e intervalos.
- Jest y React Testing Library a través de `react-scripts`.
- Publicación configurada en GitHub Pages mediante `gh-pages`, con destino `https://jorgeoteiza.github.io`.

Las tecnologías descritas en las fichas y en la sección de habilidades no equivalen a las dependencias del portafolio. Por ejemplo, Flask, FastAPI, Vite y TypeScript pertenecen a los proyectos o habilidades presentados.

## Mapa de archivos

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `src/index.js` | Arranque de React, StrictMode y carga de Bootstrap |
| `src/App.js` | Fondo de video y orden: Navbar, Home, Proyectos, Tecnologías, SobreMi, Footer |
| `src/components/Home.js` | Presentación, disponibilidad, CV y redes |
| `src/components/Proyectos.jsx` | Datos de seis proyectos, capturas, tarjetas de dispositivos, carruseles y modal |
| `src/components/Tecnologías.jsx` | Catálogo de iconos y habilidades agrupadas |
| `src/components/SobreMi.jsx` | Perfil, proceso de trabajo y enlace al CV |
| `src/components/Navbar.js` | Navegación por anclas, menú móvil y ocultación al bajar |
| `src/components/Footer.js` | Contacto por correo, redes y año dinámico |
| `src/styles/index.css` | Variables de color y tipografía, estilos base |
| `src/styles/Proyectos.css` | Dispositivos, galerías, modal y adaptación responsive |
| `public/projects/` | Capturas agrupadas por proyecto |
| `public/index.html` | Idioma, metadatos sociales, fuentes y Font Awesome |
| `public/CV_Jorge_Oteiza_Full_Stack_Developer.pdf` | CV enlazado desde Home y SobreMi |

`Experiencia.jsx` y su CSS existen, pero el componente no está montado en `App.js`.

## Presentación de proyectos

Principales: Minimarket Manager (destacado, monitor), El Rincón del Vino (teléfono), Travel Calculator (tablet) y AuthFlow (teléfono). Secundarios: Archivo Galáctico de Star Wars y Short URL.

La ficha de Minimarket Manager fue actualizada con el contexto proporcionado por Jorge: POS y administración offline en el PC principal, sincronización cuando hay internet y administración remota con cuentas autorizadas mediante Supabase y Render. La galería utiliza diez capturas actualizadas: siete locales y tres remotas, incluyendo celular y tablet. La tarjeta muestra resumen comercial, POS y reportes remotos. Las leyendas distinguen el entorno de cada captura. Los textos para otras plataformas se entregan en el chat, según la preferencia de Jorge.

El arreglo `proyectos` reúne título, categoría, resumen, repositorio, rol, enfoque, funcionalidades, stack y aporte técnico. Algunos proyectos agregan frase de presentación, calidad y validación u origen. `secundario`, `destacado` y `cardDevice` controlan la presentación.

`media` contiene la galería completa. `phoneMedia`, cuando existe, selecciona capturas para la tarjeta; también se utiliza para tarjetas de otros dispositivos. Cada captura identifica `src`, `alt` y, cuando corresponde, `device: "phone"` o `"tablet"`. Conservar las proporciones reales y el propósito de cada selección.

Las demos son opcionales. Al revisar el código, solo Short URL tiene demo y documentación API configuradas. Esto no verifica la disponibilidad de esos servicios.

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

- `Proyectos.jsx` concentra datos, presentación e interacciones. Separarlos puede facilitar futuras ampliaciones, conservando el comportamiento cubierto por pruebas.
- Fotos, fuentes y varios iconos dependen de servicios externos.
- Se mezclan rutas absolutas desde `/` y rutas con `PUBLIC_URL`; revisar ambas si cambia el destino de publicación a una subcarpeta.
- El reloj actualiza el estado de Proyectos cada segundo. Considerar aislarlo si se trabaja en rendimiento.
- Hay componentes y estilos heredados; comprobar sus usos antes de retirarlos.
- Algunos archivos de `build/` siguen versionados aunque la carpeta está en `.gitignore`. Compilar puede modificar esos archivos; revisar el estado de Git y evitar incluir resultados generados por accidente.

## Validación de esta revisión

Las seis suites existentes pasaron: 13 pruebas en total. La compilación de producción terminó correctamente. Las 60 rutas de capturas referenciadas en Proyectos tienen su archivo local. Se observaron advertencias de `ReactDOMTestUtils.act` desde React Testing Library y de `fs.F_OK` durante la compilación. No se realizó una inspección visual en navegador.

Esta guía describe el repositorio local; no constituye una auditoría de los repositorios enlazados, de las demos ni del CV.
