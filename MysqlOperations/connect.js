const mysql = require('mysql2/promise');

// Connect to our db on the cloud
module.exports = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'database-1.chrcwgi8wrbt.us-east-1.rds.amazonaws.com',
      user: 'cis557',
      password: 'cis557+mysql',
      database: 'game_test',
    });
      // Connected to db
    console.log(`Connected to database: ${connection.connection.config.database}`);
    return connection;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};