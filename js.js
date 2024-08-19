const btn =document.getElementById('submit')
btn.addEventListener('click',function(){
    let height =document.querySelector('#height').value;
    let weight =document.querySelector('#weight').value;


  

    if(height == ""|| weight== ""){
        alert("Please fill in all fields")
        return;
    }


height=height/100
let bmi=(weight/ (height*height));
bmi = bmi.toFixed(2);

document.querySelector('#result').innerHTML=bmi;

let status ='';
if(bmi<18.5){
    status='Underweight'
    } if(bmi>=18.5 && bmi<=25){
        status='Normal'
        } if(bmi>25 && bmi<=30){
            status='Overweight'
        }
        if(bmi>30){
            status='Obese'
        }

        document.querySelector('.comment').innerHTML=` 
        you are <span id="comment:">${status}</span>`;

})