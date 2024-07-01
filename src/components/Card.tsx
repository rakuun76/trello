import styled from "styled-components";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Container = styled.div`
  width: 100%;
  height: 120px;
`;

interface ICardProps {
  id: number;
  content: string;
}

function Card({ id, content }: ICardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <Container
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? "100" : undefined,
      }}
    >
      {content}
    </Container>
  );
}

export default Card;
