import { NextFunction, Request, Response } from "express"

export const isCreateRouteValid = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  if (!body.name) return res.status(400).json({ error: 'Request body is empty' })
  next()
}

export const isUpdateRouteValid = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req
  if (!body) return res.status(400).json({ error: 'Request body is empty' })
  next()
}

