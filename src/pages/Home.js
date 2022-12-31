import React,{useState} from 'react'
import { Box } from '@mui/material'
import Exercises from "../Components/Exercises"
import SearchExercises from '../Components/SearchExercises'
import HeroBanner from '../Components/HeroBanner'

const Home = () => {
  const [exercises, setExercises]= useState([])
  const [bodyPart, setBodyPart]= useState('all')

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}/>
      <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        exercises={exercises}/>
    </Box>
  )
}

export default Home