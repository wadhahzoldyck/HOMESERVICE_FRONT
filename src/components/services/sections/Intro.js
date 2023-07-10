import React, { useEffect, useState } from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Divider,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Intro = (props) => {

  
  const [serviceByName, setServiceByName] = useState();
  const imgc = props.imgc
  // const p ="Plomberie"
  // const filter = () => {
  //   switch (id) {
  //       case 2:
  //         const getServiceByName = services?.find(
  //         (e) => e?.name === p
  //       ) 
  //        setServiceByName(getServiceByName)
  //       break;

  //     default:
  //       break;
  //   }
    

  // }

  
  // const getServices = async () => {
  //   await axios.get("http://localhost:3001/services").then(
  //     (res) => {
  //       setServices(res.data)
  //     }
  //   )
  // }
  // useEffect(() => {
  //   getServices()
  //   // filter()
  // },
  //   []
  // )
  return (
    <Flex
      w={'full'}
      h={'50vh'}
      backgroundImage={`url(${imgc})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            {/* {services!==undefined &&
             services.map( (service) => {
             return (service.name===id && <h1>{service.name}</h1>)
            })} */}
            {props.NameService}
          </Text>   
          <Divider orientation='horizontal' borderColor={useColorModeValue('gray.100', 'gray.700')} />
        </Stack>
      </VStack>
      
    </Flex>
    
  )
}

export default Intro
