let btnSubmit = document.querySelector('#btn');
let inputText = document.querySelector('#inputToDo');
let myPlans = document.querySelector('#plans');

// addEventListener
btnSubmit.addEventListener('click', function(){
    let paragraph = document.createElement('p')
    paragraph.innerText = inputText.value 
    paragraph.classList.add('list')
    myPlans.append(paragraph)
    inputText.value = ''
    saveData()

// textDecoration and add color black

paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = 'line-through'
    paragraph.style.color = 'black'
    saveData()

})

//dblclick remove()
paragraph.addEventListener('dblclick', function(){
    paragraph.remove()
    saveData()
})
    
})
 

function saveData(){
    localStorage.setItem('data', myPlans.innerHTML)


}
 
 
function showData(){
    myPlans.innerHTML = localStorage.getItem('data')
}

showData()