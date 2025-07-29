// useEffect() è un altro hook disponibile dalla libreria di React che ci permette
// di "aggangiarci" alle funzionalità di LIFECYCLE tradizionalmente conosciute
// nei componenti a classe, come componentDidMount e componentDidUpdate.

import { useEffect, useState } from 'react'

// per poter utilizzare i React Hooks dobbiamo prima di tutto memorizzare
// le DUE REGOLE DEGLI HOOKS:
// 1) i REACT HOOKS possono essere utilizzati SOLO NEI COMPONENTI A FUNZIONE
// 2) i REACT HOOKS possono essere utilizzati solamente al di fuori di cicli,
// condizioni, funzioni, e vanno inseriti nel componente PRIMA del "return"
// (questo perchè l'ORDINE DI INVOCAZIONE dei React Hooks è FONDAMENTALE,
// e va SEMPRE RISPETTATO in ogni "ridisegno" del componente)

// useEffect può venire utilizzato ad esempio per rimpiazzare componentDidMount
// o componentDidUpdate in un componente a funzione.
// useEffect accetta fino a 2 parametri (anche se il primo è obbligatorio!)
// il primo parametro rappresenta l'effect vero e proprio, cioè la funzione
// che verrà eseguita al montaggio/aggiornamento
// il secondo parametro è un ARRAY di DIPENDENZE: significa che ogni elemento di
// questo array rappresenterà un valido "trigger" (azionamento) al fine
// di RE-INVOCARE la callback del primo parametro

// nel caso il secondo parametro NON CI SIA, la callback del primo parametro
// verrà invocata automaticamente all'avvio e verrà anche RE-INVOCATA ad ogni
// AGGIORNAMENTO (update) del componente (ogni volta che cambia il suo stato
// o che cambiano le sue props).

const EffectExample = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  useEffect(() => {
    // this.getReservations()
    // this.getComments()
    console.log('USEEFFECT')
  })
  // questo è un po' come un "componentDidUpdate" (senza l'if dentro)
  // pericoloso, perchè prono a CICLI INFINITI (basta che dentro ci sia un
  // set-qualcosa e siamo fritti! perchè ri-entreremmo automaticamente nell'effect)

  useEffect(() => {
    // this.getReservations()
    // this.getComments()
    console.log('USEEFFECT che si aziona solo con counter1')
  }, [counter1])
  // questo è un po' come un "componentDidUpdate" con dentro una condizione
  // per filtrare solamente gli update relativi a "counter1"
  // più elementi mettete nell'array, più condizioni ("dipendenze") date
  // all'effect per ri-eseguirsi

  useEffect(() => {
    // this.getReservations()
    // this.getComments()
    console.log("USEEFFECT che si aziona solo all'avvio")
  }, [])
  // questo è come un COMPONENTDIDMOUNT!
  // se io allo useEffect do un array di dipendenze VUOTO, gli sto dando
  // esattamente ZERO motivazioni per ri-eseguirsi successivamente dopo l'avvio

  return (
    <div>
      <h3>Esempio useEffect()</h3>
      <h5>COUNTER1</h5>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-primary px-4"
          onClick={() => {
            setCounter1(counter1 - 1)
          }}
        >
          -
        </button>
        <p className="m-0 px-4 fw-bold">{counter1}</p>
        <button
          className="btn btn-primary px-4"
          onClick={() => {
            setCounter1(counter1 + 1)
          }}
        >
          +
        </button>
      </div>
      <h5>COUNTER2</h5>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-warning px-4"
          onClick={() => {
            setCounter2(counter2 - 1)
          }}
        >
          -
        </button>
        <p className="m-0 px-4 fw-bold">{counter2}</p>
        <button
          className="btn btn-warning px-4"
          onClick={() => {
            setCounter2(counter2 + 1)
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default EffectExample
