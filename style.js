let notes = [];
let note = document.querySelector('#note');
let noteBtn = document.querySelector('#note-btn');
let notesList = document.querySelector('#note-list');

noteBtn.addEventListener('click', function(){
    notes.push(note.value);
    note.value = '';
    renderNotes();
});

function renderNotes(){
    let noteDetails = '';
    for (let i = 0; i < notes.length; i++){
        noteDetails += `
            <li class="list-group-item">
                ${notes[i]}
                <button type="button" class="close" data-dismiss="alert" onclick=deleteNote(${i}) aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button >
            </li>
        `;
        localStorage.setItem(i, notes[i]);

    }
    notesList.innerHTML = noteDetails;
}

function deleteNote(noteId){
    let note = notes[noteId];
    notes = notes.filter(function(data){
        return data !== note;
    })
    localStorage.clear();
    renderNotes();
}

function retrieveFromLocalStorage(){
    for (let i = 0; i < localStorage.length; i++){
        notes.push(localStorage.getItem(`${i}`));
    }
    renderNotes();
}

retrieveFromLocalStorage();