import * as React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 10px;
  background: var(--brand);
  color: white;
`;

const Title = styled.h1`
  font-size: large;
  font-weight: normal;
`;

const Rubric = styled.div`
  p {
    margin: 5px 0 0;

    &:first-child {
      margin: 0;
    }
  }
`;

const Component = () => (
  <Header>
    <Title>Conference Radar</Title>
    <Rubric>
      <p>Conference not listed? Notice an issue?</p>
      <p>Contribute to this project on GitHub!</p>
    </Rubric>
  </Header>
);

export default Component;
