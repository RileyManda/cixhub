/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'webdev',
    title: 'Web Development',
    text: 'We utilize modern tech stacks and tools to build responsive and beautiful web applications.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'mobile dev',
    title: 'Mobile Application Development',
    text: 'The Flutter Framework is our first love,but we arent limited,Our expert team posses years of experience with the Android and Ios SDK',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'ux',
    title: 'UX Design',
    text: 'UX Design is part of our Software Development step.With every project,we design UX to meet your Ui requirements.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Graphic Design',
    title: 'Graphic Design',
    text: 'Need a Logo?We design professional logo that will make your organization stand out',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: '3D',
    title: '3D Animation',
    text: 'We design customizable 3D and motion graphic assets.Our store is launching soon',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Sound Design',
    title: 'Sound Design',
    text: 'Music unites us all.Check out the CixHub music library for some interesting sound',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }} id='services'>
      <Container>
        <SectionHeader
          slogan='Our Services'
          title='We offer amazing Software Development Packages'
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
