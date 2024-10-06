// Simulated user credentials
const validUsername = "admin";
const validPassword = "1456";

// Pre-attached files (in reality, you could fetch this from a server)
const files = [
    { name: "pdf.txt", url: "files/25613629.db" },
    { name: "data.txt", url: "files/25612664.db" },
    { name: "my.txt", url: "files" },
    { name: "files.txt", url: "files/index.html" },
    { name: "Report.xlsx", url: ".25613629.db" },
    { name: "Presentation.pptx", url: ".25612664.db" },

];

// Handle login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        // Hide login section and show file section
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('fileSection').style.display = 'block';
        
        // Display the list of files
        displayFiles();
    } else {
        document.getElementById('errorMsg').innerText = "Invalid username or password!";
    }
});

// Display the pre-attached files
function displayFiles() {
    const fileList = document.getElementById('fileList');
    
    files.forEach(file => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${file.url}">${file.name}</a>`;
        fileList.appendChild(listItem);
    });
}
