// Importing assets
// In Angular, you might put assets in the 'assets' folder and reference them via string paths in HTML.
// In React, importing them allows bundlers (like Vite/Webpack) to optimize them.
import logo from './assets/react.svg'

// CSS IMPORT
// IMPORTANT: In standard React, importing CSS like this makes it GLOBAL.
// It is NOT scoped to this component like Angular's styleUrls (ViewEncapsulation.Emulated).
// To get scoped styles, you would use CSS Modules (e.g., header.module.css).
import './header.css'

// Arrow Function Component
const Header = () => {
  return (
    <header>
      {/* 
        JSX ATTRIBUTES
        Most HTML attributes work the same, but some are camelCased.
        'class' is a reserved word in JS, so we use 'className' for CSS classes.
        Angular Equivalent: class="logo"
        
        Curly braces {} allow us to embed JavaScript expressions (variables) into JSX.
        Angular Equivalent: src="{{logo}}" or [src]="logo"
      */}
      <img src={logo} alt="Logo" className='logo' />
      <div>
        Lean React
      </div>
    </header>
  )
}

export default Header