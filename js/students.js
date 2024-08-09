document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var studentName = document.getElementById('studentName').value;
    var schoolName = document.getElementById('schoolName').value;
    var grade = document.getElementById('grade').value;
    var shift = document.getElementById('shift').value;
    var className = document.getElementById('class').value;
    var successMessage = document.getElementById('success-message');

    successMessage.textContent = `Aluno ${studentName} adicionado com sucesso!`;
    
    document.getElementById('studentForm').reset();
});
