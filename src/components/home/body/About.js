import React, { useRef } from 'react'
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Button,
  useColorModeValue,
  AspectRatio,
  Divider,
  Box,
  ScaleFade,
} from '@chakra-ui/react';
import { ArrowRightIcon, CheckIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { ReactElement } from 'react';
import {useInViewport} from 'react-in-viewport';

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const About = () => {
  const ref = useRef(null);
  const {enterCount} = useInViewport(ref, {rootMargin: "-200px"}, {disconnectOnLeave: false}, {});

  return (
    <Container   bgGradient='linear(to-t,blackAlpha.100,whiteAlpha.100)' maxW={'full'} py={{base:'2', md:'4', lg:'4'}} >
      <SimpleGrid h={{base:'', md:'', lg:'540'}}  columns={{ base: 1, md: 1,lg:'2' }} spacing={{base:'1', md:'2', lg:'2'}}
       shadow='md' rounded='md'>
       <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Stack mt={10} h={{base:'', md:'', lg:'380'}}  p={{base:'2', md:'10', lg:'10'}} spacing={{base:'1', md:'2', lg:'2'}} 
        >
          <Text
          id='quisommenous'
            position={"static"}
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Qui somme nous ?
          </Text>
          <Divider orientation='horizontal'  position={"static"} />
          <Box id='idb' rounded='md' h={{base:'', md:'', lg:'360'}} p={{base:'2', md:'8', lg:'8'}} spacing={{base:'1', md:'2', lg:'2'}}>
          <Heading size='xl'>CHEZ DWYRTY SERVICES</Heading>
          <Text p={2} fontSize={'md'} letterSpacing={1} >
            Nous allégeons votre quotidien ou celui de vos proches grâce à un service d’aide à domicile de qualité.

            Soucieux de satisfaire nos clients, notre démarche qualité répond à plusieurs référentiels exigeants comme NF Service.
            <br/>
            Quelle que soit la prestation, nous mettons à votre disposition des intervenants en service à la personne compétents et à l’écoute de vos besoins.

            Nous intervenons en services à domicile dans toutes la Tunisie.

          </Text>
          <Stack mt={2} w="full">
           <Button
          ref={ref}
            position={"static"}
            mt={1}
         border="2px"
         borderColor={"blue.400"}
          letterSpacing={2}
          alignSelf={'center'}
          size={'lg'}
          width={'80'}
          bg={'blue.400'}
          rounded={'full'}
          color={'white'}
          _hover={{
            bg: 'blackAlpha.100',
            color: 'white',
            borderColor:'white'
          }}>
            EN SAVOIR PLUS
            <ChevronRightIcon w={12} h={12} />
           </Button>
          </Stack>
          </Box>
        </Stack>
        </ScaleFade>
        <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Stack
        mt={10}
         
          h={{base:'', lg:'400'}}
          p={{base:'2', md:'10', lg:'10'}}
          spacing={{base:'1', md:'2', lg:'2'}}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
           <Text
           position={"center"}
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Pourquoi nous ?
          </Text>
          <Box boxShadow='2xl' rounded='md'  w={{base:'',md:'824', lg:'820'}} h={{base:'', md:'380', lg:'320'}} mt={8}>
          <SimpleGrid columns={{base: 1, md: 2, lg:2}}>
          <Stack 
          h={{base:'200', md:'380', lg:'320'}}
          backgroundImage={"https://media.istockphoto.com/photos/house-enlargement-works-picture-id1250496484?k=20&m=1250496484&s=612x612&w=0&h=qP2TUIw2VkcyQJjEEdWHXo0-4XJ652TONvTBValO73U="}
          backgroundSize="cover"
          backgroundPosition={"center"}
          backgroundRepeat={"no-repeat"}
          >
          
          </Stack>
          
          <Stack
          h={{base:'', lg:'320'}}
          p={{base:'2', md:'8', lg:'8'}} spacing={{base:'1', md:'3', lg:'3'}}
         divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Heading size='md'>ON VOUS ASSURE</Heading>
          <Feature
           text={'Sécurité'}
           icon={
    <Icon as={CheckIcon} color={'blue.400'} w={5} h={5} />
  }
/>

<Feature

icon={
    <Icon as={CheckIcon} color={'blue.400'} w={5} h={5} />
  }
text={'Transparence'}
/>
<Feature
icon={
    <Icon as={CheckIcon} color={'blue.400'} w={5} h={5} />
  }
text={'Réactivité'}
/>
<Feature
icon={
    <Icon as={CheckIcon} color={'blue.400'} w={5} h={5} />
  }
text={'Qualité'}
/>
          </Stack>
          
          </SimpleGrid>
          </Box>
         
        </Stack>
        </ScaleFade>
      </SimpleGrid>
      <ScaleFade initialScale={0.9} in={enterCount > 0}>
        <Stack  p={{base:'2', md:'8', lg:'8'}} spacing={{base:'1', md:'2', lg:'2'}} w={{base:'', md:'602', lg:'full'}}>
          <Text
          id='ccm'
          ml={{base:'', lg:'52'}}
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Comment ça marche ?
          </Text>
          <Divider orientation='horizontal'   ml={{base:'', lg:'52'}} /> 

          <Stack  p={{base:'2', md:'8', lg:'20'}} spacing={{base:'1', md:'2', lg:'2'}} w={{base:'', md:'602', lg:'full'}}>
           This video will have equal sides
           <AspectRatio ratio={20 / 9} p={{base:'2', md:'8', lg:'8'}} spacing={{base:'1', md:'2', lg:'2'}} w={{base:'', md:'602', lg:'full'}} alignSelf="center">
           <iframe width="992" height="558" src="https://www.youtube.com/embed/grbVzYIMLaQ" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>
           </AspectRatio>
           </Stack>
         

        </Stack>

      </ScaleFade>
    </Container>
  )
}

export default About