interface ToDo {
  name: string,
  done: boolean
  description: string
}

type PartialToDo = Partial<ToDo>;

function updateTodo(todo: ToDo, fieldsToUpdate: PartialToDo) {
  return { ...todo, ...fieldsToUpdate };
}


