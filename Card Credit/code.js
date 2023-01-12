//Code
var cards = document.querySelectorAll('.card');
let flip = document.querySelector('#cvc_input');
let code = document.querySelector("#cvc_tag");
[...cards].forEach((card)=>{
  flip.addEventListener( "click", function() {
    card.classList.toggle('flipped');
  });
});
flip.oninput = ()=>{
  code.textContent = flip.value;
}
//Month
var mes = document.querySelector("#mes_tag");
let select = document.querySelector("#card-expiration-month");
select.addEventListener('change', ()=>{
  mes.textContent = select.value;
});
//Year
var ano = document.querySelector("#ano_tag");
let selectAno = document.querySelector("#card-expiration-year");
selectAno.addEventListener('change', ()=>{
  ano.textContent = selectAno.value;
});
//Name
let nome1 = document.querySelector("#name_tag1");
let nameInput1 = document.querySelector("#name_input1");
  nameInput1.oninput = ()=>{
    nome1.textContent = nameInput1.value;
};
//Number
let number1 = document.querySelector("#number_tag1");
let numberInput1 = document.querySelector("#number_1_input");
  numberInput1.oninput = ()=>{
    number1.textContent = numberInput1.value;
};
let number2 = document.querySelector("#number_tag2");
let numberInput2 = document.querySelector("#number_2_input");
  numberInput2.oninput = ()=>{
    number2.textContent = numberInput2.value;
};
let number3 = document.querySelector("#number_tag3");
let numberInput3 = document.querySelector("#number_3_input");
  numberInput3.oninput = ()=>{
    number3.textContent = numberInput3.value;
};
let number4 = document.querySelector("#number_tag4");
let numberInput4 = document.querySelector("#number_4_input");
  numberInput4.oninput = ()=>{
    number4.textContent = numberInput4.value;
};
let number5 = document.querySelector("#number_tag5");
let numberInput5 = document.querySelector("#number_5_input");
  numberInput5.oninput = ()=>{
    number5.textContent = numberInput5.value;
};
