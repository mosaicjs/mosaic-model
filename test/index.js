require("babel/register")({
    // This will override `node_modules` ignoring - you can alternatively pass
    // an array of strings to be explicitly matched or a regex / glob
    ignore : false
});
require('./AccessRulesTest');
require('./ModelEntityTest');
require('./ResourceTest');
require('./RoleTest');
require('./SessionTest');
require('./CommandTest');
//require('./ModelTest');
