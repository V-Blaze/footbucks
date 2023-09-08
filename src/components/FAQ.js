import React from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const Icon = ({ id, open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);
const FAQAccordion = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          How can I buy FOOTBUCKS ($FBUK) token
        </AccordionHeader>
        <AccordionBody>
          Currently you will be able to purchase $FBUK token during
          the Presale that&apos;s scheduled on the month of September.
          Go to the Presale page on our website once the
          Presale is on, connect your wallet and purchase
          $FBUK token with minimum of 0.1bnb.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What sets FOOTBUCKS apart from other
          cryptocurrencies in the market?
        </AccordionHeader>
        <AccordionBody>
          FOOTBUCKS (FBUK) distinguishes itself by combining the revolutionary
          power of blockchain technology with the passion and
          global reach of football culture. Here&apos;s why FOOTBUCKS stands out:
          <br />
          <br />
          Football-Centric Focus: FOOTBUCKS is purpose-built for the world of football.
          Unlike generic cryptocurrencies, we are driven by a
          singular vision: to transform football engagement,
          nurture talent, and unite fans worldwide.
          <br />
          <br />
          Community-First Approach: Our ecosystem is designed
          to empower the football community. We prioritize active
          participation, giving fans, players, and enthusiasts a
          voice in shaping the future of football.
          <br />
          <br />
          Transparency and Trust: Blockchain technology underpins FOOTBUCKS,
          ensuring transparency, security, and trust in every transaction.
          Our commitment to open governance and accountability sets us apart.
          <br />
          <br />
          NFT Marketplace: FOOTBUCKS offers an exclusive
          NFT marketplace where fans can trade football-themed NFTs,
          capturing iconic moments and memories. This brings a new
          dimension to fan engagement.
          <br />
          <br />
          Empowering Talents: Through FOOTBUCKS Academy and talent
          sponsorship initiatives, we invest in the next generation of
          football stars. This unique approach bridges the gap between
          fans and future professionals.
          <br />
          <br />
          Global Reach: FOOTBUCKS is borderless. We connect football
          enthusiasts from diverse backgrounds, erasing geographical
          boundaries and fostering a truly global football community.
          <br />
          <br />
          Ownership of Football Clubs: FOOTBUCKS goes beyond digital
          ngagement. We invest in lower division football clubs,
          empowering them to climb the ranks and succeed on the global stage.
          <br />
          <br />
          In summary, FOOTBUCKS is more than just a cryptocurrency;
          it&apos;s a movement that&apos;s reinventing football culture,
          uniting fans, and creating opportunities for talents to
          shine. Join us in shaping the future of the beautiful
          game.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What are the utilities of the $FBUK token
        </AccordionHeader>
        <AccordionBody>
          1. It&apos;s used for Governance on the FOOTBUCKS Ecosystem including
          proposing features and changes, voting on decisions and so on.
          <br />
          2. It&apos;s used for gas fees when we build our own Ecosystem app
          chain(our own Ecosystem powered Blockchain for FOOTBUCKS Ecosystem needs and more).
          <br />
          3. It&apos;s used to access exclusive contents on the FOOTBUCKS social
          platform built customly for football Enthusiast with Blockchain
          innovations and unique tools for football Community building and
          fans engagement of all related football activities and traffics.
          <br />
          4. It&apos;s used for staking and sharing FOOTBUCKS Ecosystem revenues.
          <br />
          5. it&apos;s used for payments on the FOOTBUCKS Nft marketplace.
          <br />
          6. It&apos;s used to pay for ads on the FOOTBUCKS social
          platform(buying of $fbuk to pay for ads and also burn part of it will
          be happening behind the scene of transactions, ie you can pay for
          ads with any Cryptocurrency but doing the transaction process
          you buy $fbuk to pay for the ads and burn part of it too).
          <br />
          7. It&apos;s used to boost your contents on FOOTBUCKS Social platform.
          <br />
          8. It&apos;s used to receive loyalty rewards, discounts, and special
          offers from FOOTBUCKS partners, including merchandise,
          tickets, and other football-related products.
          <br />
          9. Holders of $FBUK tokens gain privileged access to
          exclusive football events, virtual meet-ups, and online
          sessions with players and football influencers.
          NOTE: This are Just the few to mention, as FOOTBUCKS Ecosystem
          builds up and expands, we look to unlock new and unique
          utilities for $FBUK token.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          How can I join FOOTBUCKS?
        </AccordionHeader>
        <AccordionBody>
          Joining FOOTBUCKS is easy, and we welcome football
          enthusiasts, fans, players, and crypto enthusiasts from
          around the world to become part of our vibrant community.
          Here&apos;s how to get started:
          <br />
          <br />
          Stay Informed: Keep an eye on our official website and social
          media channels for updates, announcements, and news about FOOTBUCKS.
          This is the best way to stay informed about our latest developments.
          Participate in Community: Engage with us on our social
          media accounts currently Telegram and Twitter. Join the
          conversations, ask questions, and connect with fellow
          FOOTBUCKS supporters.
          <br />
          <br />
          Explore FOOTBUCKS Academy: If you&apos;re a budding football talent,
          be on the lookout for opportunities to join FOOTBUCKS Academy.
          We&apos;re dedicated to nurturing the future stars of football.
          <br />
          <br />
          Stay Active: Actively participate in the FOOTBUCKS ecosystem.
          This includes using FOOTBUCKS tokens for governance,
          exploring our NFT marketplace, and getting involved in
          community-driven initiatives.
          <br />
          <br />
          Spread the Word: Help us grow by spreading the word about FOOTBUCKS.
          Share our mission and vision with friends, fellow football fans,
          and anyone interested in blockchain technology.
          <br />
          <br />
          Remember, FOOTBUCKS is not just a cryptocurrency;
          it&apos;s a movement to revolutionize football engagement
          and empower the community. Your active participation
          and enthusiasm are what drive us forward.
          Welcome to the future of football culture!
        </AccordionBody>
      </Accordion>
    </>
  );
};

Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

export default FAQAccordion;
