import {useState} from 'react'

//Hook para realizar operaciones con los fomularios
//Values son los valores segun su nombre del input
//reset convirte los valores en un objeto vacio
//handleInputChange recibe los cambios en el formulario

const useForm = ( initialState= {} ) => {

    const [values, setValues] = useState(initialState)

    const reset = () =>{
        setValues(initialState);
    }
    const handleInputChange=({target})=>{

        setValues({
            ...values,
            [target.name]: target.value
        });
    }


    return [values, handleInputChange, reset]
}

export default useForm




