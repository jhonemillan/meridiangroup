module.exports = function(app) {
    let router = app.loopback.Router();
    let Product = app.models.Product;
    let Coupon = app.models.Coupon;

    router.get('/api/products/active', function(req, res) {
        console.log(Product);
      Product.find({where: {inactive: false}}, (err, products)=>{
        if (err) res.send(err);
        res.send(products);
      })
    });

    
    app.use(router);
  }