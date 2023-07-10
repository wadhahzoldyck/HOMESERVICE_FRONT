import { Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../authentification/context/AuthContext';
import { GoLocation } from 'react-icons/go'

const DemandePublic = () => {

  const [demandes, setDemandes] = useState();
  const [client, setClient] = useState();
  const { user } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const toast = useToast()

  const getDemandes = async () => {
    await axios.get("http://localhost:3001/AllDemandesPublic").then(
      (res) => {
        setDemandes(res.data)
      }
    )
  }

  const acceptDemande = async (d, n, s, c) => {
    if (d && n && s && c) {
      setAccepted(true)
      await axios.post(`UpdateDemandeService/${d._id}`, { acceptedFromProf: true, Professionnel: user._id }).then(() => {
        //  axios.get(`/api/auth/sms${n}/${s}/${user.name}/${user.lastName}`)
        axios.post("/api/auth/AcceptationOrRefuse", {
          client: c, prof: user, accepted: accepted, demande: d

        })
        toast({
          position: "top",
          title: "Demande accepter avec succés.",
          description: "Un SMS et un mail envoyé au client " + n,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        getDemandes();
      })

    }

  }

  useEffect(() => {
    getDemandes()
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
          Actualité
        </Text>
        <SimpleGrid p={{ base: '2', md: '8', lg: '8' }} w={"full"} columns={{ base: '1', md: '2', lg: '2' }} spacing={{ base: '8', md: '8', lg: '8' }}>
          {demandes !== undefined && demandes.map((demande) => {
            if (demande.TypeD === "public" && demande.acceptedFromProf === false && demande.acceptedFromAdmin === true && demande.Service === user.domaine) {
              return (
                <Box key={demande._id} shadow={"xl"} rounded={"xl"} p={{ base: '4', md: '8', lg: '8' }} bg={"white"} transition="0.5s ease" _hover={{
                  bg: "blue.100",
                  color: "white"
                }}  >
                  <Text size={"sm"} ml={{ base: '', md: '80', lg: '380' }}>
                    date de publication
                  </Text>
                  <Flex>
                  <Image borderRadius='full'
                      boxSize={20}
                      src={demande.Client.avatar} />
                  <Heading size={"md"} mt={8} ml={4}>
                    {demande.Client.name + " " + demande.Client.lastName}
                    
                    <Text as={'kbd'} fontSize='md' color={'blackAlpha.500'} ml={10}><Flex mt={2}><GoLocation/>{demande.Client.ville}</Flex></Text>
                  </Heading>
                  </Flex>
                  <br/>
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
                  <Stack >
                    <Button
                      onClick={() => { acceptDemande(demande, demande.Client.name + " " + demande.Client.lastName, demande.ServiceName, demande.Client) }}
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
                        bg: 'blackAlpha.100',
                        color: 'white',
                        borderColor: 'white'
                      }}>
                      Prendre le travail
                    </Button>
                  </Stack>
                </Box>
              )
            }
          })}

        </SimpleGrid>

      </Stack>
    </Stack>
  )
}

export default DemandePublic