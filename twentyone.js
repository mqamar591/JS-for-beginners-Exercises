var a = ["Qamar", "Umer", "Talha"];
var txt = " ";
for (let i=0; i< a.length; i++ ) {
     txt +=  "Hi I would like to invite " + a[i] + " "+ "on dinner";
}



var b = ["Mosab", "Shahzad", "Jamal"];
var txt = " ";
for (let i=0; i< b.length; i++ ) {
    txt +=  "Hi I would like to invite " + b[i] + " "+ "on dinner";
    
}



var d = ["Qamar", "Umer", "Talha"];
var txt = " ";
for (let i=0; i< d.length; i++ ) {
    d[0]= "Mosab";
    d[1]= "Shahzad";
    d[2]= "Jamal";
   txt +=  "Hi I would like to invite " + d[i] + " "+ "on dinner";
    
}




var e = ["Qamar", "Umer", "Talha", "Yaseen"];
e.unshift ("Akmal");



var txt = " ";

for (let i = 0; i < e.length; i++ ) {  
    txt +=  "Table is free, three more people can come. Please " + e[i] + " " + " come on dinner";
    

}


let f = ["Qamar", "Umer", "Talha", "Yaseen"];
var txt = " ";
f.unshift ("Akmal");
f.splice(2);

for (let i = 0; i < f.length; i++ ) {  
    txt +=  "Only two seats are avaiable. Please " + f[i] + " " + " come on dinner ";

}
console.log(txt);

