import { Box, Button, Container as CContainer, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Footer, Header } from '../components';


const QAndA = ({ title = '', content = [] }) => <>
  <Text fontSize="34px" lineHeight={'35px'} fontWeight="bold" mb={2} >
    {title}
  </Text>
  {content.map((c, i) => <Text key={i} mb={2}>{c}</Text>)}
  <br />
</>;

const QAndAs = ({ data = [] }) => <>
  {data.map((d, i) => <QAndA key={i} {...d} />)}
</>;

const Container = (props) => <CContainer maxW={1080} py={[4, 6, 8]} {...props} />

export default function Home() {
  return (
    <Container maxW={10000} minH={'100vh'} display={'flex'} flexDirection={'column'} p={0} py={0}>
      <Head>
        <title>Sleepy Teddy Club NFT</title>
        <meta name="description" content="Sleepy Teddy Club NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Box as={'main'} flex={1} m={0}>

        <Box bg={'#cf4c8e'}>
          <Container py={0}>
            <Image src="/teddy/teddy1.jpeg" alt="teddy1" width={1600} height={1199} />
          </Container>
        </Box>
        <Box fontSize="34px" lineHeight={'35px'} fontWeight="bold" color={'white'} bg={'#AA4C7C'} textAlign={'center'}>
          <Container>
            <SimpleGrid columns={2} spacing={10} alignItems={'center'}>
              <Text textDecoration={'line-through'}>BUY NOW</Text>
              <Text>UNDER DEVELOP</Text>
            </SimpleGrid>
          </Container>
        </Box>

        <Box id={'learn'}>
          <Container >
            <SimpleGrid columns={[1, 1, 2]} spacing={10} alignItems={'center'}>
              <Box order={[2, 2, 1]}>
                <QAndA
                  title={'What are Sleepy Teddy?'}
                  content={['The Sleepy Teddy Club is a collection of 5000 unique Sleepy Teddy NFTs - unique digital collectibles living on the Ethereum blockchain. Your Sleepy Teddy NFTs as your Sleepy Teddy Club membership card allows you to join the Sleepy Teddy Club and enjoy member exclusive functions.']} />
              </Box>

              <Box order={[1, 1, 2]}>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <Container id={'rarity'} >
          <SimpleGrid columns={[1, 1, 2]} spacing={10} alignItems={'center'}>
            <Box>
              <QAndA
                title={'Why Sleeping Teddy?'}
                content={[
                  'Each Sleepy Teddy NFT as your Sleepy Teddy Club membership card, allows you to join the Sleepy Teddy Club and enjoy member exclusive functions. Also have a sleepy teddy can protect you when you are ready to sleep, make sure that you will always 	have a sweet dream. For every sleepy teddy purchase, we will donate 50% of the profit to the following non-government organizations to protect the animals and help poor children around the world, to ensure that everyone and animals can have a dream. In addition, we put some extremely rare ocean elements, if these ocean elements are purchased, we will donate an additional 20% of the profit of those Sleepy Teddies with ocean elements as charity. Here is the NGO we will donate to',
                ]}
              />
            </Box>

            <Box>
            </Box>
          </SimpleGrid>

          <HStack justifyContent={'center'}>
            {[
              { label: 'World Vision HK', href: 'https://www.worldvision.org/' },
              { label: 'UNICEF', href: 'https://www.unicef.org/' },
              { label: 'Greenpeace', href: 'https://www.greenpeace.org/' }
            ].map(({ label, href }) => <Button as={'a'} href={href} bg={'#fad121'} key={label}>
              {label}
            </Button>)}
          </HStack>
        </Container>

        <Box id={'roadmap'}>
          <Container>
            <QAndA
              title={'How Sleepy is my Teddy?'}
              content={[
                'Every Teddy is extremely Sleepy, so we have the opportunity to dress them up on the Ethereum blockchain. However, each Teddy has a different Sleepy level, the higher the Sleepy level, the higher rareness of Teddy as there are more opportunities for us to dress Teddy up with more special and luxury clothes.',
              ]} />

          </Container>
        </Box>

        <Box bg={'#87c5e9'}>
          <Container>
            <SimpleGrid columns={[1, 2, 2]} spacing={10} alignItems={'center'}>
              <Box>
                <QAndA
                  title={'25% Zzz'}
                  content={['The Sleepy Teddys are sleepy but some of them are awake to do something']} />
              </Box>
              <Box>
                <QAndA
                  title={'50% Zz'}
                  content={['The clubhouse began to be filled with all kinds of Sleepy Teddy, and the Lobby began to become more and more crowded.']} />
              </Box>
              <Box>
                <QAndA
                  title={'75% Z'}
                  content={['More and more Sleepy Teddy are starting to wake up another Sleepy Teddy, they are	going to change the World.']} />
              </Box>
              <Box>
                <QAndA
                  title={'100% All Waken'}
                  content={['The second generation of Sleepy Teddy is coming soon.']} />
              </Box>
            </SimpleGrid>
          </Container>
        </Box>
        <Box id={'purchase'}>
          <Container>
            <QAndA
              title={'How to get a Sleepy Teddy?'}
              content={['Click the button below if you want some Sleepy Teddy.', 'Sleepy Teddy is are priced at a flat rate (0.02Ξ)', 'If you have any difficulties with having a Sleepy Teddy, feel free to find us!']} />
            <Button textDecoration={'line-through'} h={156} w={327} bg={'#fad121'} fontSize={'66px'} lineHeight={'76px'} p={'30px 60px'}>
              connect
            </Button>
          </Container>
        </Box>

        <Container>
          <Text fontSize="34px" lineHeight={'35px'} fontWeight="bold" mb={2} id={'contact'}>
            The Team
          </Text>
          <SimpleGrid columns={[1, 3, 3]} spacing={'12px'} textAlign={'center'}>
            <Box>
              Project Lead - Andy
            </Box>
            <Box>
              The Artist - Kenji
            </Box>
            <Box>
              Developer - Hector
            </Box>
          </SimpleGrid>
        </Container>

      </Box>
      <Footer />
    </Container >
  )
}
