'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

//   router.update('/api/counpon/inactive', function(req, res) {
//     console.log(Product);
//   Coupon.findOne({where: {code: req.params.code}}, (err, model)=>{
//     if (err) res.send(err);
//     model.updateAttributes({inactive : true},(err, instance)=>{
//         if (err) {
//             console.log(err);
//         }

//         res.send(instance);
//     });
//   })
// });


  server.use(router);
};
