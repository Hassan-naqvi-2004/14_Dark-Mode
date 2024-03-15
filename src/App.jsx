import React from 'react'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('lighttheme')
  const handletheme= ()=>{
    theme === 'lighttheme' ? setTheme('darktheme'):setTheme('lighttheme')
  }
 

  return (
    <div className={theme} >
      <div className='btn'>
        {
          theme=== "lighttheme"?  <button onClick={handletheme} >Enable dark theme</button>: <button onClick={handletheme}  >Enable light theme</button>
        }
     
      <h1>Bookfolio</h1>
      </div>
      <div className='images'>
      <img src="public/img-1.jpg" alt="" />
      <img src="public/img-2.jpeg" alt="" />
      </div>
    
    </div>
  )
}

export default App
