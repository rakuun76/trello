import styled from "styled-components";
import Board from "./components/Board";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  return (
    <Container>
      <Boards>
        <Board />
        <Board />
        <Board />
      </Boards>
    </Container>
  );
}

export default App;
