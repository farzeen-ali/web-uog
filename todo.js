const input = document.getElementById('taskInput')
const list = document.getElementById('taskList')

function addTask(){
    const text = input.value.trim()
    if(text === "") return;
    const li = document.createElement('li')
    const span = document.createElement('span')
    span.innerText = text;

    span.onclick = () => {
        li.classList.toggle("done")
    }

    const delBtn = document.createElement("button")
    delBtn.innerText = "X"
    delBtn.className = "delete-btn"
    delBtn.onclick = () => li.remove();
    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = ""
}
