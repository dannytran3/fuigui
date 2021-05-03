export const modal = () => {
    document.querySelectorAll('.fui-modal-trigger').forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
            const target = e.currentTarget.getAttribute('data-modal-target');
            document.querySelector(`#${target}.fui-modal__background`).classList.toggle('open');
        });
    });
};