import { configureStore } from '@reduxjs/toolkit'
import trainer from './estadosGlobales/trainer'
export default configureStore({
  reducer:{
    trainer
    
  }
})