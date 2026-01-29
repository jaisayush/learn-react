// Entry point of the React application
// Angular equivalent: main.ts which bootstraps the module
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Global styles, similar to styles.css in Angular
import App from './App.jsx'

// createRoot is the modern way to initialize a React app (React 18+)
// It takes the root DOM element (usually <div id="root"></div> in index.html)
// Angular equivalent: platformBrowserDynamic().bootstrapModule(AppModule)
createRoot(document.getElementById('root')).render(
  // StrictMode: A tool for highlighting potential problems in an application.
  // It runs checks and warnings in development mode only.
  // Has no direct Angular equivalent, but similar to enabling strict mode in TypeScript config.
  <StrictMode>
    <App /> {/* The root component calling the App component */}
  </StrictMode>,
)
