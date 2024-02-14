import { isArray } from "lodash";

export const test = (name: string = "abc") => {
  console.log("testing 123 successfully", name);
};

export const checkArray = isArray;
