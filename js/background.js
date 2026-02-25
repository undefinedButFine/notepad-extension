const inputText = document.getElementById("input-Text");
const saveBtn = document.getElementById("input-Btn");
const notesList = document.getElementById("notesEl");
let notesStored = [];


saveBtn.addEventListener("click", function() {
    const note = inputText.value
    notesStored.push(note)
    const li = document.createElement("li")
    li.textContent = note;
    notesList.appendChild(li)
});