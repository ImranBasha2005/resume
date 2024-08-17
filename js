document.addEventListener('DOMContentLoaded', function() {
    // Example: Adding a print button functionality
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Resume';
    printButton.style.display = 'block';
    printButton.style.margin = '20px auto';
    printButton.style.padding = '10px';
    printButton.style.backgroundColor = '#007bff';
    printButton.style.color = 'blue';
    printButton.style.border = 'box';
    printButton.style.borderRadius = '5px';
    printButton.style.cursor = 'pointer';
    
    document.querySelector('.resume-container').appendChild(printButton);
    
    printButton.addEventListener('click', function() {
        window.print();
    });
});
