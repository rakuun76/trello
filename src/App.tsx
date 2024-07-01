import styled from "styled-components";
import Board from "./components/Board";
import { DndContext } from "@dnd-kit/core";
import { useRecoilState } from "recoil";
import { TasksState } from "./atoms";

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [tasks, setTasks] = useRecoilState(TasksState);

  return (
    <Container>
      <Boards>
        <DndContext>
          {Object.keys(tasks).map((category) => (
            <Board key={category} category={category} list={tasks[category]} />
          ))}
        </DndContext>
      </Boards>
    </Container>
  );
}

export default App;
