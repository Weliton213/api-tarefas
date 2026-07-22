import { Router } from "express";

import {
    create,
    list,
    findById,
    update,
    remove,
} from "../controllers/TaskControllers"

const taskRoutes = Router()

taskRoutes.post("/", create)
taskRoutes.get("/", list)
taskRoutes.get("/:id", findById)
taskRoutes.put("/:id", update)
taskRoutes.delete("/:id", remove)


export default taskRoutes