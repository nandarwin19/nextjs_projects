"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () =>
  await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export const createTaskCustom = async (preState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 100));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5),
  });
  try {
    Task.parse({ content }); // validates the 'content' against the defined schema, ensuring it meets the specified requirements
    await prisma.task.create({
      data: {
        content,
      },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    console.log(error);
    return { message: "error" };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  try {
    await prisma.task.delete({
      where: { id },
    });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const updateTask = async (formData) => {
  const content = formData.get("content");
  const id = formData.get("id");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
