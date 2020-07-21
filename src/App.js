import React from 'react';
import { Container } from 'react-bootstrap'
import { Candidates } from './features/candidates/Candidates'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Candidates />
      </Container>
    </React.Fragment>

  );
}

export default App;
