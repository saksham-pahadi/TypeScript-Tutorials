type IsString<T> = T extends string ? true : false;
type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
const value1: Test1 = true; // This is valid
const value2: Test2 = false; // This is valid


type ApiResponse<T> =
  T extends string
    ? { message: T }
    : { data: T };
type StringResponse = ApiResponse<string>; // { message: string }
type NumberResponse = ApiResponse<number>; // { data: number }
const response1: StringResponse = { message: "Success" }; // This is valid
const response2: NumberResponse = { data: 42 }; // This is valid


type Flatten<T> = T extends any[] ? T[number] : T;
type FlattenedArray = Flatten<string[]>; // string
type FlattenedNonArray = Flatten<number>; // number 
const flattenedValue1: FlattenedArray = "Hello"; // This is valid
const flattenedValue2: FlattenedNonArray = 123; // This is valid
