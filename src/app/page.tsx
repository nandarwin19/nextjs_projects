import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "@/components/topics/topic-list";
import { Divider } from "@nextui-org/react";

export default async function Home() {
  return (
    <div className="relative flex justify-between gap-4 p-4">
      <div>
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="shadow-lg py-6 px-4">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h1 className="text-lg font-bold mb-2">Topics</h1>
        <TopicList />
      </div>
    </div>
  );
}
