import React from 'react'
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Flex,
    Button,
    Image,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import Logo from './Logo.png'
import { ArrowUpIcon } from '@chakra-ui/icons';
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  

const Footer = () => {
  return (
    <Box
      bgGradient={'linear(to-b, blackAlpha.200, whiteAlpha.700)'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src={Logo} width={60} />
            </Box>
            <Text fontSize={'sm'} as={'kbd'}>
              © Alfa computers. <br/> Tous les droits sont réservés <br/> <br/>
              Créateurs du site : <br/>
              Ben Ouirane Yassine <br/>
              Naggui Wadhah
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Aide</ListHeader>
            <Link href={'#quisommenous'}>Qui somme nous ?</Link>
            <Link href={'#commentçamarche'}>Comment ça marche ?</Link>
            <Link href={'#avisclient'}>Avis client</Link>
            <Link href={'#contactus'}>Contact us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Nos services</ListHeader>
            <Link href={'/service'}>Plomberie</Link>
            <Link href={'/service'}>Electricité</Link>
            <Link href={'/service'}>Ménage à domicile</Link>
            <Link href={'/service'}>Jardinage</Link>
            <Link href={'#'}>Voir tous</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Tiens-toi à jour</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Votre adresse mail'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.800',
                }}
              />
              <IconButton
                bg={'#d23529'}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'blackAlpha.200',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            <Flex
            mt={{base:'', md:'', lg:'10'}}
            w={{ base: 80, md: '64', lg: '80' }}
            h={{ base: '10', md: '14', lg: '16' }}
            align={'center'}
            color={'white'}
            rounded={'full'}
            >
            <Button
            position={'static'}
              border="2px"
              fontSize={'sm'}
              fontWeight={600}
              color={'#d23529'}
              bg={'white'}
              href={'#'}
              _hover={{
                bg: '#d23529',
                color: 'white',
              }}>
              Espace Professionnel
            </Button>
            <Box w={2}></Box>
            <Button
            position={'static'}
              border="2px"
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#d23529'}
              href={'#'}
              _hover={{
                bg: 'white',
                color: '#d23529',
              }}>
              Espace Client
            </Button>
          </Flex>
          </Stack>
        </SimpleGrid>
        <IconButton href='/#navbar' icon={<ArrowUpIcon />} color={"white"} bg={"#d23529"} alignSelf={"center"} w={8} h={8}
         rounded={"lg"} _hover={{ bg: 'blackAlpha.200'}} />
      </Container>
    </Box>
  )
}

export default Footer