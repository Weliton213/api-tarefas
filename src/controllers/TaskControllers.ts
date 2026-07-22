import type { Request, Response } from "express";

import {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
} from "../services/TaskService"

export function create(req: Request, res: Response) {
    const { title } = req.body

    if (!title) {
        return res.status(400).json ({
            message: "O título é obrigatório.",
        })
    }

    const task = createTask(title)
    
    return res.status(201).json(task)
}

export function list(req: Request, res: Response) {
  const tasks = getAllTasks()

  return res.status(200).json(tasks)
}

export function findById(req: Request, res: Response) {
    const id = Number(req.params.id)

    const task = getTaskById(id)

    if (!task) {
        return res.status(404).json({
            message: "Tarefa não encontrada.",
        })
    }

    return res.status(200).json(task)
}

export function update(req: Request, res: Response) {
  const id = Number(req.params.id)

  const { title, completed } = req.body

  const task = updateTask(
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

export function remove(req: Request, res: Response) {
    const id = Number(req.params.id)

    const deleted = deleteTask(id)

    if (!deleted) {
        return res.status(404).json({
            message: "Tarefa não encontrada."
        })
    }

    return res.status(204).send()
}