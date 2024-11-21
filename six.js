function cal_age(name,dob){
    let current_year=new Date().getFullYear();
    return current_year-dob
}
let msgs1 =cal_age("malavika m",1998)
let msgs2 =cal_age("ramya",1988)
let msgs3 =cal_age("rachitaram",1989)
console.log(msgs1);
console.log(msgs2)
console.log(msgs3)
