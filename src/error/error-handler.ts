
import { Response, Request, NextFunction } from "express"
const { CustomAPIError } = require('../error/custom-api')
const { StatusCodes } = require('http-status-codes')

interface Error{
  statusCode: number,
  message: string
}

const errorHandlerMiddleware = (err:Error, req: Request, res: Response, next:NextFunction) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })
}

module.exports = errorHandlerMiddleware