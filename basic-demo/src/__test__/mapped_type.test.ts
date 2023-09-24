/**
 *  映射修饰符
 */
type CreateMutable<T> = {
  -readonly [key in keyof T]: T[key]
}

type DeleteOptionableProperty<T> = {
  [key in keyof T]-?: T[key]
}

type LockedPerson = {
  readonly name: string;
  readonly age: number;
  hobbies?: string[]
}

type UnLockedPerson = CreateMutable<LockedPerson>

type MustHaveHobbiesPerson = DeleteOptionableProperty<UnLockedPerson>
// type MustHaveHobbiesPerson = {
//   name: string;
//   age: number;
//   hobbies: string[];
// }


type MappedTypeWithNewProperties<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: Type[Property]
}
interface Person {
  name: string;
  age: number;
  location: string;
}
type GetterPerson = MappedTypeWithNewProperties<Person>
// type GetterPerson = {
//   getName: string;
//   getAge: number;
//   getLocation: string;
// }


// 利用映射删除某一个字段
type DeleteSomeProperties<Type> = {
  [Key in keyof Type as Exclude<Key, 'kind' | 'type'>]: Type[Key]
}
interface Circle {
  kind: "circle";
  type: "circle";
  radius: number;
}
type KindlessCircle = DeleteSomeProperties<Circle>;

// 利用as映射，生成一个function
type EventConfig<T extends { kind: string }> = {
  [E in T as T["kind"]]: (e: E) => void;
}
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
type Config = EventConfig<SquareEvent | CircleEvent>
// type Config = {
//   square: (e: SquareEvent | CircleEvent) => void;
//   circle: (e: SquareEvent | CircleEvent) => void;
// }

export { }