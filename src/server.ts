import express from 'express';
import { eventoRoutes } from './routes/evento.routes'

const app = express()

app.use(express.json())

app.use(eventoRoutes)

app.listen(3333)