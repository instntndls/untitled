let draggables = document.querySelectorAll('.draggable')
let containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientX)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(container, x) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = x - box.right - box.width / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}
function search() {
    if (document.querySelector(".Search").value.toString() === ""){
        return null
    }
    else {
        event.preventDefault()
        let inputValue = document.querySelector(".Search").value.toString()
        window.location.href = 'https://www.google.com/search?q=' + inputValue
    }
}
function addItemDialogue() {
    let link = prompt("Please enter your link", "www.google.com")
    if (link != null) {
        document.querySelector(".container").innerHTML += '<div class="draggable" ></div>'
    }
    
}
