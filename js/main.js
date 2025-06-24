const totalPriceElement = document.querySelector('.total-price')
const numInput = document.querySelector('.num-input')
const rangeInput = document.querySelector('.range-input')
const radios = document.querySelectorAll('[type="radio"], [type="checkbox"]')
console.log(radios)
const basePrice = 6000;

numInput.addEventListener('input', function(){
    rangeInput.value = numInput.value;
    calcSum ()
})
rangeInput.addEventListener('input', function(){
    numInput.value = rangeInput.value;
    calcSum ()
})
radios.forEach(el => el.addEventListener('input', calcSum))

function calcSum () {
    let totalPrice = basePrice * +numInput.value;
    radios.forEach(el => {if(el.checked) {
        console.log(el.value)
        totalPrice *= +el.value}})
    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.textContent = formatter.format(totalPrice);
}
