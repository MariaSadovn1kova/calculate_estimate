const express = require('express')
const projectRouter = require('./routes/project.routes')
const formulaRouter = require('./routes/formula.routes')
const PORT = process.env.PORT || 3000
const cors = require('cors') 

const app = express()

app.use(cors ({
    origin: "http://localhost:8080"
}))

app.use(express.json())

app.use('/api', projectRouter)
app.use('/api', formulaRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))   