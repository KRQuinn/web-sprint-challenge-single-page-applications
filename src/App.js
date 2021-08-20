import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { reach } from 'yup'
import axios from 'axios'

import formSchema from './validation/formSchema'
import ZaForm from "./components/ZaForm";

import Home from "./components/Home";

const initialFormValues={
  name:'',
  size:'',
  sauce:'',

  pepperoni:false,
  sausage:false,
  ham:false,
  chicken:false,
  anchovies:false,

  peppers:false,
  onions:false,
  olives:false,
  mushrooms:false,
  pineapple:false,

  special:'',
}

const initialErrors={
  name:'',
  size:'',
  sauce:'',
}

const initialOrder=[]

const initialDisabled=true

const App = () => {
  const [order, setOrder]=useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOrder=testOrder=>{
    axios.post('https://reqres.in/api/orders', testOrder)
    .then(res=>{
      setOrder([res.data, ...order])
    })
    .catch(err=>{
        alert(err)
    })
    .finally(()=>{
        setFormValues(initialFormValues)
    })
}

const validate = (name, value) => {
  reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
        
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value 
  })
}



const formSubmit=()=>{
  const newOrder={
      name:formValues.name.trim(),
      size:formValues.size,
      sauce:formValues.sauce,

      pepperoni:formValues.pepperoni,
      sausage:formValues.sausage,
      ham:formValues.ham,
      chicken:formValues.chicken,
      anchovies:formValues.anchovies,

      peppers:formValues.peppers,
      onions:formValues.onions,
      olives:formValues.olives,
      mushrooms:formValues.mushrooms,
      pineapple:formValues.pineapple,

      special:formValues.special.trim()
  }
  postNewOrder(newOrder)
}

useEffect(() => {
  console.log(formValues)
  formSchema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <Switch>
      
      <Route path='/pizza'>
        <ZaForm 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      <Route path='/'>  
        <Home />
      </Route>
    </Switch>
  );
};
export default App;