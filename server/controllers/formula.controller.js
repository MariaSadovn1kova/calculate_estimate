const db = require('../db')
class FormulaController{
    async getFormulas(req, res){
        const projects = await db.query('SELECT * FROM "Formula"')
        res.json(projects.rows)
    }
    async updateFormula(req, res){
        const {ID, Content} = req.body;
        const projects = await db.query('UPDATE "Formula" set "Content" = $1 WHERE "ID" = $2 RETURNING *', [Content, ID])
        res.json(projects.rows)
    }
}

module.exports = new FormulaController()