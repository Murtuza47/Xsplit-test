import { model, Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from "../interface/ITodo.interface";
import { ITodoModel } from "../interface/ITodoModel.interface";

const todoSchema = new Schema<ITodo>({
  _id: String,
  name: String,
  description: String,
  createdAt: Date,
  status: {
    type: String,
    enum: ['complete', 'incomplete']
  }
});

todoSchema.statics.customCreate = async function (name: string, description?: string) {
  const createdTodoItem: ITodo = await this.create({
    _id: uuidv4(),
    name,
    description,
    status: 'incomplete',
    createdAt: new Date()
  });
  return createdTodoItem;
}

todoSchema.statics.customUpdate = async function (_id: string, selector) {
  const todoItem: ITodo = await this.findOne({ _id }).lean();
  if (!todoItem) throw new Error('Todo item not found');
  const newTodoItem = {
    ...todoItem,
    ...selector
  }
  return await this.updateOne({ _id }, newTodoItem)
}

todoSchema.statics.customDelete = async function (_id: string) {
  const todoItem: ITodo = await this.findOne({ _id }).lean();
  if (!todoItem) throw new Error('Todo item not found');
  this.deleteOne({ _id })
    .then(() => 'Todo item is deleted')
    .catch(() => 'Todo item is not deleted')
}

todoSchema.statics.customGet = async function () {
  const todoItems: ITodo[] = await this.find().lean();
  return todoItems
}

const todoModelSchema = model<ITodo, ITodoModel<ITodo>>('Todo', todoSchema, 'todo');

export default todoModelSchema;