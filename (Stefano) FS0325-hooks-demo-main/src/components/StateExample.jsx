// questo sarà un componente a FUNZIONE con delle proprietà di STATE!
import { useState } from 'react'
// useState è un REACT HOOK che permette di arricchire un componente a FUNZIONE
// con delle caratteristiche simili allo state object nei componenti a classe

// per poter utilizzare i React Hooks dobbiamo prima di tutto memorizzare
// le DUE REGOLE DEGLI HOOKS:
// 1) i REACT HOOKS possono essere utilizzati SOLO NEI COMPONENTI A FUNZIONE
// 2) i REACT HOOKS possono essere utilizzati solamente al di fuori di cicli,
// condizioni, funzioni, e vanno inseriti nel componente PRIMA del "return"
// (questo perchè l'ORDINE DI INVOCAZIONE dei React Hooks è FONDAMENTALE,
// e va SEMPRE RISPETTATO in ogni "ridisegno" del componente)

// useState, quando invocato, torna un ARRAY di DUE ELEMENTI.

// immaginate di avere uno state object in un componente a classe fatto così:
// state = {
//   isLoading: true,
//   isError: false,
//   comments: [],
// }

const StateExample = () => {
  // per esempio, questo è un ottimo punto! :)
  // ogni volta che utilizzate useState, vi viene restituito un ARRAY di 2 ELEMENTI:
  // il primo è la "variabile di stato" vera e propria (come una delle proprietà
  // dell'oggetto "state" in un componente a classe)
  // il secondo è una funzione "setter", il cui nome è "set"+nomevariabile, che
  // rappresenta l'UNICO MODO per cambiare il valore della variabile di stato
  // associata (un po' come un this.setState ma MOOOLTO SPECIFICO)
  // differenza nel funzionamento della funzione generica this.setState() e delle
  // funzioni "setter" di useState: la funzione this.setState FONDE (fa un "merge")
  // del nuovo valore fornito sull'oggetto di stato originale nei componenti a classe,
  // mentre le funzioni "setter" SOVRASCRIVONO direttamente il vecchio valore con il nuovo

  const [counter, setCounter] = useState(0)
  //   potete anche salvare interi oggetti in una singola proprietà di stato
  //   const [obj, setObj] = useState({
  //     name: 'Stefano',
  //     surname: 'Casasola',
  //     area: 'Italy',
  //   })
  const [show, setShow] = useState(false)

  return (
    <div>
      <h3>Esempio useState()</h3>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary px-4"
          onClick={() => {
            setCounter(counter - 1)
          }}
        >
          -
        </button>
        <p className="m-0 px-4 fw-bold">{counter}</p>
        <button
          className="btn btn-primary px-4"
          onClick={() => {
            setCounter(counter + 1)
          }}
        >
          +
        </button>
      </div>
      <div className="mt-3 text-center">
        <button
          className={'btn ' + (show ? 'btn-danger' : 'btn-success')}
          // { condizione ? se sì : se no}
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? 'NASCONDI' : 'MOSTRA'}
        </button>
        {show && (
          <div>
            <h4>SEZIONE NASCOSTA</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default StateExample
