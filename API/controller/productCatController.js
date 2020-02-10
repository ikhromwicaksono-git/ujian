const db = require('../database/index')

module.exports = {
  getAllProCat : (req,res) => {
      const query = `Select 
                        p.nama,
                        c.category
                    From products p join productcat pc on p.id = pc.productId
                        join categories c on pc.categoryId = c.id`;
      db.query(query, (err, results) => {
        if(err){
          return res.results(500).send(err)
        }
        res.status(200).send(results)
        
      })
  },
  addProCat : (req,res) => {

    let { productId, categoryId  } = req.body
    let sqlgetProId = `SELECT * from products where id = ${productId}`
    
    db.query(sqlgetProId ,(err, results) => {
      if(err){
        return res.status(500).send(err)
      }
      let sqlgetCatId = `SELECT * from leafNodes where id = ${categoryId};`
      db.query(sqlgetCatId, (err1,results1) => {
        if(err1){
          return res.status(500).send(err)
        }
        let sql = `INSERT into productcat(categoryId, productId ) values ('${results1[0].id}', ${results[0].id});`
        db.query(sql, (err2, results2) => {
          if(err2){
            return res.status(500).send(err2)
          }
          return res.status(200).send(results2)
        })
      })                   
    })
  },
  deleteProdCat : (req,res) => {
    
    const query = `DELETE FROM productcat WHERE productId = ${db.escape(req.params.id)}`
    db.query(query, (err,results) => {
    if(err){
      console.log(err);
      return res.status(500).send(err)
    }
    res.status(200).send(results)
    })
  
  }
}