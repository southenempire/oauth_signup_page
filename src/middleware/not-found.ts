import  {Request, Response} from "express"

const notFound = (req: Request, Response: Response) => {
    Response.status(404).send('Route does not exist')}
module.exports = notFound