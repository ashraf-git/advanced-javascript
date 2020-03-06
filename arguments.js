function add(num1, num2){
    console.log([...arguments]);
    return num1 + num2 ;
    
}
const result = add(2, 4, 6);

console.log(result);