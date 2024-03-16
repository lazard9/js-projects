const inputs = document.querySelectorAll('.controls input');
const inputBase = document.getElementById('base')

inputs.forEach(input => {
    input.addEventListener('input', handleUpdate);
});

inputBase.addEventListener('mouseover', handleUpdate);

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}