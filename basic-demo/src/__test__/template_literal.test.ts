// 模板字面量类型
const passedObject = {
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
}


interface WatchObject<T> {
  on<Key extends string & keyof T>(event: `${Key}Changed`, callback: (value: T[Key]) => void) => void
}
function makeWatchObject<T>(obj: T): WatchObject<T> {

  return
}

const watchTarget = makeWatchObject(passedObject);
watchTarget.on('firstNameChanged', (value: string) => {

});
watchTarget.on('ageChanged', (value: number) => {

});