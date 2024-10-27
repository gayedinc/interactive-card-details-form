const confirmBtn = document.querySelector('.confirmBtn');
confirmBtn.addEventListener('click', handleConfirmDatas);

function handleConfirmDatas() {
  const nameInput = document.querySelector('.nameInput');
  const cardNumber = document.querySelector('.cardNumber');
  const monthInput = document.querySelector('.monthInput');
  const yearInput = document.querySelector('.yearInput');
  const cvcInput = document.querySelector('.cvcInput');

  if (nameInput.value.trim() !== "" &&
    cardNumber.value.trim() !== "" && cardNumber.value.length === 16 &&
    monthInput.value.trim() !== "" && monthInput.value.length === 2 &&
    yearInput.value.trim() !== "" && yearInput.value.length === 2 &&
    cvcInput.value.trim() !== "" && cvcInput.value.length === 3) {
    document.querySelector('.thankYou').classList.add('d-blok');
    document.querySelector('.card-input').classList.add('d-none');
    document.querySelector('.cardName').innerText = nameInput.value.trim();
    document.querySelector('.cvcNumber').innerText = cvcInput.value.trim();
    document.querySelector('.numberTxt').innerText = cardNumber.value.trim();
    document.querySelector('.cardDate').innerText = `${monthInput.value.trim()}/${yearInput.value.trim()}`;
  } else {
    const inputs = [
      document.querySelector('.nameInput'),
      document.querySelector('.cardNumber'),
      document.querySelector('.monthInput'),
      document.querySelector('.yearInput'),
      document.querySelector('.cvcInput')
    ];
    inputs.forEach(input => {
      if (input.innerHTML === '') {
        input.classList.add('invalid-input');
      } else {
        input.classList.remove('invalid-input');
      }
    });
  }
}