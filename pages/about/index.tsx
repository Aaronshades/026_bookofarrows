import React from "react";

import {Footer, Wrapper} from "../../components/";

const AboutPage: React.FC = () => {

  return (
    <Wrapper>
      <div style={{ flex: 1 }}>
        <h2>Hei!</h2>
        <p>Hvem er vi og hva er egentlig Book of Arrows?</p>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default AboutPage;
