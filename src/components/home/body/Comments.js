import React from 'react'
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { BsStar } from "react-icons/bs";
import { ChevronRightIcon } from '@chakra-ui/icons';

const Testimonial = ({ children }) => {
    return <Box position={'static'}>{children}</Box>;
  };

  const TestimonialContent = ({ children }) => {
    return (
      <Stack
      position={'static'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  };
  
  const TestimonialHeading = ({ children }) => {
    return (
      <Heading position={'static'} as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  };
  
  const TestimonialText = ({ children }) => {
    return (
      <Text
      position={'static'}
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'sm'}>
        {children}
      </Text>
    );
  };
  
  const TestimonialAvatar = ({
    src,
    name,
    title,
  }) => {
    return (
      <Flex position={'static'} align={'center'} mt={8} direction={'column'}>
        <Avatar position={'static'} src={src} alt={name} mb={2} />
        <Stack position={'static'} spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };

const Comments = () => {
  return (
    <Box  bgGradient={'linear(to-t, blackAlpha.200, whiteAlpha.700)'} w='100%' shadow={"xl"}> 
    <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
      <Stack spacing={0} align={'center'}>
        <Heading>Avis clients</Heading>
        <Text>La satisfaction de nos clients est notre priorité.</Text>
      </Stack>
      <Stack
      position={'static'}
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 10, md: 4, lg: 10 }}>
        <Testimonial position={'static'}>
          <TestimonialContent>
            <TestimonialHeading>Je recommande</TestimonialHeading>
            <TestimonialText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              neque sed imperdiet nibh lectus feugiat nunc sem.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            </TestimonialText>
            <Flex spacing={1}>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            </Flex>   
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
            }
            name={'Jane Cooper'}
            title={'CEO at ABC Corporation'}
          />
        </Testimonial>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Je recommande</TestimonialHeading>
            <TestimonialText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              neque sed imperdiet nibh lectus feugiat nunc sem.
            </TestimonialText>
            <Flex spacing={1}>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            </Flex> 
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
            }
            name={'Jane Cooper'}
            title={'CEO at ABC Corporation'}
          />
        </Testimonial>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Merci bien</TestimonialHeading>
            <TestimonialText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              neque sed imperdiet nibh lectus feugiat nunc sem.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              neque sed imperdiet nibh lectus feugiat nunc sem.
            </TestimonialText>
            <Flex spacing={1}>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            <BsStar size={20} color={'orange'}/>
            </Flex> 
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
            }
            name={'Jane Cooper'}
            title={'CEO at ABC Corporation'}
          />
        </Testimonial>
       
      </Stack>
      <Stack mt={10} w="full">
         <Button
         position={'static'}
          letterSpacing={2}
          alignSelf={'center'}
          size={'lg'}
          width={'80'}
          bg={'whiteAlpha.900'}
          rounded={'full'}
          color={'black'}
          _hover={{
            bg: 'blackAlpha.100',
            color: 'white'
          }}>
          Voir plus d'avis
          <ChevronRightIcon w={12} h={12} />
         </Button>
        </Stack>   
    </Container>
  </Box>
  )
}

export default Comments