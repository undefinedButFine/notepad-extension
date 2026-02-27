const inputText = document.getElementById("input-Text");
const saveBtn = document.getElementById("input-Btn");
const notesList = document.getElementById("notesEl");


saveBtn.addEventListener("click", function() {
    const note = inputText.value
    const li = document.createElement("li")
    li.textContent = note;
    notesList.appendChild(li)

});
