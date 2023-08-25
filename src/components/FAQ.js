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
          Lorem Ipsum dolor set iprum ?
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor et siprum rubum Lorem ipsum dolor
          et siprum rubum Lorem ipsum dolor et siprum rubum Lorem ipsum do
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Lorem Ipsum dolor set iprum ?
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor et siprum rubum Lorem ipsum dolor
          et siprum rubum Lorem ipsum dolor et siprum rubum Lorem ipsum do
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Lorem Ipsum dolor set iprum ?
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor et siprum rubum Lorem ipsum dolor
          et siprum rubum Lorem ipsum dolor et siprum rubum Lorem ipsum do
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
