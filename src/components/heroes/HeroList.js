import React, {useMemo} from 'react'
//import { getHeroesById } from '../selectors/getHeroesById'
import { getHeroesByPublisher} from '../selectors/getHeroByPublisher'
import HeroCard from './HeroCard'


const HeroList = ({publisher}) => {
    //Método simple
    //const heroes= getHeroesByPublisher(publisher);

    //Método para prevenir re-renderizaciones
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero =>(
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                    
                ))
            }
        </div>
    )
}

export default HeroList
