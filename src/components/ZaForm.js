import React from 'react'
import styled from 'styled-components'


export default function ZaForm(props){

    const StyledForm = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        
        border: 3px solid black;
        border-radius: 8px;
        text-align: center;

        padding: 10%;

        .form-banner {
            border: 3px solid black;
            border-radius: 8px;
        }

        h5 {
            font-size: 5rem;
        }

        .Size {
            border: 3px solid black;
            border-radius: 8px;
            margin: 2%;
            padding: 5%;
        }

        .Name {
            border: 3px solid black;
            border-radius: 8px;
            margin: 2%;
            padding: 5%;
        }

        .Sauce {
            border: 3px solid black;
            border-radius: 8px;
            margin: 2%;
            padding: 5%;
        }

        .Toppings {
            border: 3px solid black;
            border-radius: 8px;
            margin: 2%;
            padding: 5%;
        }

        .Instructions {
            border: 3px solid black;
            border-radius: 8px;
            margin: 2%;
            padding: 5%;
        }
    `

    const {values, submit, change, disabled, errors}=props

    const onSubmit=evt=>{
        evt.preventDefault()
        submit()
    }

    const onChange=evt=>{
        const{name, value, type, checked}=evt.target
        const valueToUse = type === 'checkbox' ? checked:value
        change(name, valueToUse)
    }

    return(
        <StyledForm>
            <form id={'pizza-form'} onSubmit={onSubmit}>

            <div>
                <h1>Pie Designer</h1>
                
                <h2> Don't wanna cook tonight?</h2> 

                <h5>Fa'ge'da'bow'dit!!!</h5> 

                <h2>and design your own pie!</h2>
            </div>
            
            <div className='Name'>
                <h2>Recipient Name:</h2>
                <label htmlFor='name-input'>Enter Here: 
                    <input id='name-input' name='name' type='text' value={values.name} onChange={onChange}/>
                </label>
            </div>

            <div className='Size'>
                <h3>How bigs ya wann'it?</h3>

                    <select id='size-dropdown' name='size' value={values.size} onChange={onChange}>
                        <option value=''>Select</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
            </div>

            <div className='Sauce'>

                <h3>What kinda sauce? Now with less cigarette butts!</h3>

                <label>Tomato Sauce
                    <input 
                        type='radio'
                        name='sauce'
                        value='Tomato Sauce'
                        checked={values.sauce === 'Tomato Sauce'}
                        onChange={onChange}
                    />
                </label>

                <label>Creamy Alfredo
                    <input 
                        type='radio'
                        name='sauce'
                        value='Creamy Alfredo'
                        checked={values.sauce === 'Creamy Alfredo'}
                        onChange={onChange}
                    />
                </label>

                <label>Mango Chutney
                    <input 
                        type='radio'
                        name='sauce'
                        value='Mango Chutney'
                        checked={values.sauce === 'Mango Chutney'}
                        onChange={onChange}
                    />
                </label>

                <label>5 Cheese Garlic
                    <input 
                        type='radio'
                        name='sauce'
                        value='5 Cheese Garlic'
                        checked={values.sauce === '5 Cheese Garlic'}
                        onChange={onChange}
                    />
                </label>

                <label>BBQ
                    <input 
                        type='radio'
                        name='sauce'
                        value='BBQ'
                        checked={values.sauce === 'BBQ'}
                        onChange={onChange}
                    />
                </label>

            </div>

            <div className='Toppings'>

                <h3>Fixins'</h3>
            
                <div className='meat'>    
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>

                    <label>Ham
                        <input
                            type='checkbox'
                            name='ham'
                            checked={values.ham}
                            onChange={onChange}
                            />
                    </label>

                    <label>Chicken
                        <input
                            type='checkbox'
                            name='chicken'
                            checked={values.chicken}
                            onChange={onChange}
                        />
                    </label>

                    <label>Anchovies
                        <input
                            type='checkbox'
                            name='anchovies'
                            checked={values.anchovies}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <div className='veggies'>    
                    <label>Green Peppers
                        <input
                            type='checkbox'
                            name='peppers'
                            checked={values.peppers}
                            onChange={onChange}
                        />
                    </label>

                    <label>Onions
                        <input
                            type='checkbox'
                            name='onions'
                            checked={values.onions}
                            onChange={onChange}
                        />
                    </label>

                    <label>Olives
                        <input
                            type='checkbox'
                            name='olives'
                            checked={values.olives}
                            onChange={onChange}
                        />
                    </label>

                    <label>Mushrooms
                        <input
                            type='checkbox'
                            name='mushrooms'
                            checked={values.mushrooms}
                            onChange={onChange}
                        />
                    </label>

                    <label>Pineapple
                        <input
                            type='checkbox'
                            name='pineapple'
                            checked={values.pineapple}
                            onChange={onChange}
                        />
                    </label>

                </div>

            </div>

            <div className='Instructions'>

                <h3>Special Instructions</h3>

                <input 
                    id='special-text' 
                    name='special' 
                    type='text' 
                    value={values.special} 
                    onChange={onChange}
                />

            </div>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.sauce}</div>
            </div>

            <button id="submitBtn" disabled={disabled}>Submit</button>

            

            </form>
        </StyledForm>
    )
}