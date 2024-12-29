// Get user info from localStorage when page loads
window.onload = function() {
    const firstName = localStorage.getItem('userFirstName');
    if (firstName) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${firstName}!`;
    }
};

// Restrict input to only numbers and slash (/) for blood pressure and vision fields
document.getElementById('blood-pressure').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9\/]/g, ''); 
});
document.getElementById('vision').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^0-9\/]/g, '');
});

// Generate 30-minute intervals for dropdown
function get30MinuteIntervals() {
    return [
        "12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM",
        "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM",
        "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
        "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
        "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
        "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
        "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"
    ];
}

// Show modal to create a new reminder with Dose section
function showCreateReminderModal() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    modal.style.zIndex = '1000';
    modal.style.width = '350px';

    const title = document.createElement('h3');
    title.textContent = 'Create a New Reminder';
    title.style.marginBottom = '15px';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter medication name (e.g., Losartan)';
    nameInput.style.marginBottom = '10px';
    nameInput.style.padding = '10px';
    nameInput.style.width = '100%';
    nameInput.style.borderRadius = '5px';
    nameInput.style.border = '1px solid #ccc';

    const doseInput = document.createElement('input');
    doseInput.type = 'text';
    doseInput.placeholder = 'Enter dose (e.g., 500mg or 2 tablets)';
    doseInput.style.marginBottom = '10px';
    doseInput.style.padding = '10px';
    doseInput.style.width = '100%';
    doseInput.style.borderRadius = '5px';
    doseInput.style.border = '1px solid #ccc';

    const timeDropdown = document.createElement('select');
    timeDropdown.style.marginBottom = '10px';
    timeDropdown.style.padding = '10px';
    timeDropdown.style.width = '100%';
    timeDropdown.style.borderRadius = '5px';
    timeDropdown.style.border = '1px solid #ccc';

    // Populate dropdown with 30-minute intervals
    const intervals = get30MinuteIntervals();
    intervals.forEach(time => {
        const option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeDropdown.appendChild(option);
    });

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.style.marginRight = '10px';
    saveButton.style.padding = '10px 20px';
    saveButton.style.backgroundColor = '#4b0082';
    saveButton.style.color = 'white';
    saveButton.style.border = 'none';
    saveButton.style.borderRadius = '5px';
    saveButton.style.cursor = 'pointer';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.style.padding = '10px 20px';
    cancelButton.style.backgroundColor = '#ccc';
    cancelButton.style.color = 'black';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '5px';
    cancelButton.style.cursor = 'pointer';

    saveButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const dose = doseInput.value.trim();
        const time = timeDropdown.value;

        if (name && dose && time) {
            createReminder(name, dose, time);
            document.body.removeChild(modal);
        } else {
            alert('Please fill out all fields.');
        }
    });

    cancelButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.appendChild(title);
    modal.appendChild(nameInput);
    modal.appendChild(doseInput);
    modal.appendChild(timeDropdown);
    modal.appendChild(saveButton);
    modal.appendChild(cancelButton);

    document.body.appendChild(modal);
}

// Create and display a new reminder
function createReminder(name, dose, time) {
    const remindersContainer = document.getElementById('reminders-container');

    const reminderDiv = document.createElement('div');
    reminderDiv.className = 'reminder';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            reminderDiv.classList.add('reminder-fade');
            setTimeout(() => {
                remindersContainer.removeChild(reminderDiv);
            }, 2000);
        }
    });

    const reminderContent = document.createElement('div');
    reminderContent.style.display = 'flex';
    reminderContent.style.flexDirection = 'column';

    const reminderText = document.createElement('span');
    reminderText.textContent = `${name} at ${time}`;

    const doseText = document.createElement('span');
    doseText.textContent = `Dose: ${dose}`;
    doseText.style.fontSize = '12px';
    doseText.style.color = '#555';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        remindersContainer.removeChild(reminderDiv);
    });

    reminderContent.appendChild(reminderText);
    reminderContent.appendChild(doseText);

    reminderDiv.appendChild(checkbox);
    reminderDiv.appendChild(reminderContent);
    reminderDiv.appendChild(deleteButton);

    remindersContainer.appendChild(reminderDiv);
}

// Event listener for Create Reminder button
const createReminderButton = document.getElementById('createReminderButton');
createReminderButton.addEventListener('click', showCreateReminderModal);

// Utility function for 15-minute intervals in 12-hour format
function get15MinuteIntervals() {
    const times = [];
    const suffixes = ['AM', 'PM'];

    suffixes.forEach((suffix, i) => {
        for (let hour = 1; hour <= 12; hour++) {
            ['00', '15', '30', '45'].forEach((minute) => {
                const actualHour = i === 0 && hour === 12 ? 0 : hour; // Adjust for midnight
                const formattedHour = actualHour === 0 ? 12 : actualHour; // Handle 12-hour wraparound
                times.push(`${formattedHour}:${minute} ${suffix}`);
            });
        }
    });

    return times;
}

// Function to create the modal for adding appointments
function showCreateAppointmentModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Create Appointment</h3>
            <form id="createAppointmentForm">
                <label for="appointmentDate">Date:</label>
                <input type="date" id="appointmentDate" required>
                <label for="appointmentTime">Time:</label>
                <select id="appointmentTime" required>
                    ${get15MinuteIntervals().map((time) => `<option value="${time}">${time}</option>`).join('')}
                </select>
                <label for="appointmentDescription">Description:</label>
                <input type="text" id="appointmentDescription" placeholder="e.g., Check-up with Dr.Smith" required>
                <button class="save-button" type="submit">Save Appointment</button>
            </form>
            <button class="cancel-button" onclick="closeModal()">Cancel</button>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById('createAppointmentForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        const description = document.getElementById('appointmentDescription').value;

        const newAppointment = {
            id: Date.now().toString(),
            date,
            time,
            description,
        };

        saveAppointment(newAppointment);
        closeModal();
        displayAppointments(); // Refresh the appointments list
    });
}

// Function to close the modal
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

// Function to save the appointment (using localStorage for simplicity)
function saveAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
}

// Function to delete an appointment
function deleteAppointment(appointmentId) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments = appointments.filter(appointment => appointment.id !== appointmentId);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    displayAppointments(); // Refresh the appointments list after deletion
}

// Function to display appointments
function displayAppointments() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = ''; // Clear the current list

    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    if (appointments.length === 0) {
        appointmentsList.innerHTML = '';
    } else {
        appointments.forEach((appointment) => {
            const appointmentItem = document.createElement('div');
            appointmentItem.classList.add('appointment-item');
            appointmentItem.innerHTML = `
                <p><strong>${appointment.date} - ${appointment.time}</strong></p>
                <p>${appointment.description}</p>
                <button class="delete-button" onclick="deleteAppointment('${appointment.id}')">Delete</button>
            `;
            appointmentsList.appendChild(appointmentItem);
        });
    }
}

// Trigger the modal to create a new appointment
document.getElementById('createAppointmentButton').addEventListener('click', showCreateAppointmentModal);

// Sign out function
function signOut() {
    window.location.href = 'login.html';
}