import { Sequelize } from "sequelize";

const db = new Sequelize('dbnodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db