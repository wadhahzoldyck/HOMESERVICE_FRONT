import { Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Intro from './sections/Intro'
import Information from './sections/Information'
import { useLocation } from 'react-router-dom'
import axios from 'axios'



const ServiceComponent = (props) => {

  const [services, setServices] = useState();
  const {state} = useLocation()
  const id = state.id

  const getServices = async () => {
    await axios.get("http://localhost:3001/services").then(
      (res) => {
        setServices(res.data)
      }
    )
  }
  useEffect(() => {
    getServices()
    // filter()
  },
    []
  )
  
  let {nameSer, imgcouverture, description} = ""  
  return (
 <Stack>
 {services!==undefined &&
             services.map( (service) => {
             if(service.name===id) {
               nameSer = service.name
               imgcouverture = service.imageCouverture
               description = service.description
             }
            })}
     <Intro NameService = {nameSer} imgc = {imgcouverture} />
     <Information NameService = {nameSer} desc = {description} imgc = {imgcouverture} isLogged = {props.isLogged} User = {props.User}/>
 </Stack>
  )
}

export default ServiceComponent
