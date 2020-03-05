const students = [
    {id: 32, name: "Imran Kan"},
    {id: 44, name: "kamal Ahmed"},
    {id: 53, name: "rajib kahn"},
    {id: 56, name: "ranuara"}
]
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);

console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggerOne);
