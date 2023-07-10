import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, FormControl, Heading, Input, Stack } from '@chakra-ui/react';

const AddEventModal = props => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = event => {
    event.preventDefault();

    props.onEventAdded({
      title,
      start,
      end,
    });
    props.onClose();
  };

  return (
    <Drawer placement='right' onClose={props.onClose} isOpen={props.isOpen} size='sm' >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Ajouter un évènement</DrawerHeader>
          <DrawerBody>
          <form onSubmit={onSubmit}>
          <Stack spacing={10}>
        <Input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Flex >
          <Heading alignSelf={"flex-start"} size={"sm"}>Start Date</Heading>
          <Box ml={20} alignSelf={"flex-end"}>
          <Datetime value={start} onChange={date => setStart(date)} />
          </Box>
        </Flex>
        <Flex>
          <Heading size={"sm"}>End Date</Heading>
          <Box ml={20} alignSelf={"flex-end"}>
          <Datetime value={end} onChange={date => setEnd(date)} />
          </Box>
        </Flex>

        <Button
          /* flex={1} */
          type="submit"
          px={4}
          fontSize={'sm'}
          rounded={'md'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          marginLeft={10}
        >
          Ajouter
        </Button>
        </Stack>
      </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    /* <Modal isOpen={props.isOpen} onRequestClose={props.onClose}>
      
      
    </Modal> */
  );
};

export default AddEventModal;
