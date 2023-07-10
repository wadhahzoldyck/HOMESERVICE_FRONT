import React, { useEffect, useRef, useState } from 'react';
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
  Center,
  keyframes,
  SlideFade,
  ScaleFadem,
  useBreakpointValue,
  VStack,
  ScaleFade,
  Input,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FcElectricity } from 'react-icons/fc';
import {
  GiWaterDrop,
  GiElectric,
  GiWateringCan,
  GiVacuumCleaner,
} from 'react-icons/gi';
import { BiBluetooth } from 'react-icons/bi';
import { useInViewport } from 'react-in-viewport';
import axios from 'axios';
import { ImSearch } from 'react-icons/im';
import { isEmpty } from '../authentification/helper/validate';

const AllServices = () => {
  const pulseRing = keyframes`
	0% { transform: scale(0.33); } 40%,50% { opacity: 0;}
    100% {opacity: 0;}`;
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: '-200px' },
    { disconnectOnLeave: false },
    {}
  );
  const [service, setService] = useState();
  const [query, setQuery] = useState('');
  const [data, setData] = useState();

  const getServices = async () => {
    await axios.get('/services').then(res => {
      setService(res.data);
    });
  };
  useEffect(() => {
    getServices();
  }, []);

  useEffect(() => {
    const filterServices = async () => {
      if (!isEmpty(query)) {
        const res = await axios.get(`http://localhost:3001/search/${query}`);
        setData(res.data);
      } else {
        setData();
      }
    };
    filterServices();
  }, [query]);
  console.log(data);
  //   useEffect(() => {
  //     const fetchService = async () => {
  //         const res = axios.get("/search/:key")
  //     }
  //   },[]);
  return (
    <>
      <Flex
        w={'full'}
        h={'60vh'}
        backgroundImage={
          'url(https://media.istockphoto.com/photos/repairman-in-uniform-installing-the-outside-unit-of-air-conditioner-picture-id1303189903?b=1&k=20&m=1303189903&s=170667a&w=0&h=nbAfqp56SNxBWlWjuknQ2jOP2chMyPzeFvCsTpkNWeI=)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '3xl' })}
            >
              Services
              <Divider orientation="horizontal" color="white" />
            </Text>
            {/* <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: 'xl' })}>
             Home  <BsChevronRight/> <BsChevronRight/>  Services 
          </Text> */}
          </Stack>
        </VStack>
      </Flex>
      <Container maxW={'full'} py={{ base: '2', md: '4', lg: '4' }}>
        <Stack
          p={{ base: '2', md: '8', lg: '8' }}
          spacing={{ base: '1', md: '2', lg: '2' }}
        >
          <Input
            placeholder="Rechercher Service"
            onChange={e => setQuery(e.target.value)}
          />

          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Nos services
          </Text>
          <Divider orientation="horizontal" />
          <Box
            rounded="md"
            h={{ base: '', lg: '400' }}
            p={{ base: '2', md: '8', lg: '8' }}
            spacing={{ base: '1', md: '2', lg: '2' }}
          >
            <Heading p={2} size={'md'}>
              Demander un service ?
            </Heading>
            <Text p={2} fontSize={'md'} letterSpacing={1}>
              Quand vous demandez un service d'urgence pour la réparation ou
              l'installation, faites appel à DaryDar qui vous offre les
              meilleurs techniciens pour la réparation de votre chasse,
              chaudière, réparation de masse électrique et maintenance de
              climatiseur
            </Text>
            <SimpleGrid
              ref={ref}
              p={4}
              columns={{ base: '1', md: '4', lg: '4' }}
              spacing={{ base: '1', md: '2', lg: '2' }}
            >
              {data !== undefined
                ? data.map(ser => {
                    return (
                      <ScaleFade
                        initialScale={0.9}
                        in={inViewport}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Box
                          position={'static'}
                          ml={{ base: '6', md: '2', lg: '1' }}
                          bg={'transparent'}
                          rounded="lg"
                          shadow="2xl"
                          width={{ base: '64', md: '32', lg: '64' }}
                          height={{ base: '24', md: '24', lg: '40' }}
                        >
                          <Button
                            position={'static'}
                            bg="transparent"
                            width={{ base: '64', md: '32', lg: '64' }}
                            height={{ base: '24', md: '24', lg: '40' }}
                            borderBottom="2px"
                            borderColor={ser.cardColor}
                            display={'block'}
                            fontSize={{ base: '8', md: '12', lg: '14' }}
                            fontWeight={600}
                            color={ser.cardColor}
                            href={'#'}
                            _hover={{
                              color: 'white',
                              height: { base: '24', md: '24', lg: '44' },
                              width: { base: '64', md: '32', lg: '72' },
                              backgroundImage:
                                "url('https://img.freepik.com/free-photo/handyman-with-toolbox_152404-7233.jpg?w=1060')",
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                            }}
                          >
                            <Center>
                              <GiWaterDrop size={40} />
                            </Center>
                            <Center>
                              <Box
                                as="div"
                                position="relative"
                                w={'4'}
                                h={'4'}
                                _before={{
                                  content: "''",
                                  position: 'relative',
                                  display: 'block',
                                  width: '300%',
                                  height: '300%',
                                  boxSizing: 'border-box',
                                  marginLeft: '-100%',
                                  marginTop: '-100%',
                                  borderRadius: '50%',
                                  bgColor: ser.cardColor,
                                  animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                                }}
                              ></Box>
                            </Center>
                            <Text as="kbd">{ser.name}</Text>
                          </Button>
                        </Box>
                      </ScaleFade>
                    );
                  })
                : service?.map(s => {
                    return (
                      <ScaleFade
                        initialScale={0.9}
                        in={inViewport}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Box
                          position={'static'}
                          ml={{ base: '6', md: '2', lg: '1' }}
                          bg={'transparent'}
                          rounded="lg"
                          shadow="2xl"
                          width={{ base: '64', md: '32', lg: '64' }}
                          height={{ base: '24', md: '24', lg: '40' }}
                        >
                          <Button
                            position={'static'}
                            bg="transparent"
                            width={{ base: '64', md: '32', lg: '64' }}
                            height={{ base: '24', md: '24', lg: '40' }}
                            borderBottom="2px"
                            borderColor={s.cardColor}
                            display={'block'}
                            fontSize={{ base: '8', md: '12', lg: '14' }}
                            fontWeight={600}
                            color={s.cardColor}
                            href={'#'}
                            _hover={{
                              color: 'white',
                              height: { base: '24', md: '24', lg: '44' },
                              width: { base: '64', md: '32', lg: '72' },
                              backgroundImage:
                                "url('https://img.freepik.com/free-photo/handyman-with-toolbox_152404-7233.jpg?w=1060')",
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                            }}
                          >
                            <Center>
                              <GiWaterDrop size={40} />
                            </Center>
                            <Center>
                              <Box
                                as="div"
                                position="relative"
                                w={'4'}
                                h={'4'}
                                _before={{
                                  content: "''",
                                  position: 'relative',
                                  display: 'block',
                                  width: '300%',
                                  height: '300%',
                                  boxSizing: 'border-box',
                                  marginLeft: '-100%',
                                  marginTop: '-100%',
                                  borderRadius: '50%',
                                  bgColor: s.cardColor,
                                  animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                                }}
                              ></Box>
                            </Center>
                            <Text as="kbd">{s.name}</Text>
                          </Button>
                        </Box>
                      </ScaleFade>
                    );
                  })}

              {/* <ScaleFade
                initialScale={0.9}
                in={inViewport}
                whileHover={{ scale: 1.1 }}
              >
                <Box
                  position={'static'}
                  ml={{ base: '6', md: '2', lg: '1' }}
                  bg={'transparent'}
                  rounded="lg"
                  shadow="2xl"
                  width={{ base: '64', md: '32', lg: '64' }}
                  height={{ base: '24', md: '24', lg: '40' }}
                >
                  <Button
                    position={'static'}
                    bg="transparent"
                    width={{ base: '64', md: '32', lg: '64' }}
                    height={{ base: '24', md: '24', lg: '40' }}
                    borderBottom="2px"
                    borderColor={'yellow.400'}
                    display={'block'}
                    fontSize={{ base: '8', md: '12', lg: '14' }}
                    fontWeight={600}
                    color={'yellow.400'}
                    href={'#'}
                    _hover={{
                      color: 'white',
                      height: { base: '24', md: '24', lg: '44' },
                      width: { base: '64', md: '32', lg: '72' },
                      backgroundImage:
                        "url('https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-16352.jpg?t=st=1647360140~exp=1647360740~hmac=3f862eb4103a43bd689d209d4d8329f989f6971b58cb45b1b6525279c3de261f&w=1060')",
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <Center>
                      <GiElectric size={40} />
                    </Center>
                    <Center>
                      <Box
                        as="div"
                        position="relative"
                        w={'4'}
                        h={'4'}
                        _before={{
                          content: "''",
                          position: 'relative',
                          display: 'block',
                          width: '300%',
                          height: '300%',
                          boxSizing: 'border-box',
                          marginLeft: '-100%',
                          marginTop: '-100%',
                          borderRadius: '50%',
                          bgColor: 'yellow.400',
                          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                        }}
                      ></Box>
                    </Center>
                    <Text as="kbd">Electricité</Text>
                  </Button>
                </Box>
              </ScaleFade> */}
              {/* <ScaleFade
                initialScale={0.9}
                in={inViewport}
                whileHover={{ scale: 1.1 }}
              >
                <Box
                  position={'static'}
                  ml={{ base: '6', md: '2', lg: '1' }}
                  bg={'transparent'}
                  rounded="lg"
                  shadow="2xl"
                  width={{ base: '64', md: '32', lg: '64' }}
                  height={{ base: '24', md: '24', lg: '40' }}
                >
                  <Button
                    position={'static'}
                    bg="transparent"
                    width={{ base: '64', md: '32', lg: '64' }}
                    height={{ base: '24', md: '24', lg: '40' }}
                    borderBottom="2px"
                    borderColor={'green.400'}
                    display={'block'}
                    fontSize={{ base: '8', md: '12', lg: '14' }}
                    fontWeight={600}
                    color={'green.400'}
                    href={'#'}
                    _hover={{
                      color: 'white',
                      height: { base: '24', md: '24', lg: '44' },
                      width: { base: '64', md: '32', lg: '72' },
                      backgroundImage:
                        "url('https://img.freepik.com/free-vector/gardening-icons-collection_1324-47.jpg?t=st=1647361096~exp=1647361696~hmac=803e75c75a598fb9e4bdbd4179510e327e9961d3ad46c5fefa0af41386dcbbbe&w=996')",
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <Center>
                      <GiWateringCan size={40} />
                    </Center>
                    <Center>
                      <Box
                        as="div"
                        position="relative"
                        w={'4'}
                        h={'4'}
                        _before={{
                          content: "''",
                          position: 'relative',
                          display: 'block',
                          width: '300%',
                          height: '300%',
                          boxSizing: 'border-box',
                          marginLeft: '-100%',
                          marginTop: '-100%',
                          borderRadius: '50%',
                          bgColor: 'green.400',
                          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                        }}
                      ></Box>
                    </Center>
                    <Text as="kbd">Jardinage</Text>
                  </Button>
                </Box>
              </ScaleFade> */}
              {/* <ScaleFade
                initialScale={0.9}
                in={inViewport}
                whileHover={{ scale: 1.1 }}
              >
                <Box
                  position={'static'}
                  ml={{ base: '6', md: '2', lg: '1' }}
                  bg={'transparent'}
                  rounded="lg"
                  shadow="2xl"
                  width={{ base: '64', md: '32', lg: '64' }}
                  height={{ base: '24', md: '24', lg: '40' }}
                >
                  <Button
                    position={'static'}
                    bg="transparent"
                    width={{ base: '64', md: '32', lg: '64' }}
                    height={{ base: '24', md: '24', lg: '40' }}
                    borderBottom="2px"
                    borderColor={'pink.400'}
                    display={'block'}
                    fontSize={{ base: '8', md: '12', lg: '14' }}
                    fontWeight={600}
                    color={'pink.400'}
                    href={'#'}
                    _hover={{
                      color: 'white',
                      height: { base: '24', md: '24', lg: '44' },
                      width: { base: '64', md: '32', lg: '72' },
                      backgroundImage:
                        "url('https://img.freepik.com/free-photo/young-housewife-is-wearing-yellow-gloves-while-cleaning-with-product-clean-white-wall_1150-21781.jpg?t=st=1647370975~exp=1647371575~hmac=85b8c4f111398651f26156327e3ee19bb9298310d9586c83cfe2a478d34c1af2&w=1060')",
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }}
                  >
                    <Center>
                      <GiVacuumCleaner size={40} />
                    </Center>
                    <Center>
                      <Box
                        as="div"
                        position="relative"
                        w={'4'}
                        h={'4'}
                        _before={{
                          content: "''",
                          position: 'relative',
                          display: 'block',
                          width: '300%',
                          height: '300%',
                          boxSizing: 'border-box',
                          marginLeft: '-100%',
                          marginTop: '-100%',
                          borderRadius: '50%',
                          bgColor: 'pink.400',
                          animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
                        }}
                      ></Box>
                    </Center>
                    <Text as="kbd">Ménaage à domicile</Text>
                  </Button>
                </Box>
              </ScaleFade> */}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default AllServices;
