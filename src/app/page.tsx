import TopicCreateForm from "@/components/topics/topic-create-form";

export default async function Home() {
  return (
    <div className="relative grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3 ">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="col-span-1 text-end">
        <TopicCreateForm />
      </div>
    </div>
  );
}
