import { updateTask } from "../utils/actions";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={updateTask}
      className="my-8 max-w-sm p-12 border border-base-300 rounded-lg"
    >
      {/* Hidden input for task ID, ensuring it's sent to the server on form submission for updating  */}
      <input type="hidden" name="id" value={id} />

      {/* content */}
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />

      {/* completed */}
      <div className="form-control">
        <label htmlFor="completed" className="my-2 label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button className="btn btn-primary btn-block btn-sm">edit</button>
    </form>
  );
};

export default EditForm;
