const data = {
    name : 'gk',
    age: 23,
    details : {
            company : 'jio'
    },
    address:[{ 
                street: {
                    road :'new railroad'
                },
                state: 'MH',
                country : 'Ind'
            },
            {
                room:1,
                area: 'rcp',
            },
            {   
                room:2,
                area: 'rcp newer'
            }
        ]
};


function getVal(object, keyArg, path) {
    path = path || '';
    //checking object is proper
    if (!object || typeof(object) !== 'object') return;

    //accessing properties of an object
    for (const prop in object) {
        
        if(typeof(object[prop]) == 'object'){
            //calling same function to get down till we get objects
            const result = getVal(object[prop], keyArg, `${path}/${prop}`);
            if (result) {
                return result;
            }
        }
        else{
            //checking that prop string matches with key
            if(prop == keyArg){
                // console.log(`value = ${object[prop]}`);
                // console.log(typeof object[prop]);
                // console.log(`path = ${path}`);
                var newPath = `${path}/${prop}` ;
                var value = object[prop];
//                 var res = `${value}
// ${newPath}`;
                return [value, newPath];
            
            }
        }
    }
}

let arg = 'area';
let val = getVal(data, arg,'data');
console.log(`value = ${val[0]}`);
console.log(`path = ${val[1]}`);