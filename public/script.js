const btnModal = document.querySelector('[data-countdown="btn-modal"]');
const modal = document.querySelector('[data-countdown="modal-container"]');

function openModal() {
    modal.classList.add('show');
    closeModal();
}
function closeModal() {
    modal.addEventListener('click', handleClick);
    function handleClick(event) {
        if(event.target == modal) {
            modal.classList.remove('show');
        }
    }
}
btnModal.addEventListener('click', openModal);