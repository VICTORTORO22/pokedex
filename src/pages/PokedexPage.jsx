import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../Components/PokedexPage/PokeCard"
import SelectType from "../Components/PokedexPage/SelectType"
import '../Components/styles/PokedexPage.css'



const PokedexPage = () => {
  const trainer = useSelector(states => states.trainer )

  const [searchName, setSearchName] = useState('')

  const [typeSelect, setTypeSelect] = useState('allPokemons')

  const [pokemons, getPokemons, getTypePokemon] = useFetch()
  

  useEffect(() => {
    if (typeSelect === 'allPokemons'){
      // hacemos la peticion de todos los poke 
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
      getPokemons(url)}else{
        // peticion de poke por tipo
        getTypePokemon(typeSelect) 
      }

  }, [typeSelect])


  // console.log(pokemons)

  // capturar la informacion del form 
  const inputName = useRef()

  const handleSearch = e => {
    e.preventDefault()
    setSearchName(inputName.current.value.trim().toLowerCase())
  } 

  // console.log(setSearchName)
  const callbackFilter = poke => {
    const filterName = poke.name.includes(searchName)
    return filterName
  }

  return (
    
    <div className="pokedex">
      {/*agregar pokebola */}
      
      <div className="pokedex__menu">
        <img className='pokedex__img' src="/image/pokedex1.png" alt="/image/pokedex1.png" />
        <p className="pokedex__parrafo-header">Welcome {trainer}, here you will find your favorite pokemon</p>
        <form className="pokedex__form-header" onSubmit={handleSearch}>
          <input className="pokedex__input-header" ref={inputName} type="text"/>
          <button className="pokedex__btn-header">Search</button>
        </form>
        <SelectType
        setTypeSelect={setTypeSelect} 
        />
      {/*agregar pokebola  */}

      </div>
    
      <hr className='pokedex__separator' / >

    
      <div className="pokedex__card">
      {
        pokemons && pokemons.results.filter(callbackFilter).length === 0 
        ? 
        <h2>no hay poquemos con ese nombre </h2>
        :
        (
          pokemons?.results.filter( callbackFilter).map(poke => (
          <PokeCard
            key ={poke.url}
            poke={poke}
          />
         ))
        )
      }
      </div>
  </div>
  )
}

export default PokedexPage