 /* pre-codition : function of button increment 
 on click event the HtTML tag "Number " will be increased by one */ 
function Increment(){
 var number =  Number(document.getElementById("Number").innerHTML);
 document.getElementById("Number").innerHTML=number+1; 

}
/*post-condition: Increment button increases number element */

/*pre-condition: fuction takes h1 element 
on click event HTML tag "Number" will be decreased */ 

function Decrement() {
    var number =  Number(document.getElementById("Number").innerHTML);
    document.getElementById("Number").innerHTML=number-1; 

} /*post-condition: decrement button  dencreases number element */

/*pre-condition: fuction takes h1 element 
on click event HTML tag "Number" reset value to 0  */ 
function reset(){
    var number =  Number(document.getElementById("Number").innerHTML);
    document.getElementById("Number").innerHTML=0; 

} /*post-condition: reset button  number element */
