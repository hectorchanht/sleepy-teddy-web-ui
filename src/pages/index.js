import { Box, Button, Center, Container as CContainer, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Footer, Header } from '../components';


const maxWidth = 1080;

const QAndA = ({ title = '', content = [] }) => <>
  <Text fontSize="34px" lineHeight={'35px'} fontWeight="bold" mb={2}>
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
        <title>Cool Copycat NFT</title>
        <meta name="description" content="Cool Copycat NFT" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Header />

      <Box as={'main'} flex={1} m={0}>
        <Box bgColor={'#7790da'}>
          <Container position={'relative'}>
            <video height={540} src={'/video/header.mp4'} autoPlay loop />

            <Box w={'100%'} ml={'36.5%'} left={'auto'} top={'-150px'} position={'relative'}>
              <Button bg={'#fad121'} borderRadius={'70px'} h={'124px'} fontSize={'50px'} p={'26px'}            >
                Connect
              </Button>
            </Box>
          </Container>

          <Box color={'#ffffff'} bgColor={'#9cb5fe'} py={8}>
            <Text fontSize="2xl" fontWeight="bold" align={'center'} >
              SOLD OUT | WOW!!!
            </Text>
          </Box>
        </Box>

        <Container >
          <HStack justifyContent={'space-evenly'}>
            {/* <Button bgColor={'#9cb5fe'}>MY CATS</Button> */}
            <Button bgColor={'#fc9144'}>GALLERY</Button>
            <Button bgColor={'#39e27d'}>FAQ</Button>
          </HStack>
        </Container>

        <Box bg={'#f0f0f0'} id={'learn'}>
          <Container >
            <SimpleGrid columns={[1, 1, 2]} spacing={10} alignItems={'center'}>
              <Box order={[2, 2, 1]}>
                <QAndA
                  title={'What are Cool Cats?'}
                  content={['Cool Cats are a collection of programmatically, randomly generated NFTs on the Ethereum blockchain. The 1st generation consists of 10,000 randomly assembled cats from over 300k total options. Cool Cats that have a variety of outfits, faces and colors - all cats are cool, but completed outfit cats are the coolest. Each Cool Cat is comprised of a unique body, hat, face and outfit - the possibilities are endless!']}
                />
              </Box>

              <Box order={[1, 1, 2]}>
                <Image src="/image/many-cats.png" alt="medium" width={525} height={634} />
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <Container id={'rarity'}>
          <Box >
            <Image src="/image/many-cats2.png" alt="medium" width={1121} height={782} />
          </Box>

          <SimpleGrid columns={[1, 1, 2]} spacing={10} alignItems={'center'}>
            <Box />
            <Box>
              <QAndA
                title={'How cool is my cat?'}
                content={[
                  'For starters - all cats are cool, remember? That said, Cool Cats are worth between 3 and 10 points. These points are determined by which items your Cool Cat is made up of. Common items like a beanie or a hat are worth fewer points than more rare items like a computer head or an ape outfit.',
                  'The points of your Cool Cat can contribute to certain contests and raffles, but will be even more useful for breeding in Gen 2!'
                ]} />
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={[1, 1, 2]} spacing={10} alignItems={'center'}>
            <Box>
              <Image src="/image/cat-eggs.png" alt="medium" width={432} height={255} />

              <QAndA
                title={'Why get a Cool Cat?'}
                content={['Aside from participating in one the freaking coolest, curated but randomized NFT projects to date and getting a kick butt profile picture - you can help us evolve and build the future of Cool Cats. We’re giving back 20% of all ETH raised to the community (through contests, raffles, and more) - because we genuinely want Cool Cats to be a community driven and centric project. By getting a Cool Cat you have a voice in the community and can help guide the direction of the project. We’ll need help from you guys to determining specifics for future developments like breeding, next generation Cool Cats, the app, and much more!']}
              />
            </Box>

            <Box>
              <Button h={156} w={327} bg={'#fad121'} fontSize={'76px'} lineHeight={'76px'} p={'30px 60px'}>
                Ξ 0.02
              </Button>
              <br />
              <br />
              <Text fontSize="2xl" fontWeight="bold">
                Alright, how much?
              </Text>
              <br />
              <Text>
                Cool Cats are priced at a flat rate (0.06 Ξ), and remember - Blue Cat Skin is exclusive to Gen 1!
              </Text>
            </Box>
          </SimpleGrid>
        </Container>

        <Box bg={'#ffe573'} py={'65px'}>
          <Container position={'relative'}>
            <Box maxW={432}>
              <QAndA
                title={'Future of Cool Cats?'}
                content={['Cool Cats are much more than an NFT art project. We have plans and hopes to build a Cool Cat ecosystem comprised of interactivity and utility, community rewards and growth, collaboration with brands, and much more! We want the community to help dictate and determine which features we should be focusing on next - so you guys will be heavily involved in the future of Cool Cats!']}
              />
            </Box>
            <Box position={'absolute'} right={0} bottom={-200}>
              <Image src="/image/under-a-rock.gif" alt="medium" width={756} height={576} />
            </Box>
          </Container>
        </Box>


        <Box bg={'#39e27d'} id={'faq'}>
          <Container >
            <br />
            <br />
            <br />
            <Text fontSize={'96px'} lineHeight={'155px'} mb={'20px'}>
              FAQ
            </Text>

            <QAndAs data={[
              { title: 'What’s an NFT?', content: ['An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a “members” card.', 'What is Metamask? Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint a Cool Cat. Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io/)'] },
              { title: 'Where does my NFT go after I purchase a Cool Cat?', content: ['Your Cool Cat NFT will appear in whatever address, or connected wallet you used to purchase the Cool Cat. You can see your Cool Cat here from our website, by clicking My Cats, or view them on Opensea. (Link to Opensea)'] },
              { title: 'This sounds awesome, how do I get involved?', content: ['Head over to the Discord, jump in on the conversation and let us know your ideas!'] },
              { title: 'Soo…Breeding?!', content: ['Yes! This will happen in Gen 2. We’re still contemplating the most optimal way to implement this and are hoping the community can weigh in as well, but breeding will in fact be a thing in Gen 2!'] },
              { title: 'What can I do with my Cool Cat?', content: ['You are free to do anything with them under a non-exclusive license.'] },
              { title: 'Are Cool Cats a good investment?', content: ['That is ultimately a decision for you to make. We believe Cool Cats have a long life ahead of them, and will be an ever growing and evolving project. However the success of Cool Cats relies on so many factors and variables, no one knows! Hopefully Cool Cats go to the moon, but like anything in life, don’t spend money you can’t afford to not have.'] },
              { title: 'Who are you cats?', content: ['We’re a team of 4 nerds who are passionate about crypto, art, and makin’ cool stuff. Our team is comprised of Clon, previously knows as The Catoonist (https://www.instagram.com/thecatoonist/) around some parts - who is responsible for the origination of Blue Cat and all of the Cool Cats illustration. Tom, whose got the Jimmy Neutron brain responsible for the technical side from smart contracts to servers, all that “fun” stuff. Lynq is our ace up the sleeve dev ninja that builds out our cool website and shiny buttons so they actually do something when you click them, and ELU who is on creative direction, kicking pixel butt with Clon and also switches between marketing and project management.'] },
              { title: 'Tokenomics?', content: ['We have reserved 100 cats to giveaway in competitions and holder airdrops. Most of these will be given out after launch and will not occupy the early token ids. The 4 members of staff have each been given a Cool Cat (not from the reserve pile). The remainder of the cats are all for sale.'] },
            ]} />
            <br />
            <br />
            <Center mb={'-33px'}>
              <Image src="/image/road.gif" alt="medium" width={700} height={306} />
            </Center>
          </Container>
        </Box>

        <Box bg={'#222'} id={'roadmap'} color={'white'}>
          <br />
          <Container maxWidth={maxWidth} position={'relative'}>
            <QAndAs data={[
              { title: 'Cool Cat Live Stream!', content: ['Tune into Clon on Wednesday at 1PM EST and catch some live Cool Cat illustration community collaboration session (https://www.twitch.tv/cloncast)'] },
              { title: 'Launch Gen 1 Cool Cats', content: ['On July 1, we’re going live baby!!!'] },
              { title: 'Monthly Exclusive NFT Kickoff', content: ['Cool Cat holders will have a chance to claim a limited edition, custom Cool Cat NFT each month, there might even be collabs!'] },
              { title: 'First Community ETH Raffle', content: ['Once we sell out 50% of Cool Cats we’ll be doing a community exclusive raffle to win some Ethereum!'] },
              { title: 'Second Community ETH Raffle', content: ['Once we sell out 100% of Cool Cats we’ll be doing a community exclusive raffle to win some more Ethereum!'] },
              { title: 'Merch Store & Giveaway!', content: ['What better way to rep Cool Cats IRL than a sick ass shirt?? And of course, we’ll be giving away some goodies with this launch'] },
              { title: 'Gen 2 | Breeding', content: ['Once we launch Gen 1, we can work with the community to determine the BEST way to implement breeding for next Gen!'] },
            ]} />
          </Container>
        </Box>
      </Box>
      <Footer />
    </Container >
  )
}
