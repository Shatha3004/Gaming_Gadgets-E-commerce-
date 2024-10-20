let next=document.querySelector('.next')
let prev=document.querySelector('.prev')

next.addEventListener("click",function(){
    let item=document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(item[0])
})

prev.addEventListener("click",function(){
    let item=document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(item[item.length-1])
})


var first=document.getElementById("first");
var second=document.getElementById("second");
var third=document.getElementById("third");

var content1=document.getElementById("r1");
var content2=document.getElementById("r2");
var content3=document.getElementById("r3");


if(first == checked)
{
    
}