import React from "react";
import { getTask } from "../../../utils/actions";
import Link from "next/link";
import EditForm from "./../../../components/EditForm";

const EditPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className="my-8">
        <Link href="/tasks" className="btn btn-accent">
          Back to tasks
        </Link>
        <EditForm task={task} />
      </div>
    </>
  );
};

export default EditPage;
