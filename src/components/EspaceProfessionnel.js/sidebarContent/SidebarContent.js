import { Box, CloseButton, Flex, Icon, IconButton, Image, useColorModeValue, useDisclosure, Drawer,
  DrawerContent, } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { FiCompass, FiHome, FiMenu, FiSettings, FiTrendingUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authentification/context/AuthContext';
import { FcCalendar } from 'react-icons/fc'
import { CalendarIcon } from '@chakra-ui/icons'

const LinkItems = [
  { name: 'Actualité', icon: FiTrendingUp, path: "/espaceProfessionnel" },
  { name: 'Demande privé', icon: FiCompass, path: "/demandePrive" },
  { name: 'Calendrier', icon: FcCalendar, path: "/calendar" },
  { name: 'Supprimer évènement', icon: CalendarIcon, path: "/calendar" },
  ];

const SidebarContent = ({ onClose, ...rest}) => {

  const { isOpen, onOpen } = useDisclosure();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
  
    return (
      <Box
      display={{ base: 'none', md: 'block' }}
      rounded={"2xl"}
      shadow={"2xl"}
      transition="1s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60, lg: '20' }}
      pos="fixed"
      h="340"
      _hover={{
        width: '60'
      }}>
      <Image
        transition="1s ease"
        onClick={() => navigate('/espaceProfessionnel', {state:{id: "Profile"}})}
        alignSelf="flex-end"
        p={2}
        src={user.avatar} borderRadius='full' boxSize={24}
        _hover={{
          boxShadow: '2xl',
          ml: 8
        }}
      />
      {LinkItems.map((link) => (
        <Flex
          key={link.name}
          onClick={() => navigate('/espaceProfessionnel', {state:{id: link.name}})}
          fontSize={{ base: '', md: '', lg: '1' }}
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'blue.300',
            color: 'white',
            fontSize: { base: '', md: '', lg: '16' }
          }}>
          {link.icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={link.icon}
            />
          )}
          {link.name}
        </Flex>
      ))}
      <Flex w="full" alignItems="" mx="8" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <Box
            display={{ base: 'none', md: 'block' }}
            rounded={"2xl"}
            shadow={"2xl"}
            transition="1s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60, lg: '20' }}
            pos="fixed"
            h="340"
            _hover={{
              width: '40'
            }}>
            <Image
              onClick={() => navigate('/espaceProfessionnel', {state:{id: "Profile"}})}
              align="center"
              p="4"
              src={user.avatar} borderRadius='full' boxSize={24} mr={4}
              _hover={{ boxShadow: '2xl' }}
            />
            {LinkItems.map((link) => (
              <Flex
                key={link.name}
                onClick={() => navigate('/espaceProfessionnel', {state:{id: link.name}})}
                fontSize={{ base: '', md: '', lg: '1' }}
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: 'blackAlpha.300',
                  color: 'white',
                  fontSize: { base: '', md: '', lg: '16' }
                }}>
                {link.icon && (
                  <Icon
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                      color: 'white',
                    }}
                    as={link.icon}
                  />
                )}
                {link.name}
              </Flex>
            ))}
            <Flex w="full" alignItems="" mx="8" justifyContent="space-between">
              <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
          </Box>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />

    </Box>
    );
  };
  

export default SidebarContent
  
  
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