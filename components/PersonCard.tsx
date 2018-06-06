import * as React from 'react';
import glamorous from 'glamorous';
import { colors, shadows } from '../design-system';
import { Step } from '../utils/Scale';

interface PersonCardProps {
  name: string;
  filename: string;
  role: string;
  bio?: string;
}

const ImageCard = glamorous.div({
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  display: 'block',
  background: colors.white,
  borderRadius: Step(2),
  width: '100%',
  boxShadow: shadows.default,

  '& img': {
    position: 'relative',
    zIndex: 1,
    display: 'block',
    width: '100%',
    margin: 0,
    padding: 0
  },
  '&::before': {
    top: 0,
    zIndex: 0,
    content: `''`,
    display: 'block',
    background: 'url(/static/images/pattern@2x.png)',
    backgroundSize: '100%',
    position: 'absolute',
    left: -200,
    width: 423,
    height: 263,
    transform: 'translateY(40px)'
  },
  '&.right': {
    '&::before': {
      display: 'none'
    },
    '&::after': {
      top: 0,
      zIndex: 0,
      content: `''`,
      display: 'block',
      background: 'url(/static/images/pattern@2x.png)',
      backgroundSize: '100%',
      position: 'absolute',
      left: 'auto',
      right: -200,
      width: 423,
      height: 263,
      transform: 'translateY(40px)'
    }
  }
});

const Meta = glamorous.div({
  padding: `${Step(4)} 0`
});

const Name = glamorous.h3({
  padding: `2rem 0 ${Step(3)} 0`,
  margin: 0,
  color: colors.black
});

const Role = glamorous.h3({
  padding: '0 0 2rem 0',
  margin: 0,
  paddingBottom: Step(3),
  fontWeight: 300,
  color: colors.black
});

const PersonCard: React.SFC<PersonCardProps> = ({
  filename,
  name,
  role,
  bio
}) => {
  return (
    <>
      <ImageCard>
        <img
          src={`/static/images/${filename}.webp`}
          srcSet={`/static/images/${filename}.webp, /static/images/${filename}@2x.webp 2x`}
          alt={`${name}'s Headshot`}
        />
      </ImageCard>
      <Meta>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Meta>
      <p className="lh-copy">{bio}</p>
    </>
  );
};

export default PersonCard;
