import { CheckIcon } from '@chakra-ui/icons'
import { Box,
  SimpleGrid,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  StackDivider,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  DrawerFooter,
  InputRightAddon,
  useDisclosure, 
  Divider} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sous_Service = (props) => {

  const [SousService, setSousService] = useState();
  let { name, imgcard, description } = ""

  const getSousService = async () => {
    await axios.get("http://localhost:3001/sous_service").then(
      (res) => {
        setSousService(res.data)
      }
    )
  }

  useEffect(() => {
    getSousService()
  },
    []
  )


  const navigate = useNavigate()
  return (
    <Stack
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      h={''} >
      <Stack bgGradient='linear(to-l, transparent , whiteAlpha.800 , whiteAlpha.800, whiteAlpha.900)' >
        <Text
        ml={10}
        mb={2}
          w={"40"}
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={600}
          fontSize={'sm'}
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}>
          Nos services ?
        </Text>
        <Divider
          borderColor={useColorModeValue('gray.100', 'gray.700')}
        />

        <SimpleGrid columns={{ base: 2, md: 3, lg: '4' }} spacing={{ base: '1', md: '2', lg: '2' }} p={{ base: '2', md: '8', lg: '8' }}
          h={''}>

          {SousService !== undefined &&
            SousService.map((sous) => {
              if (sous.service.name === props.nameServ) {
                name = sous.name;
                imgcard = sous.imageCard;
                description = sous.description;
                return (
                  <Box
                  key={sous._id}
                    position={"static"}
                    ml={{ base: '1', md: '2', lg: '2' }}
                    bg={'white'}
                    rounded="lg"
                    shadow="2xl"
                    width={{ base: '40', md: '32', lg: '60' }}
                    height={{ base: '24', md: '24', lg: '40' }}
                  >
                    <Button
                      position={"static"}
                      bg={sous.colorCard}
                      width={{ base: '40', md: '32', lg: '60' }}
                      height={{ base: '24', md: '24', lg: '40' }}
                      borderBottom='2px'
                      borderColor={'white'}
                      display={'block'}
                      fontSize={{ base: '8', md: '12', lg: '14' }}
                      fontWeight={600}
                      color={'black'}
                      href={'#'}
                      _hover={{
                        color: 'white',
                        backgroundImage: "url('https://img.freepik.com/free-photo/handyman-with-toolbox_152404-7233.jpg?w=1060')",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                      }}
                    >
                      <Text as="kbd"
                      >{name}</Text>
                    </Button>
                  </Box>

                )
              }
            })
          }
        </SimpleGrid>
        <Stack bgGradient='linear(to-b,whiteAlpha.100,blackAlpha.100,whiteAlpha.100)' shadow={'md'} rounded='md' h={{ base: '', md: '', lg: '' }} w={{ base: '', md: '', lg: '' }}
      p={{ base: '2', md: '8', lg: '8' }} spacing={{ base: '1', md: '2', lg: '2' }} alignItems={'center'}
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
        Questions les plus posées
      </Text>
      <Accordion allowToggle>
        <AccordionItem mt={2}>
          <h2>
            <AccordionButton _expanded={{ bg: 'blue.50', color: 'blue.400' }} color={'blackAlpha.800'} bgGradient='linear(to-r,blackAlpha.50,whiteAlpha.100)' rounded={"md"}>
              <Box flex='1' textAlign='left' w={{ base: '', md: '', lg: '2xl' }} >
                Question 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={2}>
          <h2>
            <AccordionButton _expanded={{ bg: 'blue.50', color: 'blue.400' }} color={'blackAlpha.800'} bgGradient='linear(to-r,blackAlpha.50,whiteAlpha.100)' rounded={"md"}>
              <Box flex='1' textAlign='left'>
                Question 2
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={2}>
          <h2>
            <AccordionButton _expanded={{ bg: 'blue.50', color: 'blue.400' }} color={'blackAlpha.800'} bgGradient='linear(to-r,blackAlpha.50,whiteAlpha.100)' rounded={"md"}>
              <Box flex='1' textAlign='left'>
                Question 3
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <>
        <Button
          onClick={() => navigate('/service')}
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
            borderColor: 'white'
          }}>
          Demander un service
        </Button>
      </>
    </Stack>
      </Stack>
    </Stack>
  )
}

export default Sous_Service