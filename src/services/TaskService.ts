import prisma from "../config/prismaClient"


export async function createTask(title: string) {
    const task = await prisma.task.create ({
        data: {
            title,
        },
    }) 
    

    return task
}


export async function getAllTasks() {
    const task = await prisma.task.findMany ({
        orderBy: {
            id: "asc",
        },
    })
    
    return task
}

export async function getTaskById(id: number) {
    const tasks = await prisma.task.findUnique({
        where: {
            id,
        },
    })
    
    return tasks
}

export async function updateTask(
    id: number,
    title?: string,
    completed?: boolean
) {
    const existingtask = await prisma.task.findUnique({
        where: {
            id,
        },
    })

    if (!existingtask) {
        return null
    }

    const task = await prisma.task.update({
        where: {
            id,
        },
        data: {
            ...(title !== undefined && { title }),
            ...(completed !== undefined && { completed }),
        },
    })
    

    return task
}

export async function deleteTask(id: number) {
    const existingtask = await prisma.task.findUnique({
        where: {
            id,
        },
    })

    if (!existingtask){
        return false
    }

    await prisma.task.delete({
        where: {
            id,
        },
    })

    return true
}