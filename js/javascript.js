// select all inputs in the page
const inputs = document.querySelectorAll('.controls input');
function handlupdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', handlupdate));
inputs.forEach(input => input.addEventListener('mousemove', handlupdate));