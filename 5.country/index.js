let key=document.querySelector("#key");
let block=document.querySelector('.container0')
key.addEventListener('click',()=>
{
    if(block.style.left=='-5000px')
    {
        block.style.left='0';
        key.textContent='Close Menu';
    }else{
        block.style.left='-5000px'
        key.textContent='Open Menu';
    }
})