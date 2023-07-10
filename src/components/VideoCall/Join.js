import React, { useState } from 'react';
import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
} from '@chakra-ui/react';

export default function JoinRoom() {
  const [room, setRoom] = useState(null);

  const onSubmit = () => {
    window.location.assign(`/video/${room}`);
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      py={12}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        boxShadow={'2xl'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        p={10}
        spacing={8}
        align={'center'}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://images.idgesg.net/images/article/2020/04/video_conferencing_remote_work_online_meeting_by_rlt_images_gettyimages-1219032156_2400x1600_cw-100839430-large.jpg?auto=webp&quality=85,70"
          alt="Dan Abramov"
        />
        <Stack align={'center'} spacing={2}>
          <Heading
            textTransform={'uppercase'}
            fontSize={'3xl'}
            color={useColorModeValue('gray.800', 'gray.200')}
          >
            Join Online meeting
          </Heading>
          <Text fontSize={'lg'} color={'gray.500'}>
            Vous devez entrer le code (ID) pour rejoindre.
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w={'full'}>
          <Input
            onChange={e => setRoom(e.target.value)}
            type={'text'}
            placeholder={'Code(ID)'}
            color={useColorModeValue('gray.800', 'gray.200')}
            bg={useColorModeValue('gray.100', 'gray.600')}
            rounded={'full'}
            border={0}
            _focus={{
              bg: useColorModeValue('gray.200', 'gray.800'),
              outline: 'none',
            }}
          />
          <Button
            onClick={onSubmit}
            bg={'blue.400'}
            rounded={'full'}
            color={'white'}
            flex={'1 0 auto'}
            _hover={{ bg: 'blue.500' }}
            _focus={{ bg: 'blue.500' }}
          >
            Join
          </Button>
        </Stack>
      </Stack>
    </Flex>
    // <div>
    //   <input type="text" onChange={(e) => setRoom(e.target.value)} />
    //   <button onClick={onSubmit}>Submit</button>
    // </div>
  );
}
