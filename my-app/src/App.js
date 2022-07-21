
import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Form from './components/Form'
import Card from './components/Card'



function App() {

  let nextId = 0

  const initialFormData = {nextId: nextId, url: "", caption: ""}

  const [dialog, setDialog] = React.useState(false)
  const [formData, setFormData] = React.useState(initialFormData)
  const [cards, setCards] = React.useState([])


  function addCard(e) {
    e.preventDefault() 

    setCards(prevCards => [...prevCards, {nextId: cards.length, url: formData.url, caption: formData.caption}])
    
    setFormData(initialFormData)
  }

  function removeCard(i) {
    setCards(cards.filter(c => 
      c.nextId !== i
    ))
  }

  console.log(formData)
  console.log(cards)

  return (
    <div>
      <Nav />
      <div className="container">
        <div className="form--div">
          <Form
            initialFormData={initialFormData}
            dialog={dialog} 
            setDialog={setDialog}
            formData={formData}
            setFormData={setFormData}
            addCard={addCard}
          />
        </div>
        <div className="photo--div">
          {cards.map(i => (
        
            <Card 
              key={i.id}
              nextId={i.nextId}
              url={i.url}
              caption={i.caption}
              removeCard={removeCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
