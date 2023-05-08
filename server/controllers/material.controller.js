const db = require('../db')
class MaterialController{
    async getReinforcement(req, res){
        const projects = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Арматура'])
        res.json(projects.rows)
    }
}

module.exports = new MaterialController()