const topPlayer = document.getElementById('topPlayer').querySelectorAll('div div');

for (const player of topPlayer) {
    player.style.color = 'rgb(0, 0, 255)'
    player.style.backgroundColor = 'rgba(255, 99, 71, 0.4)'  
}
const topBlog = document.getElementById('topBlog').children[1].children;
for (const blog of topBlog) {
    blog.style.color = 'blue'
    blog.style.backgroundColor = 'rgba(123, 122, 119, 0.3)'
}
const ulParent = document.createElement('main');
document.body.appendChild(ulParent)
// add class /
ulParent.classList.add('container', 'p-4','bg-light', 'rounded');
const h2 = document.createElement('h2')
h2.innerText = 'Add item on course'
ulParent.appendChild(h2)

const ul = document.createElement('ul');
ulParent.appendChild(ul);
const course = ['java', 'python', 'javascript', 'cpp']
const input = document.createElement('input');
input.setAttribute('id','course')
ulParent.appendChild(input);

const button = document.createElement('button')
button.setAttribute('id','addButton')
button.innerText = 'add course'
button.setAttribute('value',1)
ulParent.appendChild(button)
for (let index = 0; index < course.length; index++) {
    const li = document.createElement('li')
    li.innerText = course[index]
    li.className = 'h2'
    ul.appendChild(li)
}


document.getElementById('addButton').addEventListener('click',function(){
    
    const buttonValue = document.getElementById('addButton')
    const getInput = document.getElementById('course');
    if(buttonValue.value <= 5 && getInput.value != ''){
        const addLi = document.createElement('li')
        addLi.classList.add('h2')
        addLi.innerText = getInput.value;
        ul.appendChild(addLi)
        buttonValue.value = parseInt(buttonValue.value) + 1;
        
    }
    else{
        buttonValue.setAttribute('disabled',true)
    }
    

})