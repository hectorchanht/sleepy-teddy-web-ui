import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Container, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const ScrollLinks = () => <>
  <Text cursor={'pointer'} onClick={() => document.getElementById('learn').scrollIntoView({ behavior: 'smooth' })}>
    Learn
  </Text>
  <Text cursor={'pointer'} onClick={() => document.getElementById('rarity').scrollIntoView({ behavior: 'smooth' })}>
    Rarity
  </Text>
  <Text cursor={'pointer'} onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}>
    FAQ
  </Text>
  <Text cursor={'pointer'} onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })}>
    Roadmap
  </Text>
</>

const MobileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <Box display={['flex', 'flex', 'none']}>
    <Icon zIndex={2000} color={'white'} boxSize={'34px'} onClick={isOpen ? onClose : onOpen} as={isOpen ? CloseIcon : HamburgerIcon} />
    <Drawer placement={'top'} onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay />
      <DrawerContent h={'100vh'}>
        <DrawerBody bg={'#39e27d'}>
          <VStack onClick={onClose} alignItems={'flex-start'} fontSize={24} spacing={6} mt={6}>
            <ScrollLinks />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
}

const Header = () => {
  return <Box bgColor={'#7790da'} p={6}>
    <Container maxWidth={1320}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Image src="/image/logo-long.png" alt="cat Logo" width={363} height={106} />

        <MobileHeader />

        <HStack spacing={4} justifyContent={'center'} display={['none', 'none', 'flex']}>
          <Box w={'20px'} />
          <ScrollLinks />
        </HStack>

        <HStack spacing={4} display={['none', 'none', 'flex']}>
          <Box w={'20px'} />
          <Image src="/image/discord.png" alt="discord" width={43} height={30} />
          <Box w={'20px'} />
          <Image src="/image/twitter.png" alt="twitter" width={43} height={30} />
          <Box w={'20px'} />
          <Image src="/image/medium.png" alt="medium" width={43} height={30} />
        </HStack>
      </Flex>

    </Container>
  </Box>
}

export default Header;