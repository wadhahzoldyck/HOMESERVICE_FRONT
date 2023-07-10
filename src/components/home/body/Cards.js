import React from 'react'
import {
  Flex,
  Text,
  Box,
  Image,
  Center,
  Button,
  useColorModeValue,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { GiWaterDrop, GiElectric, GiWateringCan, GiVacuumCleaner } from "react-icons/gi";
import { withTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';




const Cards = () => {
  const navigate= useNavigate()
  return (

    <Grid ml={{base: '0', lg: '20'}} mt={{base: '1', md: '10', lg: '14'}} bg='transparent' templateColumns='repeat(4, 1fr)' >
      <GridItem w='100%'>
        <Box
         position={"static"}
          ml={{base:'0' , lg:'1'}}
          rounded="lg"
          shadow="2xl"
          bg={"blue.50"}
             border='2px'
            borderColor={'white'}
        >
          <Button
          onClick={() => navigate('/service', {state:{id:"Plomberie"}})}
           position={"static"}
            bg={"blue.50"}
            width={{base: '18',md: '32', lg: '40'}}
            height={{base: '24',md: '24', lg: '24'}}
            display={'block'}
            fontSize={{base: '8',md: '12', lg: '14'}}
            fontWeight={600}
            color={'blue.400'}
            href={'#'}
            _hover={{
              mt: {base: '34',md:'10', lg: '0'},
              color: 'white',
              width: {base: '36',md: '34', lg: '60'},
              height: {base: '28',md: '28', lg: '32'},
              backgroundImage: "url('https://img.freepik.com/free-photo/handyman-with-toolbox_152404-7233.jpg?w=1060')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
             <Center><GiWaterDrop size={36} /></Center>

            <Text as="kbd"
            >Plomberie</Text>
          </Button>
        </Box>
      </GridItem>

      <GridItem w='100%'>
        <Box
         position={"static"}
          ml={{base:'0' , lg:'1'}}
          rounded="lg"
          shadow="2xl"
          bg={"yellow.50"}
             border='2px'
            borderColor={'white'}
        >
          <Button
           onClick={() => navigate('/service', {state:{id:"Electricité"}})}
           position={"static"}
            bg={"yellow.50"}
            width={{base: '18',md: '32', lg: '40'}}
            height={{base: '24',md: '24', lg: '24'}}
            display={'block'}
            fontSize={{base: '8',md: '12', lg: '14'}}
            fontWeight={600}
            color={'yellow.400'}
            href={'#'}
            _hover={{
              mt: {base: '34',md:'10', lg: '0'},
              color: 'white',
              width: {base: '36',md: '34', lg: '60'},
              height: {base: '28',md: '28', lg: '32'},
              backgroundImage: "url('https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-16352.jpg?t=st=1647360140~exp=1647360740~hmac=3f862eb4103a43bd689d209d4d8329f989f6971b58cb45b1b6525279c3de261f&w=1060')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Center><GiElectric size={40}/></Center>
            <Text as="kbd" >Electricité</Text>

          </Button>

        </Box>


      </GridItem>
      <GridItem w='100%' >
        <Box
         position={"static"}
          ml={{base:'0' , lg:'1'}}
          rounded="lg"
          shadow="2xl"
          bg={"pink.50"}
             border='2px'
            borderColor={'white'}
        >
          <Button
           onClick={() => navigate('/service', {state:{id:"Ménage à domicile"}})}
           position={"static"}
            bg={"pink.50"}
            width={{base: '18',md: '32', lg: '40'}}
            height={{base: '24',md: '24', lg: '24'}}
            display={'block'}
            fontSize={{base: '8',md: '12', lg: '14'}}
            fontWeight={600}
            color={'pink.400'}
            href={'#'}
            _hover={{
              mt: {base: '34',md:'10', lg: '0'},
              color: 'white',
              width: {base: '36',md: '34', lg: '60'},
              height: {base: '28',md: '28', lg: '32'},
              backgroundImage: "url('https://img.freepik.com/free-photo/young-housewife-is-wearing-yellow-gloves-while-cleaning-with-product-clean-white-wall_1150-21781.jpg?t=st=1647370975~exp=1647371575~hmac=85b8c4f111398651f26156327e3ee19bb9298310d9586c83cfe2a478d34c1af2&w=1060')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Center><GiVacuumCleaner size={40}/></Center>
            <Text as="kbd" >Ménage <br/> à domicile</Text>

          </Button>

        </Box>
      </GridItem>
      <GridItem w='100%'>
        <Box
         position={"static"}
          ml={{base:'0' , lg:'1'}}
          rounded="lg"
          shadow="2xl"
          bg={"green.50"}
          border='2px'
          borderColor={'white'}
            >
          <Button
           onClick={() => navigate('/service', {state:{id:"Jardinage"}})}
           position={"static"}
            bg={"green.50"}
            width={{base: '18',md: '32', lg: '40'}}
            height={{base: '24',md: '24', lg: '24'}}
            display={'block'}
            fontSize={{base: '8',md: '12', lg: '14'}}
            fontWeight={600}
            color={'green.400'}
            _hover={{
              mt: {base: '34',md:'10', lg: '0'},
              color: 'white',
              width: {base: '36',md: '34', lg: '60'},
              height: {base: '28',md: '28', lg: '32'},
              backgroundImage: "url('https://img.freepik.com/free-vector/gardening-icons-collection_1324-47.jpg?t=st=1647361096~exp=1647361696~hmac=803e75c75a598fb9e4bdbd4179510e327e9961d3ad46c5fefa0af41386dcbbbe&w=996')",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Center><GiWateringCan size={40}/></Center>
            <Text as="kbd" >Jardinage</Text>

          </Button>
        </Box>
      </GridItem>




    </Grid>


  )
}

export default Cards