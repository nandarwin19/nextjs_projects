import DrinkList from "./../../components/Drink";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(url);

  //throw an error
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();

  return (
    <div>
      <DrinkList drinkDatas={data.drinks} />
    </div>
  );
};

export default DrinksPage;
