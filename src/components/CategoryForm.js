import {useState} from "react";


function CategoryForm(props){
    let [category] = useState ('')

    let [errors, setErrors] = useState (null)
    let [success, setSuccess] = useState(false)

    let[data, setData] = useState({
                name: null,
                
            })
    
    function sendFormData(e){
        e.preventDefault()
        
        fetch('http://localhost:4000/api/categories', {
                    method : "POST",
                    body : JSON.stringify(data),
                    headers : {
                        "content-type": "application/json"
                    }
                }).then(response =>{
                    if(response.status !== 201){
                        setErrors(response.json())
                    } else {
                        setSuccess(true)
                        setErrors(null)
                    }
                })

    }
        

    function handleInput(e) {
        let inputName = e.target.name
        
        setData({
            ...data,
            [inputName] :e.target.value,
            
    
        })
    }

    return(
        <form action="/categories" method="post" noValidate autoComplete="off" onSubmit={sendFormData}>
            <div>
                <label htmlFor="">Marca</label>
                <input type="text" name="name" value={data.name} onInput={handleInput}/>
            </div>

            <div>
                <button>Cargar Categoria</button>
            </div>
        </form>
    )
}

export default CategoryForm