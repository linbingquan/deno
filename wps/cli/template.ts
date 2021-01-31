import { format } from './utils.ts';

/**
 * vue3 html模板
 */
const vue3 = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/vue@next"></script>
  </head>
  <body>
    <div id="app">
      {{ message }}
    </div>
    <div>创建时间：${format(new Date())}</div>

    <script>
      const Hello = {
        data() {
          return {
            message: 'Hello Vue3!'
          }
        }
      }

      Vue.createApp(Hello).mount('#app')
    </script>
  </body>
</html>`

/**
 * react html模板
 */
const react = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <div>创建时间：${format(new Date())}</div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

    </script>
    <!--
      Note: this page is a great way to try React but it's not suitable for production.
      It slowly compiles JSX with Babel in the browser and uses a large development build of React.

      Read this section for a production-ready setup with JSX:
      https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

      In a larger project, you can use an integrated toolchain that includes JSX instead:
      https://reactjs.org/docs/create-a-new-react-app.html

      You can also use React without JSX, in which case you can remove Babel:
      https://reactjs.org/docs/react-without-jsx.html
    -->
  </body>
</html>`

/**
 * vue3 示例
 */
type vue3 = string;
/**
 * react 示例
 */
type react = string;

export type Template = vue3 | react;

export { vue3, react };
