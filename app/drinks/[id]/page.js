import Image from "next/image";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data....");
  }
  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const name = data?.drinks[0]?.strDrink;
  const image = data?.drinks[0]?.strDrinkThumb;
  console.log(image);
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <div className="bg-gray-800 w-60 flex flex-col items-center justify-center py-4 rounded-lg">
        <Image
          src={image}
          width={400}
          height={400}
          priority
          alt={name}
          className="w-52 h-52 rounded-lg shadow-lg mb-2"
        />

        <h1 className="text-md">{name}</h1>
      </div>
    </div>
  );
};

export default SingleDrinkPage;
