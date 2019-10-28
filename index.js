const Student = require('./student.js')
const Asana = require('./asana.js')
const Database = require('./database.js')
const sqlite3 = require('sqlite3')

galina = new Student('Galina', 'intermediate')
galina.request(45, 'forward bend')

//this part till row 27 is WIP. It should become part of the request method of student or
db = new sqlite3.Database('./db/asana-db.db')

sql = 'SELECT name_english eng, name_sanskrit sans, emphases emp from ASANAS where emphases = '
 + "'" + galina.requestedSequence[0].emphasis + "'";
 
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    row.eng = new Asana (row.eng, row.sans, 'dummy', row.emp, [])
    galina.requestedSequence[0].addAsana(row.eng)
  });
  galina.requestedSequence[0].printAsanas()  
});
 
db.close();

Database.save('galina.json', galina)