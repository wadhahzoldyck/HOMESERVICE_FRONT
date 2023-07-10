import React, { useRef } from 'react'
import {
  Flex,
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    VStack,
    ScaleFade,
    Link,
  } from '@chakra-ui/react';
  import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
  import { ArrowRightIcon, ChevronRightIcon} from '@chakra-ui/icons'
  import Slider from "react-slick";
import Cards from './body/Cards';
import Comments from './body/Comments';
import About from './body/About';
import Services from './body/Services';
import Recruit from './body/Recruit';
import {useInViewport} from 'react-in-viewport';
import Contactez_nous from './body/Contactez_nous';

const Body = () => {

  const ref = useRef(null);
  const {enterCount} = useInViewport(ref, {rootMargin: "-200px"}, {disconnectOnLeave: false}, {});

  return (
    <>
    <ScaleFade initialScale={0.9} in={enterCount > 0}>
   <Flex
   ref={ref}
   shadow={"2xl"}
   rounded={"lg"}
   justifyContent="center"
      w={'full'}
      h={400}
      backgroundImage={
        'url(https://www.rightlookpropertymaintenance.com.au/wp-content/uploads/2017/12/whyus.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center'}>
      <VStack
        w={'full'}
      
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent, blackAlpha.600, transparent, blackAlpha.600, transparent, blackAlpha.600, transparent, blackAlpha.400, blackAlpha.700)'}>
        <Stack maxW={'700'} align={'center'} spacing={6} mt={{base: '1', sm: '6', md: '10', lg: '20'}}>
        <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '6xl', md: '4xl' })}>
            DWYRTY SERVICES
          </Text>
          <Text
            color={'white'}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Votre spécialiste du service à domicile
          </Text>
          <Stack direction={'row'}>
          <Link href={'#idb'} color='transparent'>
            <Button
              position={"static"}
              size={'lg'}
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              EN SAVOIR PLUS
              <ChevronRightIcon w={12} h={12}/>
            </Button>
            </Link>
          </Stack>
        </Stack>

        <Stack>
        <Cards/>
        </Stack>
      </VStack>
      
    </Flex>
    </ScaleFade>
  <VStack>
      <About/>
      <Services/>
      <Recruit/>
  </VStack>
  <VStack>
      <Contactez_nous/>
      <Comments/>
  </VStack>
 
  </>
  )
}

export default Body