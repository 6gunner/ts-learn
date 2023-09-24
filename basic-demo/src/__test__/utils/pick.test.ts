interface ToDo {
  name: string,
  done: boolean
  description: string
}

type ToDoPreview = Pick<ToDo, "name" | "done">

const todo: ToDoPreview = {
  name: "Clean room",
  done: false,
};
