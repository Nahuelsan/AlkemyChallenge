const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const preload = require('./databasePreload');
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    preload();
    console.log('Estamos ready' + process.env.PORT || 3001); 
  });
});