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
                <button type="button" class="close" id="note-${i}" data-dismiss="alert") aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button >
            </li>
        `;
        localStorage.setItem(i, notes[i]);

    }
    notesList.innerHTML = noteDetails;
    deleteNote();
}

function retrieveFromLocalStorage(){
    for (let i = 0; i < localStorage.length; i++){
        notes.push(localStorage.getItem(`${i}`));
    }
    renderNotes();
}

retrieveFromLocalStorage();

// delete single note
function deleteNote(){
    for (let i = 0; i < notes.length; i++){
        let note = document.getElementById(`note-${i}`)
        note.addEventListener('click', function(){
            let note = notes[i];
            notes = notes.filter(function(data){
                return data !== note;
            })
            localStorage.clear();
            renderNotes();
        });
    }
}

// delete all note
const deleteAllBtn = document.getElementById('delete-all');
deleteAllBtn.addEventListener('click', function(){
    notes = [];
    localStorage.clear();
    renderNotes();
});
