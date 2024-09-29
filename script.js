// Function to add a new entry to the startup journey
function addEntry() {
    // Get the input values
    const title = document.getElementById('entry-title').value;
    const content = document.getElementById('entry-content').value;

    // Check if title and content are provided
    if (title && content) {
        // Create a new entry element
        const entry = document.createElement('div');
        entry.classList.add('journey-entry');

        // Add title and content
        entry.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

        // Append to the entries section
        document.getElementById('entries').appendChild(entry);

        // Clear the form fields
        document.getElementById('entry-title').value = '';
        document.getElementById('entry-content').value = '';
    } else {
        alert('Please provide both title and content.');
    }
}