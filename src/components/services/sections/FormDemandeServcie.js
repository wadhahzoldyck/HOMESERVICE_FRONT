import React, { useContext, useEffect, useState } from 'react'
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
    FormLabel,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormHelperText,
    FormControl,
    useToast,
    Radio,
    RadioGroup,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useDisclosure,
    Image,
} from '@chakra-ui/react';
import axios from 'axios'
import { AuthContext } from '../../authentification/context/AuthContext';
import { useLocation } from 'react-router-dom';
import { GoLocation } from 'react-icons/go'
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

export const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
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

const FormDemandeServcie = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const toast = useToast()
    const { user } = useContext(AuthContext);

    const { state } = useLocation()
    const id = state.id

    const service = props.service;
    const [serviceName, setServiceName] = useState("");
    const [professionnels, setProfessionnels] = useState();
    const [professionnel, setProfessionnel] = useState();
    const [typeD, setTypeD] = useState("public");
    const [descService, setDescService] = useState("");
    const [quand, setQuand] = useState("");
    const [client, setClient] = useState(user._id);
    const [numtel, setNumtel] = useState(user.phone);
    const [SousService, setSousService] = useState();


    const getSousService = async () => {
        await axios.get("http://localhost:3001/sous_service").then(
            (res) => {
                setSousService(res.data)
            }
        )
    }

    const addDemande = () => {
        if (props.isLogged) {
            if (serviceName !== "" && descService !== "" && quand !== "") {
                console.log(service, serviceName, professionnel, typeD, quand, client, numtel)
                if (typeD === "prive" && !professionnel) {
                    toast({
                        position: 'top-right',
                        title: "Erreur d'envoie",
                        description: "Vous devez choisir un professionnel !",
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                }
                else {

                    axios.post("http://localhost:3001/NewRequest", {
                        typeD: typeD,
                        service: service,
                        serviceName: serviceName,
                        professionnel: professionnel,
                        descService: descService,
                        quand: quand,
                        client: client,
                        numtel: numtel
                    }).then(() => {
                        toast({
                            title: 'Demande Envoyée',
                            description: "Votre demande est en cours de traitement par notre système avant d'etre publier.",
                            status: 'success',
                            duration: 5000,
                            isClosable: true,
                        })

                    }).catch(() => {
                        toast({
                            position: 'top-right',
                            title: "Erreur d'envoie",
                            description: "essayer plus tard !",
                            status: 'error',
                            duration: 5000,
                            isClosable: true,
                        })
                    })
                }
            }
            else {
                toast({
                    position: 'top-right',
                    title: "Erreur d'envoie",
                    description: "Vous devez remplir tous les champs !",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                })
            }
        }
        else {
            toast({
                position: 'top-right',
                title: "Veuillez connecter d'abord!",
                description: "Vou n'avez pas un compte ? Inscrivez-vous!",
                status: 'info',
                duration: 5000,
                isClosable: true,
            })
        }
    }

    useEffect(() => {
        getProfs();
        getSousService();
    },
        
    )

    const getProfs = async () => {
        await axios.get(`/api/auth/professionnelsByDomaine${id}`).then(
            (res) => {
                setProfessionnels(res.data);
            }
        )
    }

    return (
        <>
            <Box position={'relative'}>
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={{ base: 1, md: 2, lg: 2 }}
                    spacing={{ base: 10, lg: 2 }}
                    py={{ base: 10, sm: 20, lg: 20 }}>
                    <Stack id='demander' spacing={{ base: 10, md: 20, lg: '20' }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '3xl' }}>
                            <Text
                                as={'span'}
                                bg='white'
                                bgClip="text">
                                Demander
                                un
                                Service
                            </Text>

                        </Heading>
                        <Stack direction={'row'} spacing={4} align={'center'}>
                            <AvatarGroup>
                                {avatars.map((avatar) => (
                                    <Avatar
                                        key={avatar.name}
                                        name={avatar.name}
                                        src={avatar.url}
                                        size='sm'
                                        position={'relative'}
                                        zIndex={2}
                                        _before={{
                                            content: '""',
                                            width: 'full',
                                            height: 'full',
                                            rounded: 'full',
                                            transform: 'scale(1.125)',
                                            bg: 'white',
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
                                }}>
                                Vous
                            </Flex>
                        </Stack>
                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}
                        shadow={'xl'}>
                        <Stack spacing={4} >
                            <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '2xl' }}>
                                Service {props.service}
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    bgClip="text">

                                </Text>
                            </Heading>
                            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                                remplir ce formulaire !
                            </Text>
                        </Stack>
                        <Box as={'form'} mt={10} >
                            <FormControl>
                                <Stack spacing={4}>
                                    <Select id='service' placeholder="Choisissez un service"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                        onChange={(event) => { setServiceName(event.target.value) }}>
                                        {SousService !== undefined &&
                                            SousService.map((sous) => {
                                                if (sous.service.name === service) {
                                                    return (
                                                        <option value={sous.name}>{sous.name}</option>
                                                    )
                                                }
                                            })}
                                    </Select>
                                    <RadioGroup name="type" defaultValue='public'>
                                        <Stack spacing={5} direction='row'>
                                            <Radio colorScheme='blue' value='public' onChange={(event) => { setTypeD(event.target.value) }}>
                                                Public
                                            </Radio>
                                            <Radio colorScheme='blue' value='prive' onChange={(event) => { setTypeD(event.target.value) }}>
                                                Privé
                                            </Radio>
                                            <Radio colorScheme='blue' value='online_meeting' onChange={(event) => { setTypeD(event.target.value) }}>
                                                Online Meeting
                                            </Radio>
                                        </Stack>
                                    </RadioGroup>
                                    {typeD === "prive" || typeD === "online_meeting" ?
                                        <>
                                            <Button
                                                ref={btnRef}
                                                onClick={onOpen}
                                                _hover={{
                                                    bg: 'blackAlpha.100',

                                                    borderColor: 'white'
                                                }}>
                                                Voir les professionnels
                                            </Button>
                                            <Input id='professionnel'
                                                placeholder={professionnel ? "Professionnel : " + professionnel.name + " " + professionnel.lastName : "Selectionnez un professionnel"}
                                                bg={'gray.100'}
                                                border={0}
                                                color={'gray.500'}
                                                _placeholder={{
                                                    color: 'gray.500',
                                                }}
                                                disabled
                                            />

                                        </> : ""}

                                    <Textarea
                                        placeholder="Parlez-nous du travail souhaité (avec détailles)"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                        onChange={(event) => { setDescService(event.target.value) }}
                                    />
                                    <Input
                                        placeholder="Quand ? (date)"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                        onChange={(event) => { setQuand(event.target.value) }}
                                    />
                                    <Input id='email' type='email'
                                        defaultValue={user.email}
                                        placeholder="Adresse email"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                        disabled
                                    />
                                    <NumberInput

                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        defaultValue={user.phone}
                                    >
                                        <NumberInputField

                                            placeholder="Numéro du téléphone"
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                            onChange={(event) => { setNumtel(event.target.value) }}
                                            disabled
                                        />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>

                                </Stack>
                            </FormControl>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                    boxShadow: '2xl',
                                }}
                                onClick={addDemande}>
                                Demander
                            </Button>
                        </Box>
                    </Stack>
                </Container>
                <Blur
                    position={'absolute'}
                    top={-10}
                    left={-10}
                    style={{ filter: 'blur(70px)' }}
                />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"lg"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Les professionnels du service {service}</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder='Type here...' mb={4} />
                        {professionnels !== undefined && professionnels.map((prof) => {
                            return (
                                <Button key={prof._id} w={"full"} h={""} bg="" mt={2} shadow={"xl"} onClick={() => setProfessionnel(prof)}>
                                    <Stack w={"full"} p={{ base: '8', md: '', lg: '' }}>
                                        <Flex >
                                            <Image src={prof.avatar} borderRadius='full' boxSize={20} mr={4} />
                                            <Heading mt={6} size={"md"}>
                                                {prof.name + " " + prof.lastName} <br />
                                                <Text fontSize='sm' as={"kbd"} color={'blackAlpha.500'}><Flex><GoLocation />{"   " + prof.adresse + ", " + prof.ville}</Flex></Text>
                                            </Heading>
                                            <Text ml={20}>{prof.rate}Stars</Text>
                                        </Flex>
                                        <Flex>
                                            <SimpleGrid ml={20} columns={2} spacing={8}>
                                                <Text>E-mail <br /><Text as={"kbd"} color={'blackAlpha.500'} >{" " + prof.email}</Text></Text>

                                                <Text>Phone <br /><Text as={"kbd"} color={'blackAlpha.500'} >{" " + prof.phone}</Text></Text>
                                            </SimpleGrid>
                                        </Flex>
                                    </Stack>
                                </Button>
                            )
                        })}
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme='blue' onClick={onClose}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default FormDemandeServcie