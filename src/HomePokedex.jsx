import { useNavigate } from "react-router-dom"

const HomePokedex = () => {
    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/pokedex');
    }

    return <div className="home">
                <button onClick={handleButton}>Click!</button>
            </div>
}

export default HomePokedex
