var magician_names = ["Qamar", "Umer", "Talha"]
function show_magicians(magician_names) {
return  magician_names
}
// arr.map(function(element, index, array){  }, this);
let txt = "";
magician_names.forEach(make_great);
function make_great() {
txt = "Great";
}
make_great();
for (let i=0; i <magician_names.length; i++) {
console.log(show_magicians(txt + " " + magician_names[i]))}
