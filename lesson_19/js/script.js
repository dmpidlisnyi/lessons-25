document.addEventListener('click', documentActions)

function documentActions(e) {
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open')
	}
}

// Щоб resize працював на мобілці
const resizable = document.querySelector('.resizable__inner');

let isResizing = false;
let startX, startY, startWidth, startHeight;

resizable.addEventListener('pointerdown', (e) => {
	// Перевіряємо, чи натиснули саме на псевдоелементну зону (можна оптимізувати через клас або dataset)
	const rect = resizable.getBoundingClientRect();
	if (e.clientX < rect.right - 48 || e.clientY < rect.bottom - 48) return; // 3rem = 48px

	isResizing = true;
	startX = e.clientX;
	startY = e.clientY;
	startWidth = rect.width;
	startHeight = rect.height;
	e.preventDefault();
});

window.addEventListener('pointermove', (e) => {
	if (!isResizing) return;
	const newWidth = startWidth + (e.clientX - startX);
	const newHeight = startHeight + (e.clientY - startY);
	resizable.style.width = `${newWidth}px`;
	resizable.style.height = `${newHeight}px`;
});

window.addEventListener('pointerup', () => {
	isResizing = false;
});
