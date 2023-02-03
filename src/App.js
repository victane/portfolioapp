import { createContext, useEffect, useState } from 'react'
import Nav from './Component/Nav'
import Header from './Component/Header'
import Skill from './Component/Skill'
import Footer from './Component/Footer'
import '../src/darkmode.css'
import Theme from '../src/Theme'


export const ThemeContext = createContext(null)

function App() {
  const [themes, setTheme] = useState(Theme.dark)

  function toggleTheme() {
    setTheme((curTheme) => curTheme === Theme.light ? setTheme(Theme.dark) : setTheme(Theme.light))
    // setTheme((curTheme) => curTheme === 'light' ? setTheme('dark') : setTheme('light'))
  }

  useEffect(() => {
    console.log(themes);
  })



  return (
    <>
      <ThemeContext.Provider value={{ themes, setTheme }}>
        <Nav />
        <Header />
        <Skill />
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
