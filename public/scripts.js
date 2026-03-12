document.getElementById('nameForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('userName').value;


    const response = await fetch('/api/get-name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: name })
      
    });
   

     const result = await response.json();
     
     if (response.ok) {
      document.getElementById("result") .textContent = ` ${result.name} ${result.emoji}`;
     }
  

});

async function initEmoji() {
  await fetch('/api/init-emoji');
}

initEmoji();


// async function loadNames() {
//     try {
//       const response = await fetch('/api/names');
//       const names = await response.json();
  
//       const namesList = document.getElementById('nameList');
  
//       if (names.length === 0) {
//         namesList.innerHTML = '<p>No names yet.</p>';
//         return;
//       }
  
//       namesList.innerHTML = names.map(name => `
//             <div class="record">
//           <strong>${name.name}</strong> <br> <button class="edit-btn btn btn-secondary" onclick="editName('${name._id}', '${name.name}')">Edit</button> <button class="delete-btn btn btn-danger" onclick="deleteName('${name._id}')">Delete</button></div>
//         <hr>
//       `).join('');
//     } catch (error) {
//       document.getElementById('nameList').innerHTML = 'Error loading names';
//     }
//   }