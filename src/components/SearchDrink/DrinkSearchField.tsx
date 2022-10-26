import { Combobox } from "@headlessui/react";
import { atom, useAtom } from "jotai";
import { ChangeEvent } from "react";
import { useGetDrinks } from "utils/useGetDrinks";

export const inputAtom = atom<string>("")

const DrinkSearchField = () => {
    
    return (
      <>
        <p>
          Currently under construction...
        </p>
          
      </>
    );
};

export default DrinkSearchField;