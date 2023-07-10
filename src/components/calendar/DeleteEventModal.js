import React, { useContext, useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
  useColorModeValue,
  Button,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../../components/authentification/context/AuthContext';

const DeleteEventModal = () => {
  const { user, token } = useContext(AuthContext);
  const [event, setEvent] = useState();
  const toast = useToast()

  const getEvent = async () => {
    await axios
      .get(`http://localhost:3001/get-event/${user._id}`, {
        headers: { Authorization: token },
      })
      .then(res => {
        setEvent(res.data);
      });
  };
  const deleteEvent = async (id) => {
    await axios.delete(`http://localhost:3001/${id}/delete`).then(res => {
      toast({
        position: "top",
        title: "Evenement supprimer avec succés.",
        description: "",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      getEvent()
    });
  };

  useEffect(() => {
    getEvent();
  }, [user]);
  return (
    <Stack w={'full'} px={{ base: '2', md: '16', lg: '20' }}>
      <Stack w={'full'} p={{ base: '2', md: '8', lg: '8' }}>
        <Text
          id="Actualité"
          position={'static'}
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={600}
          fontSize={'sm'}
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}
        >
          Mes evénements
        </Text>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Toutes Mes évènemnts.</TableCaption>
            <Thead>
              <Tr>
                <Th>Nom évènement</Th>
                <Th>Début</Th>
                <Th>Fin</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {event !== undefined &&
                event.map(event => {
                  return (
                    <Tr> 
                      
                      <Td>{event.title}</Td>
                      <Td>{event.start}</Td>
                      <Td>{event.end}</Td>
                      <td>
                        <Button
                          /* flex={1} */
                          px={4}
                          fontSize={'sm'}
                          rounded={'full'}
                          bg={'blue.400'}
                          color={'white'}
                          boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                          }
                          _hover={{
                            bg: 'gray.200',
                          }}
                          _focus={{
                            bg: 'gray.200',
                          }}
                          onClick={()=>deleteEvent(event._id)}
                        >
                          Supprimer évènement
                        </Button>
                      </td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default DeleteEventModal;
