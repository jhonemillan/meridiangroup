module.exports = function(app, cb){
let Role = app.models.Role;
let Product = app.models.Product;
let User = app.models.User;
let RoleMapping = app.models.RoleMapping;

Role.findOrCreate({name: "admin"});
Role.findOrCreate({name: "customer"});

User.find({"email": "jhonemillan@gmail.com"},function(err, obj){    
    if (err) {
        throw err;
    }
        if(!obj.length){
            console.log('user no existe');
            User.create({"email": "jhonemillan@gmail.com", "password":"devel"}, function(err, newuser){
                Role.find({where: {name: "admin"}}, function(err, role){
                    console.log(role);                    
                    RoleMapping.create({principalType: RoleMapping.USER,  principalId: newuser.id, roleId: role[0].id}, (err, obj)=>{
                        if(err) throw err;
                        console.log(obj);
                    })
                });                
            });
        }
});

process.nextTick(cb);
}