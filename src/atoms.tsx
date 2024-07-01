import { atom } from "recoil";

interface ITask {
  id: string;
  content: string;
}

interface ITasksState {
  [key: string]: ITask[];
}

export const TasksState = atom<ITasksState>({
  key: "tasks",
  default: {
    "To Do": [
      { id: "1", content: "wave" },
      { id: "2", content: "to" },
      { id: "3", content: "earth" },
      { id: "4", content: "🌏" },
    ],
    Doing: [
      { id: "5", content: "oasis" },
      { id: "6", content: "🏝" },
    ],
    Done: [
      { id: "7", content: "silica gel" },
      { id: "8", content: "🧂" },
    ],
  },
});
