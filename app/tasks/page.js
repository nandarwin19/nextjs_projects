// import TaskForm from "../../components/TaskForm";
import TaskFormCustom from "../../components/TaskFormCustom";
import TaskList from "../../components/TaskList";

export const dynamic = "force-dynamic";

const TasksPage = () => {
  return (
    <div className="max-w-lg my-8">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default TasksPage;
