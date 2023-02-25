// COlor ra images and socialMedia todo
module.exports = function(florist,floristData){
    if(floristData.name)
        florist.name = floristData.name;
    if(floristData.username)
        florist.username = floristData.username;
    if(floristData.image)
        florist.image = floristData.image;
    if(floristData.area)
        florist.area = floristData.area;
    if(floristData.city)
        florist.city = floristData.city;
    if(floristData.description)
        florist.description = floristData.description;
    if(floristData.email)
        florist.email = floristData.email;
    if(floristData.website)
        florist.website = floristData.website;
    if(floristData.number)
        florist.number = floristData.number;
    if(floristData.color)
        florist.color = floristData.color;
    if(floristData.password)
        florist.password = floristData.password;
    
    return florist; 
}