import { ReactElement, useContext, useRef } from 'react';
import { chakra, Box, SimpleGrid, Icon, Text, Stack, Flex, Image, Heading, Button, useColorModeValue, VisuallyHidden, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Menu } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useInViewport } from 'react-in-viewport';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './authentification/context/AuthContext';
import axios from 'axios';

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

const Header = (props) => {

  const ref = useRef(null);
  const { enterCount } = useInViewport(ref, { rootMargin: "-200px" }, { disconnectOnLeave: false }, {});
  const navigate = useNavigate()

  const { dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/auth/signout");
      localStorage.removeItem("_appSignging")
      dispatch({ type: "SIGNOUT" })
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };

  const isLogged = props.isLogged;

  return (
    <Box mt={{ base: '14', lg: '20' }} p={2} h={{ base: '', lg: 24 }} bgGradient={'linear(to-b, blackAlpha.200, whiteAlpha.700)'}>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} spacing={{ base: '6', md: '0', lg: '10' }}>
        <Flex
          ml={{ base: '8', md: '8', lg: '10' }}
          width={{ base: '40', md: '40', lg: '40' }}
          height={{ base: '16', md: '16', lg: '20' }}
          align={{ base: 'center', md: 'center', lg: 'center' }}
          justify={{ base: 'center', md: 'flex-start', lg: 'center' }}
          color={'black'}
          rounded={'full'}
        >
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'#'}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>

        </Flex>

        <Stack ml={{ base: '0', md: '0', lg: '1' }}>
          <Flex
            w={{ base: '80', md: '64', lg: '80' }}
            h={{ base: '4', md: '16', lg: '20' }}
            align={'center'}
            justify={{ base: 'center', md: 'flex-start', lg: 'center' }}
            color={'white'}
            rounded={'full'}
            bgGradient={'linear(to-b,blackAlpha.100, whiteAlpha.100, whiteAlpha.100)'}
            mb={1}>
            <Box >
              <Image src='https://freeiconshop.com/wp-content/uploads/edd/phone-solid.png' width={4} height={4} >
              </Image>
              <Text letterSpacing={3} fontSize='sm' color={'#524A4E'} >
                +216 20 632 249
              </Text>
              <Text letterSpacing={1} color='blackAlpha.700' fontSize='xs' >
                Du lundi au vendredi de 8h à 18h.
              </Text>
            </Box>
            <Image src='https://icon-library.com/images/helpdesk-icon-png/helpdesk-icon-png-27.jpg' width='20' height='20'></Image>

          </Flex>
        </Stack>
        <Stack ml={{ md: '4' }}>
          <Flex
            w={{ base: 80, md: '64', lg: '80' }}
            h={{ base: '10', md: '14', lg: '16' }}
            align={'center'}
            color={'white'}
            rounded={'full'}
            mb={1}>
            {isLogged ?
              <Button onClick={handleClick}
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
                Déconnexion
              </Button>
              : <>
                <Button
                  onClick={() => navigate('/login')}
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
                  onClick={() => navigate('/login')}
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
              </>
            }
          </Flex>
        </Stack>
      </SimpleGrid>
    </Box>
  )
}

export default Header