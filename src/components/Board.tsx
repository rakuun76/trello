import styled from "styled-components";
import { ITask } from "../atoms";
import { SortableContext } from "@dnd-kit/sortable";
import Card from "./Card";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IBoardProps {
  category: string;
  list: ITask[];
}

function Board({ category, list }: IBoardProps) {
  return (
    <Container>
      <h2>{category}</h2>
      <SortableContext items={list}>
        {list.map((task) => {
          return <Card key={task.id} id={task.id} content={task.content} />;
        })}
      </SortableContext>
    </Container>
  );
}

export default Board;
