var obj = new XMLHttpRequest();
obj.open('GET', 'https://restcountries.com/v3.1/all');
obj.responseType = 'json';

obj.send();
obj.onload = function (){
    var a= obj.response;
    // console.log(a);
    for(var i = 0; i < a.length; i++){
        
        console.log(a[i].flag);
    }
    // another method to print flags using map method.
    // let flags = a.map((country)=>{
    //     return country.flag;
    // });
    // console.log(flags);
}