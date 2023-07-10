import React, { ReactNode, useContext, useEffect, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Container,
  Stack,
  SimpleGrid,
  Heading,
  Button,
  useRadio,
  Image,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import {FcCalendar} from 'react-icons/fc'
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authentification/context/AuthContext';
import { useLocation } from 'react-router-dom';
import Profile from '../authentification/Layouts/ProfileLayout/ProfileLayout';
import ClientDemandes from './sidebarContent/ClientDemandes';


const EspaceClient = ({ children }) => {

  const {state} = useLocation()
  const [component, setComponent] = useState("Mes Demandes");
  const navigate = useNavigate()
  if(component!==state?.id)
  {
    setComponent(state.id)
  }
  console.log("State : ", state.id);
  console.log("component : ", component);

  return (
    <Box minH="80" bgGradient={"linear(to-b, blackAlpha.50, white)"}>
      
      { component === "Mes Demandes" ?
          <ClientDemandes />
          : component === "Profile" ?
            <Profile/>
              : ""}
    </Box>
  )
}

export default EspaceClient



const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <IconButton
      pos={"fixed"}
      bg={"white"}
      px={{ base: "8" }}
      ml={{ base: "2" }}
      display={{ base: 'flex', md: 'none' }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<FiMenu />}
    />
  );
};