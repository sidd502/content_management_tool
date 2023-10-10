document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const dragItems = document.querySelectorAll('.drag-item');

    dragItems.forEach(item => {
        item.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', e.target.dataset.type);
        });
    });

    canvas.addEventListener('dragover', e => {
        e.preventDefault();
    });

    canvas.addEventListener('drop', e => {
        e.preventDefault();
        const elementType = e.dataTransfer.getData('text/plain');
        const element = createContentElement(elementType);
        canvas.appendChild(element);
    });

    function createContentElement(type) {
        const element = document.createElement(type === 'text' ? 'p' : type);
        if (type === 'image' || type === 'video') {
            element.setAttribute('src', 'placeholder.jpg'); // Replace with actual image or video URL
        }
        element.contentEditable = true;
        return element;
    }
});