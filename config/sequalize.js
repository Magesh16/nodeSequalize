import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(
    'NodeReact',
    'postgres',
    'magidexter',
    {
  host: 'localhost',
  dialect: 'postgres'
});

export default sequelize;

  