'use strict';

module.exports = function(Coupon) {

    Coupon.observe('before delete', (ctx, next)=>{
        var err = new Error("Not delete");
        //let P = ctx.Model.app.models.Product;
        Coupon.findById(ctx.where.id, function(err, model){            
            model.updateAttributes({inactive : true},(err, instance)=>{
                if (err) {
                    console.log(err);
                }
            });
        });

       return next(err);
    });


};
