/** @jsx jsx */
import { jsx, Container, Flex, Box } from 'theme-ui';
import PriceCard from 'components/price-card';
import TextFeature from 'components/text-feature';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosHourglass } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'We are excited to hear from you',
    description: 'Available Services',
    buttonText: 'Start Now',
    btnURL: 'https://forms.gle/DnBh9kQRLX3kCJzo7',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Technical Consultation',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Project Management',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'UX Design',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Mobile App Development',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Full Stack Web Application Development',
        isAvailable: true,
      },
      {
        icon: <IoIosHourglass />,
        text: 'Multimedia Design & 3D Animation',
        isAvailable: false,
      },

      {
        icon: <IoIosHourglass />,
        text: 'Game Design',
        isAvailable: false,
      },
      {
        icon: <IoIosHourglass />,
        text: 'Training',
        isAvailable: false,
      },
    ],
  },
];

export default function Package() {
  return (
    <section id='contact' sx={styles.pricing}>
      <Container>
        <SectionHeader
          title='Contact Us'
          slogan='No matter how big your idea,you can do it with one step forward.Build it!!'
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'center',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
