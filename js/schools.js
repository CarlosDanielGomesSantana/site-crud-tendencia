document.getElementById('schoolForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var schoolName = document.getElementById('schoolName').value;
    var cityName = document.getElementById('cityName').value;
    var successMessage = document.getElementById('success-message');

    successMessage.textContent = `Escola ${schoolName} em ${cityName} adicionada com sucesso!`;
    
    document.getElementById('schoolForm').reset();
});
