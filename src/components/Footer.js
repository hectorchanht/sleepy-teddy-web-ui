import { Box, Container, HStack, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';


export const ExternalImageLink = () => <>
  <a href={'https://t.co/q3rAcwmH5q'} target={'_blank'} rel={"noreferrer"}>
    <Image src="/image/discord.png" alt="discord" width={43} height={30} />
  </a>
  <Box w={'20px'} />
  <a href={'https://twitter.com/SleepyTeddyZzz'} target={'_blank'} rel={"noreferrer"}>
    <Image src="/image/twitter.png" alt="twitter" width={43} height={30} />
  </a>
  <Box w={'20px'} />
  <a href={'https://www.instagram.com/Sleepyteddyclub/'} target={'_blank'} rel={"noreferrer"}>
    <Image src="/image/instagram.png" alt="instagram" width={44} height={44} />
  </a>
</>

const Footer = () => {
  return <Box as={'footer'} bgColor={'black'} p={6}>
    <Container maxWidth={1080}>
      <Stack spacing={'30px'} justifyContent={'space-between'} alignItems={'center'} direction={['column', 'column', 'row']}>
        <Image src="/image/logo-transparent.png" alt="cat Logo" width={86} height={78} />

        <HStack spacing={'5px'}>
          <ExternalImageLink />
        </HStack>

        <Box color={'#fff'}>
          © {new Date().getFullYear()} SleepyTeddyClub. Designed By SleepyTeddyClub
        </Box>
      </Stack>
    </Container>

  </Box>
}

export default Footer;