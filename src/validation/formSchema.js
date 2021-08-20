import * as yup from 'yup'

const formSchema = yup.object().shape({

    name: yup
    .string()
    .trim()
    .required('Name Required')
    .min(2, 'name must be at least 2 characters'),

    size:yup
    .string()
    .oneOf(['small', 'medium', 'large'], 'Required'),

    sauce:yup
    .string()
    .oneOf(['Tomato Sauce', 'Creamy Alfredo', 'Mango Chutney', '5 Cheese Garlic', 'BBQ' ], 'Required'),
    
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    ham: yup.boolean(),
    chicken: yup.boolean(),
    anchovies: yup.boolean(),

    peppers: yup.boolean(),
    onions: yup.boolean(),
    olives: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),
    
    special: yup
    .string()
    .trim()
    .min(4, 'input at least 4 characters')
})

export default formSchema