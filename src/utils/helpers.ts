import { PropertyFor } from "./enums";

function enumToStringArray<Type extends PropertyFor>(arg: Type): string[] {
  let result: string[] = [];
  const isString = (val: number | string) => isNaN(+val);
  result = Object.keys(arg)
    .filter(isString)
    .map((k: string) => arg[k as any]);
  return result;
}
export { enumToStringArray };
