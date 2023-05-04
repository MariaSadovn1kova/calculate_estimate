const express = require('express')
const projectRouter = require('./routes/project.routes')
const PORT = process.env.PORT || 8080

const app = express()

app.use('/api', projectRouter)
app.use(express.json())
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))   