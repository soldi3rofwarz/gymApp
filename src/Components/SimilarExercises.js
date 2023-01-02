import React from 'react'
import { Typography,Box,Stack } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetM,equipmentM}) => {

  console.log(targetM)
  return (
    <Box sx={{mt:{lg:'140px',xs:'30px'}}}>
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
        {targetM.length ? <HorizontalScrollbar data={targetM}/>:<Loader/>}
      </Stack>

      <Typography variant='h3' mb={5}>
        Exercises that use tha same equipment
      </Typography>
      <Stack direction='row' sx={{p:'2', position:'relative'}}>
        {equipmentM.length ? <HorizontalScrollbar data={equipmentM}/>:<Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises