import { useState } from 'react'
import Modal from './Modal'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">
      {/* Skip link : premier élément focusable de la page, visible au focus */}
      <a href="#form" className="skip-link">
        Aller au formulaire
      </a>

      <h1>Paramètres du compte</h1>

      <form id="form" className="form">
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <button type="button" onClick={() => setOpen(true)}>
          Ouvrir les préférences avancées
        </button>
      </form>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  )
}

export default App