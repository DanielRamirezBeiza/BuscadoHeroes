import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById';



const HeroScreen = ({history}) => {
    //->>hook de react router doom
    //const params = useParams();
    //console.log(params)

    //Lo mismo pero con desestructuración
    const {heroeId} = useParams();
    console.log(heroeId);

    //Detalles
    //const hero = getHeroesById(heroeId);
    //console.log(hero);

    //Método para conseguir detalles de información previa
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
    
    //Metodo: si no encuentra un hero
    if(!hero){
        return <Redirect to="/" />
    }

    const handleReturn= () =>{
    //Método para redigirir al inicio en caso de no tener historial.
        if(history.length <=2){
            history.push('/')
        }else{
        history.goBack();
        }
    }

    const{
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/heroes/${heroeId}.jpg`} 
                    className="img-thumbnail animate__animated animate__backInLeft"
                    alt={heroeId} 
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Identidad secreta: </b>{alter_ego}</li>
                    <li className="list-group-item"> <b>Compañia: </b>{publisher}</li>
                    <li className="list-group-item"> <b>Primera aparición: </b>{first_appearance}</li>
                </ul>
                <h5>Identidades</h5>
                <p>{characters}</p>

                <button
                    className=" btn btn-outline-info"
                    onClick= { handleReturn }
                    >
                        Regresar
                </button>
                

            </div>
            
        </div>
    )
}

export default HeroScreen
