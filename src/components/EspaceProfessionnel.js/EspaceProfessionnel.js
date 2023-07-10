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
import { FcCalendar } from 'react-icons/fc'
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import axios from 'axios';
import { Navigate, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authentification/context/AuthContext';
import DemandePublic from './sidebarContent/DemandePublic';
import DemandePrive from './sidebarContent/DemandePrive';
import Profile from './sidebarContent/Profile';
import EventCalendar from '../calendar/Calendar'
import Deleteevent from '../calendar/DeleteEventModal';


const EspaceProfessionnel = ({ children }) => {

  const {state} = useLocation()
  const [component, setComponent] = useState("Actualité");
  const navigate = useNavigate()
  if(state?.id && component!==state?.id)
  {
    setComponent(state?.id)
  }
  console.log("State : ", state?.id);
  console.log("component : ", component);

  return (
    <Box minH="80" bgGradient={"linear(to-b, blackAlpha.50, white)"}>
      
      {component === "Actualité" ?
        <DemandePublic />
        : component === "Demande privé" ?
          <DemandePrive />
          : component === "Profile" ?
            <Profile />
            : component === "Calendrier" ?
            <Stack p={36}>
            <Stack w={'full'} h={20}>
            <Heading alignSelf={'center'}>Mon Calendrier</Heading>
            </Stack>
            <EventCalendar />
            </Stack>
              :  component === "Supprimer évènement" ?
              <Deleteevent />
              :""}
      
    </Box>
  )
}

export default EspaceProfessionnel



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