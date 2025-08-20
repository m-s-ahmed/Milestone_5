//set event listener
document.getElementById('btn-update')
.addEventListener('click',function(){
    console.log('update button clicked');
    //get the text from the input field
    const nameInput=document.getElementById('input-name');
    console.log(nameInput);
    name=nameInput.value;
    console.log('name', name);

    //set the name
    const nameP=document.getElementById('name');
    nameP.innerText=name;

})