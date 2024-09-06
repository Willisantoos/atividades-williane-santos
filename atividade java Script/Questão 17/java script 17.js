let counter=0;
let intervalid;
function starCounter(){
    intervalid=setInterval(()=>{
        counter++;
        document.getElementById('counter').textContent=counter;
    },3000);
}
document.getElementById('starButton').addEventListener('click',starCounter);