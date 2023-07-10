import React, { useState } from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { isEmpty, isEmail } from '../../authentification/helper/validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const avatars = [
  {
    name: 'Ryan Florence',
    url: 'https://bit.ly/ryan-florence',
  },
  {
    name: 'Segun Adebayo',
    url: 'https://bit.ly/sage-adebayo',
  },
  {
    name: 'Kent Dodds',
    url: 'https://bit.ly/kent-c-dodds',
  },
  {
    name: 'Prosper Otemuyiwa',
    url: 'https://bit.ly/prosper-baba',
  },
  {
    name: 'Christian Nwamba',
    url: 'https://bit.ly/code-beast',
  },
];
export const Blur = props => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#4592AF" />
      <circle cx="244" cy="106" r="139" fill="#4592AF" />
      <circle cy="291" r="139" fill="#4592AF" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#4592AF" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#4592AF" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#4592AF" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4592AF" />
    </Icon>
  );
};

const Contactez_nous = () => {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [text, setText] = useState();
  const toast = useToast();

  const sendMail = async () => {
    //Check Fields
    if (isEmpty(email) || isEmpty(subject) || isEmpty(text))
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            Please fill in all fields.
          </Box>
        ),
      });
    //Check email
    if (!isEmail(email))
      return toast({
        position: 'bottom-left',
        render: () => (
          <Box color="white" p={3} bg="red.500">
            Please enter a valid email address.
          </Box>
        ),
      });
    return await axios
      .post('http://localhost:3001/api/auth/contactus', {
        email,
        subject,
        text,
      })
      .then(res => {
        if (res.status === 200) {
          console.log('mail send !');
          // <Alert severity="success">This is a success alert — check it out!</Alert>
          toast({
            title: 'FORM SUBMIT.',
            description: 'Your Question has been submitted',
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
        } else console.log('error send mail');
      });
  };

  return (
    <Box position={'relative'} w={'full'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '4xl' }}
          >
            Vous-avez quelque chose à reporter{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, blue.400,blue.500)"
              bgClip="text"
            >
              ?
            </Text>{' '}
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map(avatar => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, blue.400,blue.200)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              width={useBreakpointValue({ base: '44px', md: '60px' })}
              height={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              VOUS
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '2xl' }}
            >
              Contactez-nous
              <Text
                as={'span'}
                bgGradient="linear(to-r, blue.400,blue.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}></Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="email@email.com"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                placeholder="Subject"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={e => setSubject(e.target.value)}
              />
              <Textarea
                placeholder="Votre message"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={e => setText(e.target.value)}
              />
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, blue.400,blue.200)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, blue.200,blue.400)',
                boxShadow: 'xl',
              }}
              onClick={() => sendMail()}
            >
              Envoyer
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
  );
};

export default Contactez_nous;
