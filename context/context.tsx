import Meal from "@/models/meal";
import { ReactNode, createContext, useState } from "react";

interface IFavContext {
  favouriteMealArr: Meal[];
  addToFavourite: (meal: Meal) => void;
  removeFromFavourite: (mealId: string) => void;
}

export const FavContext = createContext<IFavContext>({
  favouriteMealArr: [],
  addToFavourite: (meal: Meal) => {},
  removeFromFavourite: (mealId: string) => {},
});

export const FavContextProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteMealArr, setFavouriteMealArr] = useState<Meal[]>([]);

  const addToFavourite = (meal: Meal) => {
    setFavouriteMealArr((prev) => [meal, ...prev]);
  };

  const removeFromFavourite = (mealId: string) => {
    setFavouriteMealArr((prev) => prev.filter((meal) => meal.id !== mealId));
  };

  return (
    <FavContext.Provider
      value={{ addToFavourite, removeFromFavourite, favouriteMealArr }}
    >
      {children}
    </FavContext.Provider>
  );
};
