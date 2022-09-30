
let one = document.getElementById("one");
let two = document.getElementById("two");
let rus = document.getElementById("rus");
function add(){
    if( isNaN(parseInt(one.value)) || isNaN(parseInt(two.value)) ){
        alert(" the values is not a Number")
    }else{
        rus.value = (parseInt(one.value) + parseInt(two.value))
    }
}
