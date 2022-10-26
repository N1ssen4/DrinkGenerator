import { fetcher } from "./fetchers";
import { DrinkError } from "../types/DrinkError";
import {Drink} from "../types/Types"
import swr from "swr";

export const useGetDrinks = (
  queryString: string
): {
  isLoading: boolean;
  DrinkError: DrinkError;
  data: Drink[] | undefined;
} => {
  const { data, error } = swr<Drink[]>(
    queryString
      ? `www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryString}`
      : null,
    fetcher
  );
  return {
    data,
    isLoading: !error && !data,
    DrinkError: error,
  };
};
