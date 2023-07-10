import React from 'react';
import { Box, Button, Divider, Flex, Heading, IconButton, SimpleGrid, Stack, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import { ChevronRightIcon } from '@chakra-ui/icons';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Recruit = () => {
     // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://scontent.ftun4-2.fna.fbcdn.net/v/t1.15752-9/280313618_743926123276574_3986337373457847413_n.jpg?_nc_cat=109&ccb=1-6&_nc_sid=ae9488&_nc_ohc=StLo2qtiixcAX8JSG8C&_nc_ht=scontent.ftun4-2.fna&oh=03_AVIJTZ6eBXV7cKJZKoFm7_TRQgU0De3xL8iSYFui695lgw&oe=629DC79C',
    'https://www.fxponton.ca/images/slider1.jpg',
  ];
  return (
      <SimpleGrid p={1} columns={{ base: 1, md: 2,lg:'1' }} spacing={{base:'1', md:'0', lg:'0'}}>
      <Box
      rounded={'2xl'}
    position={'relative'}
    height={'420'}
    width={{base:'', md:'' ,lg:'full'}}
    overflow={'hidden'}>
    {/* CSS files for react-slick */}
    <link
      rel="stylesheet"
      type="text/css"
      charSet="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    />
    {/* Left Icon */}
    <IconButton
      aria-label="left-arrow"
      color="blue.400"
      borderRadius="full"
      position="absolute"
      left={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickPrev()}>
      <BiLeftArrowAlt />
    </IconButton>
    {/* Right Icon */}
    <IconButton
      aria-label="right-arrow"
      color="blue.400"
      borderRadius="full"
      position="absolute"
      right={side}
      top={top}
      transform={'translate(0%, -50%)'}
      zIndex={2}
      onClick={() => slider?.slickNext()}>
      <BiRightArrowAlt />
    </IconButton>
    {/* Slider */}
    <Slider {...settings} ref={(slider) => setSlider(slider)}>
      {cards.map((url, index) => (
        <Box
        alignItems={'right'}
          key={index}
          height={'420'}
          w={{base:'', lg:''}}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url(${url})`}
        >
        <Stack w={'full'} h={420}>
        <Stack  h={200}
                w={'full'}
                position="absolute"
                left={{base:'18%', lg:'60%'}}
                top={{base:'20%', lg:'20%'}}
                >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  Devenir Professionnel ?
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                 Développez votre activité et augmentez <br/> vos revenus en rendant service <br/> près de chez vous.
                </Text>
                <Button
                position={"absolute"}
                top={{base:'90%', lg:'80%'}}     
         border="2px"
         borderColor={"blue.400"}
          letterSpacing={2}
          size={'lg'}
          width={'80'}
          bg={'blue.400'}
          rounded={'full'}
          color={'white'}
          _hover={{
            bg: 'blackAlpha.100',
            color: 'white',
            borderColor:'white'
          }}>
          HOME SERVICE RECRUTE
          <ChevronRightIcon w={12} h={12} />
         </Button>
        </Stack>
        </Stack>
        </Box>
      ))}
    </Slider>
  </Box>
    
  </SimpleGrid>
  )
}

export default Recruit