import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import PlanetOne from '/Logo.svg';
// import PlanetTwo from '/Logo.svg';
// import PlanetThree from '/Logo.svg';
// import PlanetFour from '/Logo.svg';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Container = styled.div`
  display: flex;
  max-width: 450px;
 
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

// const ColumnLeft = styled.div`
//   display: flex;
//   color: #fff;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   padding: 5rem 2rem;
//   h1 {
//     margin-bottom: 0.5rem;
//     font-size: 2rem;
//   }
//   p {
//     margin: 2rem 0;
//     font-size: 4rem;
//     line-height: 1.1;
//   }
// `;

// const Button = styled(motion.button)`
//   padding: 1rem 3rem;
//   font-size: 1rem;
//   border: 2px solid #fff;
//   border-radius: 4px;
//   outline: none;
//   cursor: pointer;
//   background: transparent;
//   color: #fff;
// `;

const Image = styled(motion.img)`
  position: relative;
  width: 100%;
  height: 100%;
  width: 150px;
  height: 150px;
  background:white;
  border-radius: 100px;
  opacity: .1;

  
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap:wrap;
  ${Image}:nth-child(1) {
    top: 0px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 0px;
    right: 0px;
    width: 100px;
    height: 100px;
  }
  ${Image}:nth-child(3) {
    top: 0px;
    left: 0px;
  
  }
  ${Image}:nth-child(4) {
    top: -40px;
    right: -20px;
    width: 120px;
    height: 120px;
  }
  ${Image}:nth-child(5) {
    bottom: 30px;
    right: 0px;
  }
`;

const Bubbles = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Section>
      <Container>
       
        <ColumnRight>
          <Image
            src={"https://mirror-media.imgix.net/publication-images/L61pgYjkWW0CFQynux1C5.png?h=512&w=512"}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: .8, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={"https://assets.coingecko.com/coins/images/26149/large/YCvKDfl8_400x400.jpeg?1656041509"}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: .8, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={"https://pbs.twimg.com/profile_images/1364590285255290882/hjnIm9bV_400x400.jpg"}
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: .8, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={"https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2F464911102-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fcollections%252F2TjMAeHSzwlQgcOdL48E%252Ficon%252FKWP0gk2C6bdRPliWIA6o%252Fens%2520transparent%2520background.png%3Falt%3Dmedia%26token%3Dbd28b063-5a75-4971-890c-97becea09076"}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: .8, y: 0, transition: { duration: 1 } }}
          />
           <Image
            src={"https://pbs.twimg.com/profile_images/1501254214424489990/InGGkKwq_400x400.png"}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: .8, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Bubbles;