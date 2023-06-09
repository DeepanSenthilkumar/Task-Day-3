

var user = { name: "person", age: 5};
var user1 = { age: 5, name: "person"};

function isEqual(json1 , json2){
    // console.log(user);
    var obj1keys = Object.keys(user);
    var obj2keys = Object.keys(user1);
    // console.log(obj1keys);
    if (obj1keys.length != obj2keys.length){
        return false;
    }

    for (var userkey of obj1keys){
        if (user[userkey] != user1[userkey]){
            return false;
        }
    
    }
    return true;
}
console.log(isEqual(user , user1));

