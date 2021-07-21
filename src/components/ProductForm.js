import {useState} from 'react'
// import { ProgressPlugin } from 'webpack'


function ProductForm(props) {

    let [errors, setErrors] = useState (null)
    let [success, setSuccess] = useState(false)


    let[brands,setBrands] = useState ([
        {
            _id:1,
            name:"Fiat"
        },
        {
            _id:2,
            name:"Ford"
        },
        {
            _id:3,
            name:"BMW"
        },
        {
            _id:4,
            name:"Peugeot"
        },

    ])

    let[data, setData] = useState({
//useState devuelve 2 cosas/datos en un array 
//data es la posicion 0 para la informacion-lectura
//setData es la posicion 1 para modificar la info
        name :null,
        price: null,
        brand: null,
        model: null,
        version: null,
        year: null,
        category: null,
        stock: 1

    })

    function sendFormData(e){
        e.preventDefault()

        fetch('http://localhost:4000/products', {
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
//se encarga de la carga de datos
        let inputName = e.target.name
        
        setData({
            ...data,
            [inputName] :e.target.value,
            
    
        })
    }

    return (
        <>
       {props.children}

       {
           errors ? <p>Revise todos los campos</p> : ''
       }

    <form action="/products" method="post" noValidate autoComplete="off" onSubmit={sendFormData}>
            <div>
                <label htmlFor="">Titulo del producto</label>
                <input type="text" name="name" value={data.name} onInput={handleInput}/> 
                            
            </div>
            <div>
                <label htmlFor="">Precio</label>
                <input type="number" name="price"value={data.price} onInput={handleInput}/> 
                            
            </div>
            <div>
                <label htmlFor="">Marca</label>
                <select name="brand" value={data.brand} onInput={handleInput}> 
                            <option value=""></option>

                            {brands.map(brand => {
                                return <option value={brand._id}>{brand.name}</option>
                      })}
                </select>
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
                <label htmlFor="">Año</label>
                <input type="number" name="year" value={data.year} onInput={handleInput}/> 
                            
            </div>
            <div>
                <label htmlFor="">Categoria</label>
                <input type="text" name="category" value={data.category} onInput={handleInput}/> 
                            
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type="number" name="stock" value={data.stock} onInput={handleInput}/> 
                            
            </div>
            
            <div>
                <button>Enviar</button>
            </div>
        </form>
        
        </>
        )
}

export default ProductForm