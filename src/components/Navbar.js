import React, { useRef } from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Image,
  useColorMode,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
} from '@chakra-ui/icons';

import Logo from './Logo.png';
import navStyles from './navbar.module.css';
import {useInViewport} from 'react-in-viewport';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure();
  const ref = useRef(null);
  
  const {enterCount} = useInViewport(ref, {rootMargin: "-200px"}, {disconnectOnLeave: false}, {});

  return (
    <Box  shadow={"2xl"} position="fixed"
     ml={{base:'', lg:'48'}} top={{base:'0', lg:'4'}} rounded="full"
     bgGradient={"linear(to-r,whiteAlpha.800,whiteAlpha.200)"}
     >
      <Flex
        id='navbar'
        bgGradient={"linear(to-r,whiteAlpha.800,whiteAlpha.200)"}
        position="fixed"
        rounded="full"
        color={useColorModeValue('gray.600', 'white')}
        minH={''}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        _hover={{
            bg:'white'
           }}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
         
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
            <img src={Logo} width={80}></img>
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={{md:'', lg:10}} mt={1}>
         <Image src={Logo} w={130}></Image>
            <DesktopNav />
           
          </Flex>
          {/*search bar */}
          <Flex  ml={10} >
          <Button
           
           fontSize={'lg'}
           fontWeight={600}
           color={'#d23529'}
           border="2px"
           borderColor={"#d23529"}
           bg={'white'}
           href={'#'}
           _hover={{
            bg:'#d23529',
             color:'white'
           }}>
           Rectrutement
         </Button>
         <Button  onClick={toggleColorMode} bg={"transparent"}>
          <MoonIcon w={4} h={4}/>
         </Button>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "black";
  const linkHoverColor = "blackAlpha.500";
  const popoverContentBgColor = useColorModeValue('white', 'blackAlpha.400');

  return (
    <Stack direction={'row'} spacing={1} ml={20} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration:'',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {

  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate('/service', {state:{id: label}})}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      bg="white"
      _hover={{ bg: useColorModeValue('blackAlpha.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.600' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'red.600'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Button>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS= [
  {
    label: 'Accueil',
    href: '/',
  },
  {
    label: 'Qui somme nous ?',
    href: '/#quisommenous',
  },
  {
    label: 'Nos services',
    children: [
      {
        label: 'Electricité',
        href: '/service/1',
      },
      {
        label: 'Plomberie',
        href: '/service/2',
      },
      {
        label: 'Ménage à domicile',
        href: '/service/3',
      },
      {
        label: 'jardinage',
        href: '/service/4',
      },
      {
        label: "Garde d'enfant",
        href: '/service/5',
      },
      {
        label: "Tous nos services",
        href: '/AllServices',
      },
    ],
  },
  {
    label: "Contactez nous ",
    href: '#',
  },
];

export default Navbar