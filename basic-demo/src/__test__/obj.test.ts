interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// number的索引返回的类型，一定要是string索引返回类型的子类。 
// 用100做索引去找时，实际上是去匹配"100"，但是Animal不能分配给Dog，所以报错了
// Error: indexing with a numeric string might get you a completely separate type of Animal!
// interface NotOkay {
//   [x: number]: Animal;
//   // 'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.
//   [x: string]: Dog;
// }

interface Okay {
  [x: number]: Dog;
  [x: string]: Animal;
}

/// 数据字典类型
type Dict<T> = {
  [key: string]: T
}

const OrderStatusDict: Dict<number> = {
  'new': 0,
  "pending pay": 1,
  "pay confirming": 2
}


