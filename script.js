// ???? ???????????
function showContact() {
    document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// ???? ?? ???? ????? ???? ?? ??? ????
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}