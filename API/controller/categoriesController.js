const db = require('../database/index')

module.exports = {
  getCategories : (req, res) => {
    console.log(req.query);
    
    const query = `select * from completeCategories;`
    console.log(query);
  
    db.query(query,  (error, results, fields) => {
    if (error){
      return res.status(500).send(error);
    }
    console.log('Error :', error);
    console.log('Results :', results);
    console.log('Fields :', fields);
    
    
    res.send(results).status(200)
    });
  },

  getCategoriesbyName : (req, res) => {
    console.log(req.params.nama);
  
    const query = `SELECT * FROM categories WHERE category = '${(req.params.nama)}'`

    console.log(query);
  
    db.query(query,  (error, results, fields) => {
    if (error){
      return res.status(500).send(error);
    }
    console.log('Error :', error);
    console.log('Results :', results);
    console.log('Fields :', fields);

    res.send(results).status(200)
    });

  },

  addCategories : (req,res) => {
    console.log('Query :', req.query);
    console.log('Body :' ,req.body);
  
    const query =   `INSERT INTO categories SET ?`
    db.query(query, req.body, (err, results) => {
    if(err){
      return res.status(500).send(err)
    }
    res.status(200).send(results)
    })
  },
  editCategories : (req, res) => {
    const query = `UPDATE categories SET ? WHERE id = ${db.escape(req.params.id)}`  
    db.query(query, req.body, (err,results) => {
    if(err){
      console.log(err);
      return res.status(500).send(err)
    }
    res.status(200).send(results)
    })
  },
  deleteCategories : (req, res) => {
    console.log(req.params.id);

    const query = `DELETE FROM categories WHERE id = ${db.escape(req.params.id)}`
    db.query(query, (err,results) => {
    if(err){
      console.log(err);
      return res.status(500).send(err)
    }
    res.status(200).send(results)
    })
  }
}