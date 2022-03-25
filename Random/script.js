// project أنشئ كائن
const project = {
    type: "tech",
    users: 100000,
    biograghy(){
    return "هذا مشروعي";

    },

};
// randomProperty أنشئ دالة
function randomProperty(x){
const keysObject = Object.keys(x);
const randomNumber = Math.floor(Math.random() * keysObject.length);
console.log(keysObject['${randomNumber}']);

console.log(x['${keysOpject['${randomNumber}']}']);

randomProperty(project);
}

