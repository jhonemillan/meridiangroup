module.exports = function(app){
let Role = app.models.Role;
let User = app.models.User;
let RoleMapping = app.models.RoleMapping;

Role.findOrCreate({"name": "admin"});
Role.findOrCreate({"name": "customer"});

User.find({"email": "jhonemillan@gmail.com"}).then((user)=>{

    if(!user){
        console.log(user);
        User.create({"email": "jhonemillan@gmail.com", "password":"devel"}).then((newuser)=>{
            Role.find({"name": "admin"}).then((role)=>{
                role.principals.create({principalType: RoleMapping.USER,  principalId: newuser.id}).then(()=>{console.log("rol assigned")}).catch((err)=>{ throw err;})
            });        
        });
    }

    // Role.find({"name": "admin"}).then((role)=>{
    //     if (role) {
    //         role.principals.create({principalType: RoleMapping.USER,  principalId: user.id}).then(()=>{console.log("rol assigned")}).catch((err)=>{ throw err;})
    //     }

    // }).catch((err)=>{console.log(err)});

}).catch((err)=>{throw err;});

}