/// 条件类型推断
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
type Name = NameOrId<string>
type Id = NameOrId<number>

/// infer
type Flatten<T> = T extends any[] ? T[0] : never;
type Flatten2<T> = T extends Array<infer Item> ? Item : never;

type NumItem1 = Flatten<number[]>
type NumItem = Flatten2<number[]>

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never
type NumReturn = GetReturnType<() => number>
declare function stringOrNum(x: string | number): string | number;
type T1 = GetReturnType<typeof stringOrNum>

/// 条件类型分发
type ToArray<T> = T extends any ? T[] : any[];
// 用[]包裹起来
type ToArrayNoDistribute<T> = [T] extends [any] ? T[] : any[];

type NumArray = ToArray<number>;
type StringArray = ToArray<string>;

// 这个自动分发可能不是我们想要的
type NumOrStringArray = ToArray<number | string>;
// type NumOrStringArray = number[] | string[]

type NumOrStringNoDistributeArray = ToArrayNoDistribute<number | string>;
// type NumOrStringNoDistributeArray = (string | number)[]


