import prisma from "./../../utils/db";

const prismaHandlers = async () => {
  console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     content: "wake up",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc", //order by descending
    },
  });
  return allTasks;
};

const PrismaPage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div>
      <h1 className="my-4 font-bold text-xl">Task List</h1>
      {tasks.map((task) => (
        <h2
          key={task.id}
          className="text-xl overflow-hidden break-words bg-gray-800 my-4 p-4 rounded-lg shadow-xl"
        >
          {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaPage;
