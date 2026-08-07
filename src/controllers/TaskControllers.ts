import type { Request, Response } from "express";

import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
} from "../services/TaskService"

export async function create(req: Request, res: Response) {
    const { title } = req.body

    if (!title) {
        return res.status(400).json ({
            message: "O título é obrigatório.",
        })
    }

    const task = await createTask(title)
    
    return res.status(201).json(task)
}

export async function list(req: Request, res: Response) {
  const tasks = await getAllTasks()

  return res.status(200).json(tasks)
}

export async function findById(req: Request, res: Response) {
    const id = Number(req.params.id)

    const task = await getTaskById(id)

    if (!task) {
        return res.status(404).json({
            message: "Tarefa não encontrada.",
        })
    }

    return res.status(200).json(task)
}

export async function update(req: Request, res: Response) {
  const id = Number(req.params.id)

  const { title, completed } = req.body

  const task = await updateTask(
    id,
    title,
    completed
  )

  if (!task) {
    return res.status(404).json({
      message: "Tarefa não encontrada.",
    })
  }

  return res.status(200).json(task)
}

export async function remove(req: Request, res: Response) {
    const id = Number(req.params.id)

    const deleted = await deleteTask(id)

    if (!deleted) {
        return res.status(404).json({
            message: "Tarefa não encontrada."
        })
    }

    return res.status(204).send()
}