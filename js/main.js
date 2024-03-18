const batteryEnergy = document.getElementsByClassName('battery__logo-small');
const monthGb = document.querySelectorAll('.battery__list-link');
console.log(batteryEnergy);
console.log(monthGb);
//сначала пробежаться по всем классом и убрать, а потом пробежаться и поставить нужным
//цикл в цикле
for (let i = 0; i < monthGb.length; i++) {
    monthGb[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('choose-1m-30gb')) {
            monthGb[0].classList.add('active');
            monthGb[1].classList.remove('active');
            monthGb[2].classList.remove('active');
            if (batteryEnergy[0].classList.contains('battery--fulfilled')) {
                batteryEnergy[1].classList.remove('battery--fulfilled');
                batteryEnergy[1].classList.add('battery--transparent');
                batteryEnergy[2].classList.remove('battery--fulfilled');
                batteryEnergy[2].classList.add('battery--transparent');
            }
        } else if (e.target.classList.contains('choose-2m-30gb')) {
            monthGb[0].classList.remove('active');
            monthGb[1].classList.add('active');
            monthGb[2].classList.remove('active');
            batteryEnergy[1].classList.remove('battery--transparent');
            batteryEnergy[1].classList.add('battery--fulfilled');
            if (batteryEnergy[1].classList.contains('battery--fulfilled')) {
                batteryEnergy[2].classList.remove('battery--fulfilled');
                batteryEnergy[2].classList.add('battery--transparent');
            }
        } else {
            monthGb[0].classList.remove('active');
            monthGb[1].classList.remove('active');
            monthGb[2].classList.add('active');
            batteryEnergy[1].classList.remove('battery--transparent');
            batteryEnergy[1].classList.add('battery--fulfilled');
            batteryEnergy[2].classList.remove('battery--transparent');
            batteryEnergy[2].classList.add('battery--fulfilled');
        }
    })
}



