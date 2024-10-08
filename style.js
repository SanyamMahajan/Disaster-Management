// Slider functionality
const slides = document.querySelectorAll('#slider article');
let currentSlide = 0;

function showSlide(index) {
    // Hide all slides except the one at the current index
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('opacity-0');
            slide.classList.add('opacity-100');
        } else {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0');
        }
    });
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Show the first slide when the page loads
showSlide(currentSlide);

// Automatically change slide every 5 seconds
setInterval(showNextSlide, 5000);


// District data for each state
const districtData = {
    "State A": [
        { district: "District 1", damage: "$500,000", deaths: 10, injured: 20, trapped: 5 },
        { district: "District 2", damage: "$1,000,000", deaths: 15, injured: 25, trapped: 10 }
    ],
    "State B": [
        { district: "District 3", damage: "$800,000", deaths: 8, injured: 12, trapped: 3 },
        { district: "District 4", damage: "$600,000", deaths: 5, injured: 7, trapped: 1 }
    ]
};

// Function to display district data based on selected state
function showDistricts() {
    const stateSelect = document.getElementById('state-select');
    const districtTable = document.getElementById('district-data');
    districtTable.innerHTML = "";  // Clear previous table data

    const selectedState = stateSelect.value;
    if (districtData[selectedState]) {
        districtData[selectedState].forEach(data => {
            const row = `<tr>
                            <td>${data.district}</td>
                            <td>${data.damage}</td>
                            <td>${data.deaths}</td>
                            <td>${data.injured}</td>
                            <td>${data.trapped}</td>
                        </tr>`;
            districtTable.innerHTML += row;
        });
    } else {
        districtTable.innerHTML = "<tr><td colspan='5'>No data available</td></tr>";
    }
}


// Feedback submission handling
function submitFeedback(event) {
    event.preventDefault();  // Prevent default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;

    // Basic form validation (optional)
    if (name && email && comments) {
        alert(`Thank you for your feedback, ${name}!`);
        document.getElementById('feedback').reset();  // Reset the form after submission
    } else {
        alert('Please fill out all fields before submitting.');
    }
}

