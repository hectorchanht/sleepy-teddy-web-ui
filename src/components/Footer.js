import { Box, Container, Flex, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return <Box as={'footer'} bgColor={'#39e27d'} p={6}>
    <Container maxWidth={1080}>
      <Flex justifyContent={'space-between'} alignItems={'center'} >
        <a
          href={"/"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <Image src="/image/logo-transparent.png" alt="cat Logo" width={86} height={78} />

        </a>

        <HStack spacing={'5px'}>
          <Image src="/image/discord.png" alt="discord" width={43} height={30} />
          <Box w={'20px'} />
          <Image src="/image/twitter.png" alt="twitter" width={43} height={30} />
          <Box w={'20px'} />
          <Image src="/image/medium.png" alt="medium" width={43} height={30} />
        </HStack>

        <Box color={'#fff'}>
          © 2021 Cool Copy Cats
        </Box>
      </Flex>
    </Container>

  </Box>
}

export default Footer;