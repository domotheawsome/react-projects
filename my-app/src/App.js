
import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Form from './components/Form'
import Card from './components/Card'



function App() {

  const initialFormData = {url: "", caption: ""}

  const [dialog, setDialog] = React.useState(false)
  const [formData, setFormData] = React.useState(initialFormData)
  const [cards, setCards] = React.useState([])

  console.log(formData)

  function addCard(e) {
    e.preventDefault()    
    setCards(prevCards => [...prevCards, formData])
    setFormData(initialFormData)
  }

  function renderCard() {
      cards.map(i => (
      
        <Card 
          key={i.id}
          url={i.url}
          caption={i.caption}
        />
      ))
  }

  //console.log(cards)

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
              url={i.url}
              caption={i.caption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
