import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import queryString from 'query-string';
import getHeroByName from '../selectors/getHeroByName';


//useForm

const SearchScreen = ({history}) => {

      //Hook de location
      const location =useLocation();
      //console.log(location);

    //-->Uso del queryString
    //-->Ver propiedades del componente: console.log(location.search);
    //-->Ver ejecucion del queryString: console.log(queryString.parse())
    //-->Ver resultados del queryString: console.log(queryString.parse(location.search))
    const { q = '' } = queryString.parse(location.search)

    
    //-->importacion del useForm
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    //desestructuración del hook
    const {searchText} = formValues
    

    //-->Filtro de resultados (useMemo)
    const herosFiltered = useMemo(() => getHeroByName(q), [q] )
    //const herosFiltered = getHeroByName(searchText);

  


    //-->funciones del formulario
    const handleSearch = (e)=>{
        e.preventDefault();
    //console.log(searchText);
    history.push(`?q=${searchText}`)
        
    
    }
    return (
        <div>
            <h1>Pantalla de busquedas</h1>
            <hr/>

            <div className="row">   
                <div className="col-5">
                    <h4>Formulario busquedas</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buscador de heroes"
                            className="form-control"
                            onChange= {handleInputChange}
                            name="searchText"
                            value= {searchText}
                            autoComplete="off"
                            
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                             Buscando...
                        </button>
        
                    </form>
                </div>  
                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>

                    {(q==='')
                        &&
                        <div className="alert alert-info">
                        Busca un heroe
                    </div>
                    }

                    {(q !== '' && herosFiltered.length === 0)
                        &&
                        <div className="alert alert-info">
                        {q} No se encontro
                    </div>
                    }

                    {
                        herosFiltered.map(hero=>(
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
           
        </div>
    )
}

export default SearchScreen
