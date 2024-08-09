document.getElementById('teacherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var teacherName = document.getElementById('teacherName').value;
    var selectedSchools = [];
    var checkboxes = document.querySelectorAll('input[name="school"]:checked');
    
    checkboxes.forEach(function(checkbox) {
        selectedSchools.push(checkbox.value);
    });
    
    var successMessage = document.getElementById('success-message');

    successMessage.textContent = `Professor ${teacherName} adicionado com sucesso às escolas: ${selectedSchools.join(', ')}`;
    
    document.getElementById('teacherForm').reset();
});
