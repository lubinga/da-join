let isButtonToggled = [false, false, false];
let isArrowRotated = false;
let subtasks = [];

/* JSON-ARRAY */

let task = [
    {
        'title': 'Hallo',
        'description': 'Wie geht es?',
        'assignedTo': 'Anna',
        'dueDate': '01/01/2024',
        'prio': 'urgent',
        'category': 'User Story',
        'subtasks': 'Do this'
    }
]


function checkValueTitle() {
    let titleInput = document.getElementById('titleInput');
    let titleRequiredContainer = document.getElementById('titleRequiredContainer');
    if (titleInput.value == '') {
        titleRequiredContainer.classList.remove('d-none');
        titleInput.classList.add('title-no-input');
        titleInput.classList.remove('focus')
    } else {
        titleRequiredContainer.classList.add('d-none');
        titleInput.classList.remove('title-no-input');
        titleInput.classList.add('focus');
    }
}


function inputAssignedToFocus() {
    let aTInputContainer = document.getElementById('aTInputContainer');
    aTInputContainer.classList.add('focus-container');
}


function inputAssignedToBlur() {
    let aTInputContainer = document.getElementById('aTInputContainer');
    aTInputContainer.classList.remove('focus-container');
}


function setPrio(num) {
    const TOTAL_BUTTONS = 3;

    for (let i = 0; i < TOTAL_BUTTONS; i++) {
        if (i + 1 == num || isButtonToggled[i] === true) {
            isButtonToggled[i] = !isButtonToggled[i]
            const selectedButton = document.getElementById(`prioButton${i+1}`);
            const selectedImgPrioColor = document.getElementById(`prioColor${i+1}`);
            const selectedImgPrioWhite = document.getElementById(`prioWhite${i+1}`);
            const selectedPrio = document.getElementById(`prio${i+1}`).innerHTML.toLowerCase();
        
            selectedButton.classList.toggle(`${selectedPrio}`);
            selectedButton.classList.toggle('prioTextWhite');
            selectedImgPrioColor.classList.toggle('d-none');
            selectedImgPrioWhite.classList.toggle('d-none');
        }        
    }

}


function toggleCategoryDropDown() {
    let categoryDropDown = document.getElementById('categoryDropDown');
    let arrowCategory = document.getElementById('arrowCategory');
    categoryDropDown.classList.toggle('d-none');
    isArrowRotated = !isArrowRotated;
    arrowCategory.style.transform = isArrowRotated ? 'rotate(180deg)' : '';
}


function selectCategory(num) {
    let input = document.getElementById('categoryInput');
    let selectedCategory = document.getElementById(`category${num}`).innerHTML;
    input.value = selectedCategory;
    toggleCategoryDropDown();
}


function inputSubtaskFocus() {
    let subtaskContainer = document.getElementById('subtaskContainer');
    subtaskContainer.classList.add('focus-container');
}


function inputSubtaskBlur() {
    let subtaskContainer = document.getElementById('subtaskContainer');
    subtaskContainer.classList.remove('focus-container');
}



function insertSubtask() {
    let insertSubtaskToolContainer = document.getElementById('insertSubtaskToolContainer');
    let plusImg = document.getElementById('plusImg');
    plusImg.classList.add('d-none');
    insertSubtaskToolContainer.classList.remove('d-none');
    inputSubtaskFocus();
}


function deleteInputSubtask() {
    let insertSubtaskToolContainer = document.getElementById('insertSubtaskToolContainer');
    let plusImg = document.getElementById('plusImg');
    plusImg.classList.remove('d-none');
    insertSubtaskToolContainer.classList.add('d-none');
}


function saveInputSubtask() {

}


function addSubtask() {
    let input = document.getElementById('subtaskInput');
    let subtask = input.value;
    if (subtask !== '') {
    subtasks.push(subtask);
    renderSubtasks();
    input.value = '';
    }
}




function renderSubtasks() {
    let subtasksContainer = document.getElementById('addedSubtasksContainer');
    subtasksContainer.innerHTML = '';
    for (let i = 0; i < subtasks.length; i++) {
        const subtask = subtasks[i];
        subtasksContainer.innerHTML += /*html*/`
            <div class="added-subtask-container">
                <input class="added-subtask" type="text" value='• ${subtask}'>
                <div class="tool-container">
                    <img src="./assets/img/edit.png" class="edit-img">
                    <div class="tool-separator"></div>
                    <img src="./assets/img/delete-img.png" class="delete-img">
                </div>
            </div>
        `;
    }
}


function toggleAssignedToDropDown() {
    let assignedToDropDown = document.getElementById('assignedToDropDown');
    let arrowAssignedTo = document.getElementById('arrowAssignedTo');
    assignedToDropDown.classList.toggle('d-none');
    isArrowRotated = !isArrowRotated;
    arrowAssignedTo.style.transform = isArrowRotated ? 'rotate(180deg)' : '';
}


function selectPerson(num) {
    let input = document.getElementById('assignedToInput');
    let selectedPerson = document.getElementById(`person${num}`).innerHTML;
    input.value = selectedPerson;
    toggleAssignedToDropDown();
}


function createTask() {
    
}