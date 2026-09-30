import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="State Lab home">
          <span className="wordmark-mark" aria-hidden="true">S</span>
          STATE LAB
        </a>
        <span className="topbar-course">REACT / REDUX / TYPESCRIPT</span>
      </header>
      <section className="lesson" aria-labelledby="lesson-title">
        <div className="lesson-copy">
          <p className="eyebrow">01 <span /> GLOBAL STATE</p>
          <h1 id="lesson-title">A single source<br />of truth.</h1>
          <p className="lesson-description">
            Change the count from any control. Redux keeps the value in one
            shared store and sends each update through a reducer.
          </p>
          <div className="flow-note">
            <span>DISPATCH</span><i aria-hidden="true">→</i><span>REDUCER</span>
            <i aria-hidden="true">→</i><span>STATE</span>
          </div>
        </div>
        <Counter />
      </section>
      <footer className="footer">
        <span>MANUAL REDUX SETUP</span>
        <span>NO TOOLKIT / JUST THE FUNDAMENTALS</span>
      </footer>
    </main>
  )
}

export default App
