var magician_names = ["Qamar", "Umer", "Talha"]
function show_magicians(magician_names) {
return  magician_names
}
// arr.map(function(element, index, array){  }, this);
var txt = "";
magician_names.forEach(make_great);
function make_great() {
txt = "Great";
}

for (let i=0; i <magician_names.length; i++) {
console.log(show_magicians(txt + " " + magician_names[i]))
}
 
for (let x = 0; x<magician_names.length; x++) {
    console.log(txt = magician_names[x] )
}
