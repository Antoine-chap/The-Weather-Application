export default function checkAndAddDeleteButton() {
    const cardsContainer = document.getElementById('cardsContainer');
    const deleteButton = document.getElementById('deleteButton');
  
    if (cardsContainer.children.length > 0) {
      if (!deleteButton) {
        const newDeleteButton = document.createElement('button');
        newDeleteButton.textContent = 'Supprimer';
        newDeleteButton.className = 'delete-button';
        newDeleteButton.id = 'deleteButton';
        newDeleteButton.addEventListener('click', () => {
          cardsContainer.innerHTML = ''; 
          localStorage.removeItem(`weather_${document.getElementById('inputCity').value}_${document.getElementById('inputCountry').value}`);
          newDeleteButton.remove(); 
        });
  
        const submitButton = document.getElementById('button');
        submitButton.parentNode.insertBefore(newDeleteButton, submitButton.nextSibling);
      }
    } else if (deleteButton) {
      deleteButton.remove(); 
    }
  }