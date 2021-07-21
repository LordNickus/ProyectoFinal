import { Link } from "react-router-dom";

function Home(){
    return (
    <div>
        <div>
            <Link to="/register">Registrarme</Link>
        </div>
        <div><Link to="/login">Ingresar</Link></div>
        <div><Link to="/products/create">Crear Producto</Link></div>
        <div><Link to="/brands/create">Crear Producto</Link></div>
    
        </div>
    )
}

export default Home