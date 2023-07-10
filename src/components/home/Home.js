import React, { useContext } from 'react'
import {
    VStack,
    Flex,
    Heading,
    Image,
    Text,
    Box,
    Stack,
    Button,
    useDisclosure
  } from '@chakra-ui/react';

import {Body,Header,Navbar,Footer} from '../';
import { withTheme } from '@emotion/react';
import SidebarContent from '../EspaceProfessionnel.js/sidebarContent/SidebarContent';
import { AuthContext } from '../authentification/context/AuthContext';




const Home = () => {
  
  return (
      <>
    <Stack>
    <Body/>
    </Stack>
    </>
  )
}

export default Home