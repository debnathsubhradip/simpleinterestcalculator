function calculateinterest(){
    let buttonsection=document.getElementById('buttonsection');
    let p=document.getElementById('principalamount').value;
    let r=document.getElementById('interest').value;
    let t=document.getElementById('selectyears').value;
    let interest=p*r*t/100;
    let display
    
    let interestpara=document.createElement("P");
    interestpara.id='interestpara';
    if(p===""){
        display="Principal Amount field is empty !";
       }
       else{
           display="Computed interest rate : "+interest+"%";
       }
    interestpara.innerHTML=display;
    if(document.getElementById('interestpara')!=null){
        document.getElementById('interestpara').remove();
    }
    buttonsection.appendChild(interestpara);
 }