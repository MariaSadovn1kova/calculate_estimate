const db = require('../db')
class FormulaController{
    async getFormulas(req, res){
        const projects = await db.query('select * from "Formula" ORDER BY "ID"')
        res.json(projects.rows)
    }
    async getTechnicalFormula(req, res){
        const ID = req.params.id
        const projects = await db.query('select "TechnicalContent" from "Formula" where "ID" = $1', [ID])
        res.json(projects.rows)
    }
    async getFormula(req, res){
        const ID = req.params.id
        const projects = await db.query('select "Content" from "Formula" where "ID" = $1', [ID])
        res.json(projects.rows)
    }
    async updateFormula(req, res){
        const { ID, Content, TechnicalContent } = req.body
        const projects = await db.query('UPDATE "Formula" set "Content" = $1, "TechnicalContent" = $2 WHERE "ID" = $3 RETURNING *', [Content, TechnicalContent, ID])
        res.json(projects.rows[0])
    }
}

module.exports = new FormulaController()