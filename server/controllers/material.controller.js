const db = require('../db')
class MaterialController{
    async getReinforcement(req, res){
        const projects = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Арматура'])
        res.json(projects.rows)
    }
    async getBrick(req, res){
        const projects = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Кирпич'])
        res.json(projects.rows)
    }
    async getBoard(req, res){
        const projects = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Доска'])
        res.json(projects.rows)
    }
    async getConcrete(req, res){
        const projects = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Бетон'])
        res.json(projects.rows)
    }
    async getBlock(req, res){
        const projects = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Блок'])
        res.json(projects.rows)
    }
    async getBeam(req, res){
        const projects = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Брус'])
        res.json(projects.rows)
    }
    async getOther(req, res){
        const projects = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Прочее'])
        res.json(projects.rows)
    }
}


module.exports = new MaterialController()