const db = require('../database/index')

module.exports = {
  getAllProducts : (req, res) => {
    const query = `select * from Products;`
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
  addProduct : (req,res) => {
    console.log('Query :', req.query);
    console.log('Body :' ,req.body);
  
    const query =   `INSERT INTO products SET ?`
    db.query(query, req.body, (err, results) => {
    if(err){
      return res.status(500).send(err)
    }
    res.status(200).send(results)
    })
  },
  editProduct : (req, res) => {
    const query = `UPDATE products SET ? WHERE id = ${db.escape(req.params.id)}`  
    db.query(query, req.body, (err,results) => {
    if(err){
      console.log(err);
      return res.status(500).send(err)
    }
    res.status(200).send(results)
    })
  },
  deleteProduct : (req, res) => {
    console.log(req.params.id);
    const query = `DELETE FROM products WHERE id = ${db.escape(req.params.id)}`
    db.query(query, (err,results) => {
    if(err){
      console.log(err);
      return res.status(500).send(err)
    }
    res.status(200).send(results)
    })
  }
}