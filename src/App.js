import { useState } from 'react'
import Nav from './Component/Nav'
import Header from './Component/Header'
import Skill from './Component/Skill'
import Footer from './Component/Footer'
import '../src/darkmode.css'
import Theme from '../src/Theme'



function App() {
  const [themes, setTheme] = useState(Theme.light)

  function toggleTheme() {
    setTheme((curTheme) => curTheme === Theme.light ? setTheme(Theme.dark) : setTheme(Theme.light))
  }


  return (
    <>
      <div className='app-cover' style={themes}>
        <Nav
          changetheme={toggleTheme}
        />
        <Header />
        <Skill />
        <Footer
          style={themes}
        />
      </div>
    </>
  );
}

export default App;
