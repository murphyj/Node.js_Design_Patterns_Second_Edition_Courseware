const fs = require('fs');

function loadModule(filename, module, require) {
    const wrappedSrc=`(function(module, exports, require) {  
      ${fs.readFileSync(filename, 'utf8')}  
    })(module, module.exports, require);`;
    eval(wrappedSrc);
}

const loads = (moduleName) => {
    console.log(`Require invoked for module: ${moduleName}`);
    const id = loads.resolve(moduleName);      //[1]
    if(loads.cache[id]) {                      //[2]
        return loads.cache[id].exports;
    }

    //module metadata
    const module = {                             //[3]
        exports: {},
        id: id
    };
    //Update the cache
    loads.cache[id] = module;                  //[4]

    //load the module
    loadModule(id, module, loads);             //[5]

    //return exported variables
    return module.exports;                       //[6]
};

loads.cache = {};

loads.resolve = (moduleName) => {
    /* resolve a full module id from the moduleName */
    return moduleName;
};

//load another dependency
const dependency = loads('./anotherModule.js');

//a private function
function log() {
    console.log(`Well done ${dependency.username}`);
}

//the API to be exported for public use
log();