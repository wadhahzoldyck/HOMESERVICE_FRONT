import React, { useContext, useEffect, useRef, useState } from 'react';
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
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Input,
  Textarea,
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../../authentification/context/AuthContext';
import { CloseIcon } from '@chakra-ui/icons'

const ClientDemandes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { user, token, dispatch } = useContext(AuthContext);
  const [demandes, setDemandes] = useState();
  const [demande, setDemande] = useState();

  const getDemandes = async () => {
    await axios
      .get(`http://localhost:3001/ClientsDemandes${user?._id}`, {
        headers: { Authorization: token },
      })
      .then(res => {
        setDemandes(res.data);
      });
  };

  const modifierDemande = async () => {

  }

  console.log(demande);
  useEffect(() => {
    getDemandes();
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
          Mes Demandes
        </Text>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Toutes Mes demandes.</TableCaption>
            <Thead>
              <Tr>
                <Th>Demande</Th>
                <Th>Professionnel</Th>
                <Th>Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {demandes !== undefined &&
                demandes.map(demande => {
                  return (
                    <>
                      <Tr>
                        <Td>{demande.TypeD}</Td>
                        <Td>
                          {demande.Professionnel?.name +
                            ' ' +
                            demande.Professionnel?.lastName}
                        </Td>
                        <Td>{demande.acceptedFromProf === true ? <Text as={'kbd'} color={'green.400'}>Accepté</Text>
                          : demande.acceptedFromProf === false ? <Text as={'kbd'} color={'red.400'}>Refusé</Text>
                            : <Text as={'kbd'} color={'gray.400'}>Encours</Text>}</Td>
                        <Td>
                          <Button
                            disabled={demande.acceptedFromProf === null ? false : true}
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
                            onClick={onOpen}
                          >
                            Modifier demande
                          </Button>
                          <Button
                            disabled={demande.acceptedFromProf === null ? false : true}
                            px={4}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'gray.300'}
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
                            onClick={() => modifierDemande()}
                          >
                            Annuler demande
                          </Button>
                        </Td>
                      </Tr>
                      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size={'md'}>
                        <DrawerOverlay bg={'transparent'} />
                        <DrawerContent>
                          <DrawerHeader borderBottomWidth='1px'>
                            <Flex w={'full'}>
                            <Text ml={40} >Modification demande</Text>
                            <Button ml={10} onClick={onClose}> <CloseIcon/></Button>
                            </Flex>
                          </DrawerHeader>
                          <DrawerBody p={20}>
                            <Input
                            mb={4}
                            disabled
                              defaultValue={"Service "+demande?.Service}
                            />
                            <Text color={'blue.400'} as={'kbd'}> Service </Text>
                             <Input
                             mb={4}
                              defaultValue={demande?.ServiceName}
                            />
                            <Text color={'blue.400'} as={'kbd'}>Description</Text>
                            <Textarea mb={4} defaultValue={demande?.Description}/>
                            <Text color={'blue.400'}  as={'kbd'}>Professionnel</Text>
                            <Input mb={4} defaultValue={demande?.Professionnel?.name+" "+demande?.Professionnel?.lastName}
                              disabled
                            />
                            <Text color={'blue.400'}  as={'kbd'}>Date</Text>
                            <Input mb={4} disabled defaultValue={demande.When}/>
                            <Button w={'full'}
                             transition={'0.5s ease'}
                              _hover={{bg: 'blue.400', color: 'white'}}
                              onClick={modifierDemande()}
                              >
                              Modifier
                              </Button>
                          </DrawerBody>
                        </DrawerContent>
                      </Drawer>
                    </>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default ClientDemandes;
