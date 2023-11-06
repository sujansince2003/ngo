import { useState } from "react";
import PropTypes from "prop-types";

import "./faq.css";

const faqs = [
  {
    title: "Awareness",
    text: "We ensure raising public awareness about autism among parents, academic firms, society and eradicate misconcept about Autism as curse and promoting a better understanding of Autism spectrum disorders which can be through Public campaigns, workshops, training sessions and community events.",
  },
  {
    title: " Advocacy",
    text: "We advocate for the rights, acceptance and inclusion of the children with Autism within the society which involves promoting policies and legislation that promote and support autistic children and ensuring their access to education, health care, employment opportunity and community services.",
  },
  {
    title: " Trainings and therapies",
    text: "Our mission is to provide essential, basic-level training and therapies for children with autism in rural part of Nepal, empowering them to reach their full potential. We aim to bridge this gap since all services are available in cities or out of country.Through education and therapy, we work to create a brighter future for those affected by autism in our rural communities.",
  },
  {
    title: " Mental health of Mother",
    text: "We collaborate with womens rights organization since mother of autistic children are ill treated by husband and family member. Our mission is to protect and promote mothers to be physically, mentally and socially fit to take care of autistic children.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      {/* <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 1"
        num={22}
        key="test 1"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem> */}
    </div>
  );
}
Accordion.propTypes = {
  data: PropTypes.array.isRequired,
};

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <>
      <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="title">{title}</p>
        <p className="icon">{isOpen ? "-" : "+"}</p>

        {isOpen && <div className="content-box">{children}</div>}
      </div>
    </>
  );
}
AccordionItem.propTypes = {
  num: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  curOpen: PropTypes.number,
  onOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
