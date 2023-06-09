let obj = new XMLHttpRequest();
obj.open('GET', 'https://restcountries.com/v3.1/all');
obj.responseType = 'json';

obj.send();
obj.onload = function (){
    let a = obj.response;
    // console.log(a);
    let a_countries = a.filter((items)=>{
        return items.continents == "Asia";
    })
    // console.log(a_countries)
    let countries = a_countries.map((items)=>{
        // return items.name.common;
        return (`country ${items.name.common},Region ${items.region},Subregion ${items.subregion},Population ${items.population}`);

});
    console.log(countries);
}
 