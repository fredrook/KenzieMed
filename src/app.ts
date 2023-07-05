import "reflect-metadata"
import express from "express"
import "express-async-errors"
import handleErrorMiddleware from "./middlewares/handleError.middleware"
import loginRouter from "./routes/login.routes"
import userRoutes from "./routes/user.routes"
import scheduleRoutes from "./routes/schedules.routes"
import doctorsRoutes from "./routes/doctor.routes"
import specialtyRoutes from "./routes/specialties.routes"

const app = express()
app.use(express.json())

// Configurar cabeçalhos CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  next()
})

// Tratar requisições OPTIONS separadamente
app.options("*", (req, res) => {
  res.sendStatus(200)
})

app.use("/login", loginRouter)
app.use("/users", userRoutes)
app.use("/doctors", doctorsRoutes)
app.use("/specialties", specialtyRoutes)
app.use("/schedules", scheduleRoutes)

app.use(handleErrorMiddleware)

export default app
