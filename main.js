// ???? ???????????
function showContact() {
    document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// ?????? ???????????
function filterAgents() {
    const service = document.getElementById('service-filter').value;
    const location = document.getElementById('location-filter').value;
    
    document.querySelectorAll('.agent-card').forEach(card => {
        const cardService = card.dataset.service;
        const cardLocation = card.dataset.location;
        
        if ((service === 'all' || cardService === service) && 
            (location === 'all' || cardLocation === location)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ????? ????????
document.getElementById('service-filter').addEventListener('change', filterAgents);
document.getElementById('location-filter').addEventListener('change', filterAgents);