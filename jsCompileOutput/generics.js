"use strict";
// const AddUser = <T>(obj:T) => {
//     let id = Math.floor(Math.random() * 100)
//     return { ...obj, id }
// }
// const result = AddUser({
//     name:"Siddik",
//     age:30,
//     isSingle:true,
//     education:"ssc"
// })
// console.log(result);
const studentData = (info) => {
    const id = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, info), { id });
};
const AddStudent = studentData({
    name: "Siddik",
    age: 18,
    roll: 1,
    isAdult: true
});
AddStudent.age;
// For timeing
let myContainer = document.querySelector('.time');
let myDay = document.querySelector('.day');
setInterval(() => {
    const CuentTime = new Date();
    let Time = CuentTime.getHours().toString();
    let Min = CuentTime.getMinutes().toString();
    let Today = CuentTime.toLocaleDateString().toString();
    myContainer.innerText = Time + ":" + Min;
    myDay.innerText = Today;
}, 1000);
