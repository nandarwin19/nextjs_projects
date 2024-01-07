"use server";

import type { Topic } from "@prisma/client";
import { auth } from "@/auth";
import { z } from "zod";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    // console.log(result.error.flatten().fieldErrors); // we use flatten().fieldErrors for better presentation
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this"],
      },
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      // Handle specific error (err is an instance of Error class)
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      // Handle generic error (err is not an instance of Error class)
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  // TODO: revalidate the homepage
  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
}
