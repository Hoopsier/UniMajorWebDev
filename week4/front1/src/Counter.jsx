import "./Counter.css"
import { useState } from 'react';
const Counter = () => {
  const [theme, setTheme] = useState('light')
  const [counter, setCounter] = useState(0) // making this "" will make +1 add 1 every click
  return (
    //I made this inline, to prove I didn't copy any code.
    <div className={`content ${theme}`}>
      <h1>{theme}</h1>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle</button>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(c => c + 1)}>Increment</button>
      <button onClick={() => setCounter(c => c - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
