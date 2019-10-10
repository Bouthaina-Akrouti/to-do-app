const inputtext = document.querySelector('.input')
const inputadd = document.querySelector('.btn-add')
const inputitems = document.querySelector('.items')
// console.log(inputtext)
// console.log(inputadd)
// console.log(inputitems)
inputadd.addEventListener('click', add)
function add() {
    // e.preventDefault()
    let x = inputtext.value
    // console.log(x)
    var cont = document.createElement("div");
    
    inputitems.appendChild(cont)
    var btn = document.createElement("BUTTON");
    btn.setAttribute('class', 'btn-complet');
    btn.innerHTML = 'complete';
    cont.appendChild(btn)
    // inputitems.appendChild(btn);
    
    var btn2 = document.createElement("BUTTON");
    btn2.setAttribute('class', 'btn-delete');
    btn2.innerHTML = 'delete';
    // inputitems.appendChild(btn);
    cont.appendChild(btn2)
    
    var y = document.createElement("TEXT");
    y.setAttribute('class', 'txt');
    y.innerHTML = x;
    cont.appendChild(y)
    // inputitems.appendChild(y);


   

    

    const inputcomplete = document.getElementsByClassName('btn-complet')
    // console.log(inputcomplete)
    const inputdelete = document.getElementsByClassName('btn-delete')
    let a=inputcomplete.length
    // console.log(inputdelete)
    for (let i=0; i<inputcomplete.length; i++){
        let complete = inputcomplete[i]
        const inputtext = document.getElementsByClassName('txt')
        var text = inputtext[i]
        console.log(complete)
        complete.addEventListener('click', () => action(complete, text))
    }
    function action(complete,text ){
        text.classList.toggle('completed')
        complete.innerText = "Undo"
    }
    
for(let i=0; i<inputdelete.length;i++){
    let deleteBtn = inputdelete[i]
    deleteBtn.addEventListener('click', (e) => {e.target.parentNode.remove()})
    }
    
}

