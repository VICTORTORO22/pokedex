import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../Components/styles/PokeInfoPage.css'

const pokeInfoPage = () => {
  const { name } = useParams()

  const [pokemon, getPokemon] = useFetch()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getPokemon(url)

  }, [name])
  return (
    <article className='poke__info'>
      <section className="poke__card-info">
        <header className={`poke_header-info bg_${pokemon?.types[0].type.name}`}>
          <img className="poke_sprite-info" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="poke_body-info">
          <h3 className={`poke_name-info text_${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
          <div className='poke__info-title'>
            <h4>Type</h4>
            <h4>Ability</h4>
          </div>

          <div className='poker__ul-info'>
            <ul >{pokemon?.types.map(typeInfo => (
                
                <li  key={typeInfo.type.url}>{typeInfo.type.name}</li>

            ))
            }
            </ul>
            <ul >
              {
                pokemon?.abilities.map(ability => (
                      
                  <li  key={ability.ability.url}>{ability.ability.name}</li>
                ))
              }
                  
            </ul>
           

          </div>
          <hr className="poke_hr-info" />
          <h3>stats</h3>
          <br />
          <ul className="poke_stats-info">
            {
              pokemon?.stats.map(statInfo => (
                <li className="poke_stats_item-info" key={statInfo.stat.url}><span className="poke_stats_label-info">{statInfo.stat.name} </span ><span className={`poke_stats_value-info `}>{statInfo.base_stat} </span></li>
              ))
            }
          </ul>
          
          
        </section>

      </section>
        

        <section className='section__info-move'>
          
          <h3 >Movements</h3>

        

          <ul className='info__move'>
            
            
              {
                
                pokemon?.moves.map(statInfo => (
                  <li key={statInfo.move.url}><span className="stats_label">{statInfo.move.name} </span ></li>
                ))
              }
            </ul>

        </section>
    </article>  
        
  )
}

export default pokeInfoPage