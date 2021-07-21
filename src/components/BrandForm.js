import {useState} from "react";


function BrandForm(props){
    let [brand] = useState ('')

    let [errors, setErrors] = useState (null)
    let [success, setSuccess] = useState(false)

    let[data, setData] = useState({
                brand: null,
                model: null,
                version: null,
            })
    
    function sendFormData(e){
        e.preventDefault()
        
        fetch('http://localhost:4000/api/brands', {
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
        let inputName = e.target.brand
        
        setData({
            ...data,
            [inputName] :e.target.value,
            
    
        })
    }

    return(
        <form action="/brands" method="post" noValidate autoComplete="off" onSubmit={sendFormData}>
            <div>
                <label htmlFor="">Marca</label>
                <input type="text" name="brand" value={data.brand} onInput={handleInput}/>
            </div>

            <div>
                <label htmlFor="">Modelo</label>
                <input type="text" name="model" value={data.model} onInput={handleInput}/>
            </div>

            <div>
                <label htmlFor="">Version</label>
                <input type="text" name="version" value={data.version} onInput={handleInput}/>
            </div>

            <div>
                <button>Cargar marca</button>
            </div>
        </form>
    )
}

export default BrandForm