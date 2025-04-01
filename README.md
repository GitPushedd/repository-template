Este repositorio es una plantilla para proyectos que requieren Webpack como herramienta de construcción. Incluye configuraciones optimizadas para desarrollo y producción, además de un flujo de despliegue en GitHub Pages.


**Estructura del proyecto:**

- **package.json:** Define las dependencias y scripts para ejecutar el proyecto.
- **webpack.dev.js:** Configuración para desarrollo con recarga en vivo.
- **webpack.prod.js:** Configuración para producción con optimizaciones.
- **src/:** Carpeta principal con el código fuente del proyecto.
- **dist/:** Carpeta generada después de la compilación con Webpack.
- **.gitignore:** Archivo para omitir subir archivos a git.

**uso:**
Ejecuta el servidor de desarrollo con Webpack Dev Server:
npm run dev

- 📌 Se abrirá automáticamente en http://localhost:3000/
- 🔥 Soporta Hot Module Replacement (HMR) para cambios en tiempo real.

**Construcción para Producción:**
Genera la versión optimizada en la carpeta dist/:
npm run build
- 🎯 Minificación y optimización del código.
- ⚡ Generación de hashes en los archivos para mejor caché.

**Despliegue en GitHub Pages:**
Si quieres publicar el proyecto en GitHub Pages, usa:
npm run deploy
Este comando enviará la carpeta dist/ al branch gh-pages.

**📦 Dependencias Principales**
- **WebPack:** Es el empaquetador de módulos principal. Permite transformar, optimizar y gestionar archivos como JS, CSS e imágenes en un solo flujo de trabajo.
- **WebPack-cli:** Proporciona una interfaz de línea de comandos para Webpack, permitiendo ejecutar comandos como webpack --config webpack.prod.js.
- **WebPack-dev-server:** Un servidor de desarrollo que permite recargar automáticamente los cambios en el navegador sin necesidad de hacer refresh manualmente.
- **css-loader:** Permite importar archivos .css dentro de los archivos JS y los convierte en módulos procesables por Webpack.
- **style-loader:** Inserta los estilos procesados en el DOM para que sean aplicados en la página en tiempo de ejecución.
- **html-webpack-plugin:** Genera dinámicamente el archivo HTML de salida y lo enlaza con los archivos JavaScript y CSS generados. Evita la necesidad de modificar manualmente el HTML cada vez que cambia el código.
- **html-loader:** Permite importar archivos HTML dentro de los archivos JS y procesar imágenes y otros recursos incluidos en ellos. EJ. Carga imagenes con src directamente desde el html.
- **asset/resource** (integrado en Webpack): Convierte archivos como imágenes (.png, .jpg, .gif, .svg) en recursos estáticos y los coloca en la carpeta dist/, generando rutas correctas en el HTML final.

**📝 Notas**
- El archivo package-lock.json no está incluido en la plantilla para que cada usuario instale versiones actualizadas de dependencias.
- Puedes modificar la plantilla HTML en src/template.html.
