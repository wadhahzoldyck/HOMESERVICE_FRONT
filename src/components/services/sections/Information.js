import React, { useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  ScaleFade,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useBreakpointValue,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
  Icon,

} from '@chakra-ui/react';
import { AddIcon, CheckIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useInViewport } from 'react-in-viewport';
import FormDemandeServcie from './FormDemandeServcie';
import Sous_Service from './Sous_Service';

const Information = (props) => {

  const ref = useRef(null);
  const { enterCount } = useInViewport(ref, { rootMargin: "-200px" }, { disconnectOnLeave: false }, {});

  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
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

  return (
    <>
    <Container bgGradient='linear(to-b,blackAlpha.100,whiteAlpha.100)' maxW={'full'} px={{ base: '2', md: '4', lg: '8' }} >
      <SimpleGrid h={{ base: '', md: '', lg: '' }} columns={{ base: 1, md: 1, lg: '2' }} spacing={{ base: '1', md: '2', lg: '2' }}
        rounded='sm'>
        <ScaleFade initialScale={0.9} in={enterCount > 0}>
          <Stack ref={ref} h={{ base: '', md: '', lg: '' }} p={{ base: '2', md: '10', lg: '10' }}
           spacing={{ base: '1', md: '2', lg: '2' }} >
            <Text
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
            <Divider orientation='horizontal' position={"static"} />
            <Box p={{ base: '2', md: '8', lg: '8' }} spacing={{ base: '1', md: '2', lg: '2' }} >
              <Heading size='lg'> {props.NameService} </Heading>
              <Text p={2} fontSize={'md'} letterSpacing={1} >
                <br />
                {props.desc}
              </Text>
            </Box>
            <Stack
              h={{ base: '', lg: '' }}
              px={{ base: '2', md: '8', lg: '20' }} spacing={{ base: '1', md: '3', lg: '3' }}
              alignItems={'self-start'}
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
          </Stack>
        </ScaleFade>
        <Stack h={{ base: '', md: '', lg: '' }} p={{ base: '2', md: '10', lg: '10' }} spacing={{ base: '1', md: '2', lg: '2' }}>
          <FormDemandeServcie service = {props.NameService} isLogged = {props.isLogged} User = {props.User}/>
        </Stack>
      </SimpleGrid>
      <Stack
       divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }
      >
      </Stack>
    </Container>
    <Sous_Service nameServ={props.NameService} imgc = {props.imgc}/>
    </>
  );
};

export default Information;
