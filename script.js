const form = document.getElementById('studentForm');
const list = document.getElementById('studentList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const student = {
        name: document.getElementById('name').value,
        age: parseInt(document.getElementById('age').value),
        subject: document.getElementById('subject').value
    };

    await fetch('https://springhello-production.up.railway.app/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });

    form.reset();
    loadStudents();
});

async function loadStudents() {
    const res = await fetch('https://springhello-production.up.railway.app/api/students');
    const data = await res.json();

    list.innerHTML = '';
    data.forEach(s => {
        const li = document.createElement('li');
        li.textContent = `${s.name} (${s.age}) - ${s.subject}`;
        list.appendChild(li);
    });
}

loadStudents();
