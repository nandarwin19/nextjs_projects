interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">{slug}</h1>
    </div>
  );
}
