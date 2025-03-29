export interface Task {
  id: number;
  text: string;
  isDone: boolean;
  isEdit: boolean;
  date: Date;
}

export interface TodoElementProps {
  task: Task;
  tasks: Task[];
  updateTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  index: number;
  setNewTask: (task: string) => void;
}
