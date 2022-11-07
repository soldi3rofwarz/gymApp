import React from 'react'
import {Box,Button,Stack,Typography} from '@mui/material'
import HeroBannerimg from './../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{lg:'212px',xs:'70px'},
      ml:{sm:'50px'}
    }} position='relative' p='20px'>
      <Typography color="#FF2625" fontWeight='600' fontSize='26px'>
        Strong Gym
      </Typography>
      <Typography fontWeight={700} sx={{fontsize:{lg:'44px',xs:'40px'}}} mb='23' mt='30px'>
        Sweat, Smile <br/> and repeat
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4}>
       Cheack out the most effective exercises
      </Typography>
      <Button variant='contained' color='error' href='#exercises'
      sx={{backgroundColor:'#ff2625', padding:'10px'}}
      >Explore Excercises</Button>
      <Typography
      fontWeight={600} color="#ff2625" sx={{opacity:0.1,display:{lg:'block',xs:'none'}}}
      fontSize='200px'>Excercises</Typography>
      <img src={HeroBannerimg} alt='banner' className='hero-banner-img'/>
    </Box>
  )
} 

export default HeroBanner