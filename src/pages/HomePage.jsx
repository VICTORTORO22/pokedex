
import React, { useRef } from 'react'
import { setTrainer } from '../store/estadosGlobales/trainer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../Components/styles/HomePage.css'

const HomePage = () => {
  
  
  // capturar el input 
  const inputTrainer = useRef()
  // despachar la action 
  const dispatch = useDispatch()
  
  const navigate = useNavigate ()
  // capturar el valor del input 
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(setTrainer(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }
// validar que si guarde la informacion 
  // const trainer = useSelector(states => states.trainer)
  // console.log(trainer)
  return (
    // imgane 
    <div className='home'>
      <div className='home__container'>
        <img className='home__img' src="/image/pokedex1.png" alt="/image/pokedex1.png" />
        <p className='home__info'><h2 className='home__title'>Hi trainer</h2>, if you want to find you favorite pokemon, please give me your trainer name</p>
        <form onSubmit={handleSubmit}>
          <input className='home__input' ref={inputTrainer} type="text" placeholder='your name is'/>
          <button className='home__btn'>Catch them all</button>
        </form>
      </div>

    </div>
      
  )
}

export default HomePage