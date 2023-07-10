import { Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../authentification/context/AuthContext';
import { GoLocation } from 'react-icons/go'

const DemandePrive = () => {
  const [demandes, setDemandes] = useState();
  const [mssg, setMssg] = useState();
  const { user } = useContext(AuthContext);
  const toast = useToast()

  const getDemandesPrive = async () => {
    await axios.get(`http://localhost:3001/ProfessionnelPriveDemandes${user._id}`).then(
      (res) => {
        setDemandes(res.data)

      }
    )
  }

  const acceptDemande = async (id, n, s) => {
    if (id && n && s) {
      //update accepted from Professionnel
      await axios.post(`UpdateDemandeServicePrive/${id}`, { acceptedFromProf: true }).then(() => {
        // axios.get(`/api/auth/sms${n}/${s}/${user.name}/${user.lastName}`)
        toast({
          position: "top",
          title: "Demande accepter avec succés.",
          description: "Un SMS envoyé au client " + n,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        getDemandesPrive();
      })
    }
    else {
      toast({
        position: "top",
        title: "Une erreur s'est produit.",
        description: "Essayez plus tard ",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

  }

  useEffect(() => {
    getDemandesPrive()
  },
    []
  )

  return (
    <Stack w={"full"} px={{ base: '2', md: '16', lg: '20' }}>
      <Stack w={"full"} p={{ base: '2', md: '8', lg: '8' }} >
        <Text
          id='Actualité'
          position={"static"}
          textTransform={'uppercase'}
          color={'blue.400'}
          fontWeight={600}
          fontSize={'sm'}
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={2}
          alignSelf={'flex-start'}
          rounded={'md'}>
          Demandes Prive
        </Text>
        <SimpleGrid p={{ base: '2', md: '8', lg: '8' }} w={"full"} columns={{ base: '1', md: '2', lg: '2' }} spacing={{ base: '8', md: '8', lg: '8' }}>
          {demandes !== undefined && demandes.map((demande) => {
            if (demande.TypeD === "prive" && demande.acceptedFromProf === null && demande.acceptedFromAdmin === true && demande.Service === user.domaine) {
              return (
                <Box shadow={"xl"} rounded={"xl"} p={{ base: '4', md: '8', lg: '8' }} bg={"white"} transition="0.5s ease" _hover={{
                  bg: "blue.100",
                  color: "white"
                }}  >
                  <Text size={"sm"} ml={{ base: '', md: '', lg: '380' }}>
                    date de publication
                  </Text>
                  <Flex>
                    <Image borderRadius='full'
                      boxSize={20}
                      src={demande.Client.avatar} />
                    <Heading size={"md"} mt={8} ml={4}>
                      {demande.Client.name + " " + demande.Client.lastName}
                      <Text as={'kbd'} fontSize='md' color={'blackAlpha.500'} ml={10}><Flex mt={2}><GoLocation />{demande.Client.ville}</Flex></Text>
                    </Heading>
                  </Flex>
                  <br />
                  <Heading size={"md"} p={2}>
                    {demande.ServiceName}
                  </Heading>
                  <Stack p={8} >
                    <Text as={"kbd"}>
                      {demande.Description}
                    </Text>
                  </Stack>
                  <Stack ml={{ base: '', md: '', lg: '40' }} p={4}>
                    <Text>
                      Date choisit par le client,  {demande.When}
                    </Text>
                  </Stack>
                  <Flex >
                    <Button
                      onClick={() => { acceptDemande(demande._id, demande.Client.name + " " + demande.Client.lastName, demande.ServiceName) }}
                      position={"static"}
                      border="2px"
                      borderColor={"blue.400"}
                      letterSpacing={2}
                      alignSelf={'center'}
                      size={'md'}
                      width={'80'}
                      bg={'blue.400'}
                      rounded={'full'}
                      color={'white'}
                      _hover={{
                        bg: 'whiteAlpha.300',
                        color: 'white',
                        borderColor: 'white'
                      }}>
                      Accepter
                    </Button>
                    <Button
                      position={"static"}
                      border="2px"
                      borderColor={"blue.400"}
                      letterSpacing={2}
                      alignSelf={'center'}
                      size={'md'}
                      width={'80'}
                      bg={'blue.400'}
                      rounded={'full'}
                      color={'white'}
                      _hover={{
                        bg: 'whiteAlpha.300',
                        color: 'white',
                        borderColor: 'white'
                      }}>
                      Refusé
                    </Button>
                  </Flex>
                </Box>
              )
            }
          })}

        </SimpleGrid>

      </Stack>
    </Stack>
  )
}

export default DemandePrive