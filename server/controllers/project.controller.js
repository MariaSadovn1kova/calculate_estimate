const db = require('../db')
class ProjectController{
    async createProject(req, res){
        const { Date, CustomerFullName, Address, PhoneNumber, Email, Comment, ResponsibleEmployeeFullName, Status} = req.body
        const newProject  = await db.query(
            `INSERT INTO "Project" ("Date","CustomerFullName","Address","PhoneNumber","Email","Comment","ResponsibleEmployeeFullName","Status") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [Date, CustomerFullName, Address, PhoneNumber, Email, Comment, ResponsibleEmployeeFullName, Status]
        )
        res.json(newProject.rows[0])
    }
    
    async getProject(req, res){
        const projects = await db.query('SELECT * FROM "Project"')
        res.json(projects.rows)
    }
    
    async getOneProject(req, res){

    }
    
    async updateProject(req, res){

    }

    async deleteProject(req, res){

    }
}

module.exports = new ProjectController()