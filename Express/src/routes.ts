
import express from "express";
import { isCreateRouteValid, isUpdateRouteValid } from "./middleware/isRouteValid.middleware";
import Todo from "./schema/todo.schema";

const router = express.Router()

router.get("/get-todo-items", async (req, res, next) => {
  try {
    const todoItems = await Todo.customGet()
    res.status(200).json({ data: todoItems })
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
})

router.post("/create-todo-item", isCreateRouteValid, async (req, res, next) => {
  try {
    const { body } = req
    Todo.customCreate(body.name, body.description).then(() => {
      res.status(200).json({ message: "Added" })
    })
  } catch (error: any) {
    res.status(404).json({ error: error.message })
  }
})

router.put("/update-todo-item/:id", isUpdateRouteValid, async (req, res, next) => {
  try {
    const { params } = req
    const { body } = req
    Todo.customUpdate(params.id, body)
      .then(() => res.status(200).json({ message: "Updated" }))
  } catch (error: any) {
    res.status(404).json({ error: error.message })

  }
})

router.delete("/delete-todo-item/:id", async (req, res, next) => {
  try {
    const { params } = req
    Todo.customDelete(params.id)
      .then(() => res.status(200).json({ message: "Deleted" }))
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
})

export default router;
