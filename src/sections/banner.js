/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle } from 'react-icons/fa';
import BannerBG from 'assets/bannerBg-test.png';
import BannerThumb from 'assets/bg_main.svg';
import linkdin from 'assets/banner/linkedin.svg';
import twitter from 'assets/banner/twitter.svg';
import facebook from 'assets/banner/facebook.svg';
import github from 'assets/banner/github.svg';
import client3 from 'assets/sponsor/dropbox.svg';
import TextType from 'react-text-typing';
import CustomTooltip from '../components/custom-components/custom-tootip';

const data = [
  {
    id: 1,
    path: 'https://www.linkedin.com/company/cixhub',
    image: linkdin,
    title: 'linkdin',
  },
  {
    id: 2,
    path: 'https://www.twitter.com/CixHub',
    image: twitter,
    title: 'twitter',
  },
  {
    id: 3,
    path: 'https://www.facebook.com/cixtechnology',
    image: facebook,
    title: 'facebook',
  },
  // {
  //   id: 3,
  //   path: 'https://www.linkedin.com/company/cixhub',
  //   image: github,
  //   title: 'github',
  // },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    // home component
    <section sx={styles.banner} id='home'>
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as='h1' variant='heroPrimary'>
            CIXHUB
          </Heading>
          <Text as='p' variant='heroSecondary'>
            Create | Innovate | Execute
          </Text>
          <Flex>
            <CustomTooltip placement='top' text='Coming Soon'>
              <Button variant='whiteButton' aria-label='Portal'>
                Portal
              </Button>
            </CustomTooltip>

            <>
              <ModalVideo
                channel='youtube'
                isOpen={videoOpen}
                videoId=''
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant='textButton'
                aria-label='Watch Video'
                onClick={handleClick}
              >
                <FaPlayCircle /> Learn More
              </Button>
            </>
          </Flex>
          <Flex>
            <Text sx={styles.hellowWorld}>
              <TextType
                text='Hello World..'
                showBlink={true}
                variant='p'
                TextType='italic'
              ></TextType>
            </Text>
          </Flex>

          <Flex sx={styles.sponsorBox}>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link path={item.path} key={`client-key${index}`}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt='banner' />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'center',
      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],
      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      width: '100%',
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 1],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  helloWorld: {
    color: 'white',
    fontSize: [3, 1],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
