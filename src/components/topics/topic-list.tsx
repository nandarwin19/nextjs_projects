import { db } from "@/db";
import paths from "@/paths";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderTopic = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <h1>{topic.slug}</h1>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-start justify-start">{renderTopic}</div>
  );
}
