const db = require('../db')
class MaterialController{
    async getReinforcement(req, res){
        const materials = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Арматура'])
        res.json(materials.rows)
    }
    async getBrick(req, res){
        const materials = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Кирпич'])
        res.json(materials.rows)
    }
    async getBoard(req, res){
        const materials = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Доска'])
        res.json(materials.rows)
    }
    async getConcrete(req, res){
        const materials = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Бетон'])
        res.json(materials.rows)
    }
    async getBlock(req, res){
        const materials = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Блок'])
        res.json(materials.rows)
    }
    async getBeam(req, res){
        const materials = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Брус'])
        res.json(materials.rows)
    }
    async getRoofMaterial(req, res){
        const materials = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Кровельный материал'])
        res.json(materials.rows)
    }
    async getOther(req, res){
        const materials = await db.query('select * from "BuildingMaterial" WHERE "Type" = $1 ORDER BY "ID"', ['Прочее'])
        res.json(materials.rows)
    }
    async updateMaterial(req, res){
        const { Name, Type, DeclaredValue, UnitOfMeasurement, ID} = req.body
        const material = await db.query('UPDATE "BuildingMaterial" SET "Name" = $1, "Type" = $2, "DeclaredValue" = $3,"UnitOfMeasurement" = $4 WHERE "ID" = $5 RETURNING *', [Name, Type, DeclaredValue, UnitOfMeasurement, ID])
        res.json(material.rows[0])
    }
    async deleteMaterial(req, res){
        const ID = req.params.id
        const material = await db.query('DELETE FROM "BuildingMaterial" WHERE "ID" = $1', [ID])
        res.json(material.rows[0])   
    }
    async createMaterial(req, res){
        const { Name, Type, DeclaredValue, UnitOfMeasurement, Quantity } = req.body
        const newMaterial  = await db.query(
            `INSERT INTO "BuildingMaterial" ("Name", "Type", "DeclaredValue", "UnitOfMeasurement", "Quantity") VALUES ($1, $2, $3, $4, $5) RETURNING *`, [Name, Type, DeclaredValue, UnitOfMeasurement, Quantity]
        )
        res.json(newMaterial.rows[0])
    }
    async getAccounting(req, res){
        const ID = req.params.id
        const accounting = await db.query('select * from "Accounting" WHERE "BuildingMaterial_ID" = $1 AND ("OperationType" = $2 OR "OperationType" = $3) ORDER BY "ID"', [ID, 'Закупка', 'Удаление'])
        res.json(accounting.rows)
    }
    async createAccounting(req, res){
        const { BuildingMaterial_ID, Quantity, OperationType, Date, Price } = req.body
        const accounting = await db.query(`INSERT INTO "Accounting" ("BuildingMaterial_ID","Quantity","OperationType","Date","Price") VALUES ($1, $2, $3, $4, $5) RETURNING *`, [BuildingMaterial_ID, Quantity, OperationType, Date, Price])
        res.json(accounting.rows)
    }
    async updateMaterialPrice(req, res){
        const { Quantity, ID } = req.body
        const material = await db.query('UPDATE "BuildingMaterial" SET "Quantity" = $1 WHERE "ID" = $2 RETURNING *', [Quantity, ID])
        res.json(material.rows[0])
    }
}

module.exports = new MaterialController()