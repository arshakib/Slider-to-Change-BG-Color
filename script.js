
const body = document.body;
const range = document.getElementById("_range");
const number = document.getElementById("rangeValue");


function updateStyle(){

    const value = Number(number.innerText);

    if(value >= 90){
        applyStyles('#000',`#f${value}3${value}`);
    }else if(value >= 70){
        applyStyles('#333',`#fe${value}${value}`);
    }else if (value >= 50) {
        applyStyles("#555", `#${value}fb${value}`);
    } else if (value >= 25) {
        applyStyles("#fff", `#${value}f7${value}`);
    } else if (value === 0) {
        applyStyles("red", `#fe${value}${value}`);
    }

}

function applyStyles(color,backgroundColor){
    number.style.color = color;
    body.style.backgroundColor = backgroundColor;

}

range.addEventListener("input",function(){

    const sliderValue = Math.min(this.value,100);
    number.innerText = sliderValue;

    updateStyle();
});