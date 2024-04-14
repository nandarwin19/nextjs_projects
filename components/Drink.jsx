import Link from "next/link";
import React from "react";
import Image from "next/image";

const DrinkList = ({ drinkDatas }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinkDatas.map((drink) => (
        <li
          key={drink.idDrink}
          className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg"
        >
          <Link
            className="text-xl font-medium"
            href={`/drinks/${drink.idDrink}`}
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />
            </div>
            <p className="text-[16px]">Name: {drink.strDrink}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
