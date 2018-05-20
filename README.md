# meridian
small coupon app

#General
This Application was implemented with the next framewoks/tools

- Node.js Version 9.7.1 (Linux)
- npm 6.0.0
- MongoDB Version 3.6.4
- Angular 5
- Express.js
- Loopback version 3.X
- Linux Ubuntu as development platform 18.04
- VS Code was used for IDE version 1.23.1
- Git Flow was used as methodology for organized work flow.
In this case, initial branch was master, so i created second branch "develop". Over this branch i created all sub branches feature-XXX

##Application

The app, manage a little coupons system with 2 roles.

Admin: the user admin is created by default in the boot scripts of Loopback. Of course the user is created in DB.
the user by default is
email: jhonemillan@gmail.com
password: devel

In this manner the users are separated

Admin user has access to Manage Products and Manage Coupons.

The other users with no admin role, are considered "customers", and has access to the shopping module only.

The application has a login module, so all rooutes has authentication validation to perform them, in that case is necessary login with admin or customer role.

Is important that API and Site are located in the sabe root folder, but run in different ports.
In this case is necessary to run APi apart, and run anglar site in other port as 4200.

The customers only can check products and coupons valid as active (the admin can set inactive in any moment a project or coupon)

All operations about update inactive are performed by delete http operations. In this case i used
the remote operation hooks offered by Loopback to perform methods as "before save" or "before delete"

##User History

HU6: This is incompleted, so i think the best option is to perform an operation hook and intercept the save method of purchase.

HU9: Is very easy, is only some code in angular component.

The coupon has to be applied to purchase before save it.

The authentication can be better, and role management.  