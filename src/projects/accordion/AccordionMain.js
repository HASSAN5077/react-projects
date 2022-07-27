import React, { useState } from "react";
import data from "./data";
import "./accordion.css";
import SingleQuestion from "./Accordion";
const AccordionMain = () => {
  const [question, setQuestions] = useState(data);
  return (
    <main>
      <div className="containerAcc">
        <h3>questions and answer about login</h3>
        <section className="info">
          {question.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default AccordionMain;
