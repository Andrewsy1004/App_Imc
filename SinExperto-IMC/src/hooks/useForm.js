import { useState } from "react";
export const useForm = (intialForm={}) => {
    const [formState, setFormState] = useState(intialForm);
        
      const onNameChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value // firstName: value
        });
      };
      
      const onReset = () =>{
        setFormState(intialForm);
      }

    return{
        /*...formState, const {firstName, email, password} = formState; */
        formState,
        onNameChange,
        onReset,
    } 

}


