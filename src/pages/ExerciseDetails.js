import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Details from '../Components/Details'
import SimilarExercises from '../Components/SimilarExercises'
import ExercisesVideos from '../Components/ExercisesVideos'
import { exerciseOptions, fetchData, youtubeOptions } from '../api/fetchData'

const ExerciseDetails = () => {

  const [exerciseDetail, setExerciseDetail]= useState({})
  const [exerciseVideos, setexerciseVideos] = useState([])
  const {id} = useParams()
  

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exercisesDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exercisesDetailData)

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exercisesDetailData.name}`, youtubeOptions)
      console.log('ff',exerciseVideoData)
      setexerciseVideos(exerciseVideoData.contents)
    }

    fetchExercisesData()
  },[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExercisesVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetails