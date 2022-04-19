const shape = document.querySelector('.shape');
const shapeSelect = document.querySelector('#shapeSelect');
const inputColor = document.querySelector('#inputColor');
const applyColorBtn = document.querySelector('#applyColor');
const resetBtn = document.querySelector('#reset');
const shapeName = document.querySelector('#shapeSelect')

let selectedShape = '';

shapeSelect.addEventListener('change', (e) => {
    selectedShape = e.target.value;
    shape.innerText = '';
    shape.className = selectedShape;
    changeShapeColor(inputColor.value);
});

applyColorBtn.addEventListener('click', () => {
    changeShapeColor(inputColor.value);
});

resetBtn.addEventListener('click', () => {
    shape.innerText = 'shape';
    shape.removeAttribute('style');
    shape.className = 'shape';
    shapeSelect.selectedIndex = 0;
    inputColor.value = '#000000';
    shapeName.innerHTML.reset;
});

function changeShapeColor(color = '#000000') {
    shape.style.background = color;
    shape.style.borderBottomColor = '';
};

document.getElementById('shapeSelect');
shapeName.addEventListener('change', () => {
    document.getElementById('myChoice').innerHTML = 'You choose ' +shapeSelect.value;
});
