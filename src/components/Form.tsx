import useSubForm from '../hooks/useNewSubForm'
import {Sub} from '../types';



interface FormProps{
    onNewSub: (newSub: Sub) => void
}



const Form =({onNewSub}: FormProps) => {

const[inputValues, dispatch] = useSubForm()

    const handleSubmit = (evt :React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        dispatch ({type:"clear"})
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target 
        dispatch({
            type: "change_value",
            payload:{
                inputName: name,
                inputValue: value 
            }
        })
        
    }

    const handClear = ()=>{
        dispatch ({type:"clear"})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value= {inputValues.nick}type= 'text' name= 'nick' placeholder="nick"/>
                <input onChange={handleChange} value= {inputValues.subMonths}type= 'number' name= 'subMonths' placeholder="subMonths"/>
                <input onChange={handleChange} value= {inputValues.avatar}type= 'text' name= 'avatar' placeholder="avatar"/>
                <textarea onChange={handleChange} value= {inputValues.description} name= 'description' placeholder="description"/>
                <button onClick= {handClear} type= 'button'>Clear the form</button>
                <button type= 'submit'>Save new Sub!</button>
            </form>
        </div>
    )
}

export default Form 