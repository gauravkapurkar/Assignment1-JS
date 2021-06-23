  
//   const treeData = [
//                         {
//                             id: 1,
//                             children: [
//                                         {
//                                             id: 2
//                                         }
//                             ]
//                         }, 
//                         {
//                             id: 3,
//                             children: [
//                                 {

//                                     id: 4,
//                                     children: [
//                                         {
//                                         id: 5
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
  

let data = {
    name : 'gk',
    age: 23,
    address:[{ 
                street: {
                    road :'new'
                },
                state: 'MH',
                country : 'Ind'
            },
            {
                room:1,
                area: 'rcp'
            },
            {   
                room:2,
                area: 'rcp new'
            }
        ]
};

function getPath (obj, name, val, path) {
    
    path = path || '';
  
    let samePath;
    if (!obj || typeof obj !== 'object') return;

    if (obj[name] === val) return `${path}/${name}`;

    for (const key of Object.keys(obj)) {
        if (key === name && obj[key] === val) {
            samePath = path;
        } else {
            samePath = getPath(obj[key], name, val, `${path}/${key}`);
        }

        if (samePath) break;

    }   
    return samePath;
}



console.log(getPath (data, 'road', 'new'));