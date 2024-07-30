// import React from "react";
// import Header from "./Header";
// import PizzaForm from "./PizzaForm";
// import PizzaList from "./PizzaList";

// function App() {
//   return (
//     <>
//       <Header />
//       <PizzaForm />
//       <PizzaList />
//     </>
//   );
// }

// export default App;
////00000

import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizza, setPizza] = useState([])
  
  const [p, setP] = useState({
    id: '',
    topping: '',
    size: '',
    vegetarian: false
})
  useEffect(() => {
    fetch(' http://localhost:3001/pizzas')
      .then(res => res.json())
      .then(data => {
      setPizza(data)
      })
    .catch(e=> console.error(e))
  }, [])
  function pizzaToSend(pId) {
    const selectedPizza = pizza.find(pi => pi.id === pId)
    if (selectedPizza) {
      setP(selectedPizza)
    }
}
  function handleInputField(e) {
    const {name,value,type, checked} = e.target
    setP(prev => ({
      ...prev, [name]: type === 'radio'?value==='true' : value
    }))
  }
  function submiInput(e) {
    e.preventDefault()
    fetch(` http://localhost:3001/pizzas/${p.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(p)
    })
      .then(res => res.json())
      .then((updatedPizza) => {
        setPizza(pizza.map(pi => pi.id === updatedPizza.id ? updatedPizza : pi))
        setP({
          id: '',
          topping: '',
          size: '',
          vegetarian: false
        })
      
      })
    .catch(e=> console.error(e))
  }
  return (
    <>
      <Header />
      <PizzaForm
        handleInputField={handleInputField}
        // inputField={inputField}
        submiInput={submiInput}
        p={p}
      />
      <PizzaList
        pizza={pizza}
        pizzaToSend={pizzaToSend}
      />
    </>
  );
}

export default App;
