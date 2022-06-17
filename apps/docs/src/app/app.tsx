import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

function App() {
  return (
    <StyledApp>
      <NxWelcome title="batteries" />
    </StyledApp>
  );
}

export default App;
