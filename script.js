// script.js
let isMoving = false;

document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    document.body.appendChild(cursor);

    const style = document.createElement('style');
    style.textContent = `
        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            cursor: default;
        }
        #cursor {
            position: absolute;
            width: 40px;
            height: 40px;
            border: 2px solid black;
            border-radius: 50%;
            pointer-events: none;
            background-color: transparent;
            left: 0;
            top: 0;
            transform: translate(-50%, -50%);
        }
    `;
    document.head.appendChild(style);

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        let cursorX = parseFloat(cursor.style.left) || 0;
        let cursorY = parseFloat(cursor.style.top) || 0;

        const delay = 0.2;

        cursorX += (mouseX - cursorX) * delay;
        cursorY += (mouseY - cursorY) * delay;

        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;

        window.lastMouseX = mouseX;
        window.lastMouseY = mouseY;
        isMoving = true;

        clearTimeout(window.stopTimeout);
        window.stopTimeout = setTimeout(() => {
            isMoving = false;
        }, 50);
    });

    setInterval(function() {
        if (!isMoving) {
            const mouseX = window.lastMouseX;
            const mouseY = window.lastMouseY;

            let cursorX = parseFloat(cursor.style.left) || 0;
            let cursorY = parseFloat(cursor.style.top) || 0;

            const delay = 0.1;

            cursorX += (mouseX - cursorX) * delay;
            cursorY += (mouseY - cursorY) * delay;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
        }
    }, 10);
});
