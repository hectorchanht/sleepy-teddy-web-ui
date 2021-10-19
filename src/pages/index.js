import { Box, Button, Container as CContainer, SimpleGrid, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Footer, Header } from '../components';


const maxWidth = 1080;

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

        <Box bg={'#f0f0f0'} id={'learn'}>
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

        <Box bg={'#39e27d'}>
          <Container>
            <QAndA
              title={'How Sleepy is my Teddy?'}
              content={[
                'Every Teddy is extremely Sleepy, so we have the opportunity to dress them up on the Ethereum blockchain. However, each Teddy has a different Sleepy level, the higher the Sleepy level, the higher rareness of Teddy as there are more opportunities for us to dress Teddy up with more special and luxury clothes.',
              ]} />

            <QAndAs
              data={[
                {
                  title: '25% Zzz',
                  content: ['The Sleepy Teddys are sleepy but some of them are awake to do something.']
                },
                {
                  title: '50% Zz',
                  content: ['The clubhouse began to be filled with all kinds of Sleepy Teddy, and the Lobby began to become more and more crowded.']
                },
                {
                  title: '75% Z',
                  content: ['More and more Sleepy Teddy are starting to wake up another Sleepy Teddy, they are	going to change the World.']
                },
                {
                  title: '100% All Waken',
                  content: ['The second generation of Sleepy Teddy is coming soon.']

                }
              ]}
            />
          </Container>
        </Box>

        <Container id={'rarity'} >



          <SimpleGrid columns={[1, 1, 2]} spacing={10} alignItems={'center'}>
            <Box>
              <QAndA
                title={'Why Sleeping Teddy?'}
                content={[
                  'Each Sleepy Teddy NFT as your Sleepy Teddy Club membership card, allows you to join the Sleepy Teddy Club and enjoy member exclusive functions. Also have a sleepy teddy can protect you when you are ready to sleep, make sure that you will always 	have a sweet dream. For every sleepy teddy purchase, we will donate 50% of the profit to the following non-government organizations to protect the animals and help poor children around the world, to ensure that everyone and animals can have a dream. In addition, we put some extremely rare ocean elements, if these ocean elements are purchased, we will donate an additional 20% of the profit of those Sleepy Teddies with ocean elements as charity. Here is the NGO we will donate to:',
                  'World Vision Hong Kong',
                  'UNICEF',
                  'Greenpeace'
                ]}
              />
            </Box>

            <Box>
              <Button h={156} w={327} bg={'#fad121'} fontSize={'76px'} lineHeight={'76px'} p={'30px 60px'}>
                Ξ 0.06
              </Button>
              <br />
              <br />
              <Text fontSize="2xl" fontWeight="bold">
                Alright, how much?
              </Text>
              <br />
              <Text>
                Sleepy Teddy are priced at a flat rate (0.06 Ξ)
              </Text>
            </Box>
          </SimpleGrid>

          <Text fontSize="34px" lineHeight={'35px'} fontWeight="bold" mb={2} id={'contact'}>
            The Team
          </Text>
          <SimpleGrid columns={[1, 3, 3]} spacing={10} alignItems={'center'}>
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

        <Box bg={'#ffe573'} py={'65px'}>
          <Container position={'relative'}>
            <Box maxW={432}>
              <QAndA
                title={'Future of Sleepy Teddy?'}
                content={['Sleepy Teddy are much more than an NFT art project. We have plans and hopes to build a Cool Cat ecosystem comprised of interactivity and utility, community rewards and growth, collaboration with brands, and much more! We want the community to help dictate and determine which features we should be focusing on next - so you guys will be heavily involved in the future of Sleepy Teddy!']}
              />
            </Box>
            <Box position={'absolute'} right={0} bottom={-210}>
              <Image src="/image/under-a-rock.gif" alt="medium" width={756} height={576} />
            </Box>
          </Container>
        </Box>

      </Box>
      <Footer />
    </Container >
  )
}
