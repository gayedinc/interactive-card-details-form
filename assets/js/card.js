// confirm butonunu seçme ve olay dinleyici atama
const confirmBtn = document.querySelector('.confirmBtn');
confirmBtn.addEventListener('click', handleConfirmDatas);

const nameInput = document.querySelector('.nameInput');

// input mask uygulamasını yaptığım yer
const cardNumber = IMask(document.querySelector('.cardNumber'), {
  mask: '0000 0000 0000 0000'
});
const monthInput = IMask(document.querySelector('.monthInput'), {
  mask: '00'
});
const yearInput = IMask(document.querySelector('.yearInput'), {
  mask: '00'
});
const cvcInput = IMask(document.querySelector('.cvcInput'), {
  mask: '000'
});

function handleConfirmDatas(event) {
  event.preventDefault(); // Formun otomatik gönderilmesini engellemek

  // Maskelenmiş inputlardan değer alma
  const nameValid = nameInput.value.trim() !== "";
  const cardValid = cardNumber.value.trim() !== "" && cardNumber.value.length === 19; // 16 rakam + 3 boşluk
  const monthValid = monthInput.value.trim() !== "" && monthInput.value.length === 2;
  const yearValid = yearInput.value.trim() !== "" && yearInput.value.length === 2;
  const cvcValid = cvcInput.value.trim() !== "" && cvcInput.value.length === 3;

  // Hataları gösterme
  if (!nameValid) { // eğer name boşsa
    nameInput.classList.add('invalid-input');
    nameInput.nextElementSibling.style.display = 'inline';
  } else {
    nameInput.classList.remove('invalid-input');
    nameInput.nextElementSibling.style.display = 'none';
  }

  if (!cardValid) { // eğer card number boşsa
    document.querySelector('.cardNumber').classList.add('invalid-input');
    document.querySelector('.cardNumber').nextElementSibling.style.display = 'inline';
  } else {
    document.querySelector('.cardNumber').classList.remove('invalid-input');
    document.querySelector('.cardNumber').nextElementSibling.style.display = 'none';
  }

  if (!monthValid) { // eğer ay boşsa
    document.querySelector('.monthInput').classList.add('invalid-input');
    document.querySelector('.monthInput').nextElementSibling.style.display = 'inline';
  } else {
    document.querySelector('.monthInput').classList.remove('invalid-input');
    document.querySelector('.monthInput').nextElementSibling.style.display = 'none';
  }

  if (!yearValid) { // eğer yıl boşsa
    document.querySelector('.yearInput').classList.add('invalid-input');
    document.querySelector('.yearInput').nextElementSibling.style.display = 'inline';
  } else {
    document.querySelector('.yearInput').classList.remove('invalid-input');
    document.querySelector('.yearInput').nextElementSibling.style.display = 'none';
  }

  if (!cvcValid) {
    document.querySelector('.cvcInput').classList.add('invalid-input');
    document.querySelector('.cvcInput').nextElementSibling.style.display = 'inline';
  } else {
    document.querySelector('.cvcInput').classList.remove('invalid-input');
    document.querySelector('.cvcInput').nextElementSibling.style.display = 'none';
  }

  // Eğer tüm doğrulamalar başarılıysa
  if (nameValid && cardValid && monthValid && yearValid && cvcValid) {

    // Thank You sayfasını çıkart
    document.querySelector('.thankYou').classList.add('d-blok');

    // Bilgi giriş sayfasını gizle
    document.querySelector('.card-input').classList.add('d-none');

    // Kredi kartının içerisine girilen değerleri yaz
    document.querySelector('.cardName').innerText = nameInput.value.trim();
    document.querySelector('.cvcNumber').innerText = cvcInput.value.trim();
    document.querySelector('.numberTxt').innerText = cardNumber.value.trim();
    document.querySelector('.monthText').innerText = monthInput.value.trim();
    document.querySelector('.yearText').innerText = yearInput.value.trim();
  }
}

// Dinamik - eş zamanlı olarak card öğelerine değer atama
nameInput.addEventListener('keyup', function () {
  document.querySelector('.cardName').innerText = nameInput.value;
});

// Maskelenmiş input elemanlarına değer atama
document.querySelector('.cardNumber').addEventListener('keyup', function () {
  document.querySelector('.numberTxt').innerText = cardNumber.value;
});

document.querySelector('.cvcInput').addEventListener('keyup', function () {
  document.querySelector('.cvcNumber').innerText = cvcInput.value;
});

document.querySelector('.monthInput').addEventListener('keyup', function () {
  document.querySelector('.monthText').innerText = `${monthInput.value} /`;
});

document.querySelector('.yearInput').addEventListener('keyup', function () {
  document.querySelector('.yearText').innerText = yearInput.value;
});

// Alternatif bir değer atama yöntemi

// const elements = [
//   { input: nameInput, output: cardName },
//   { input: cardNumber, output: numberTxt },
//   { input: cvcInput, output: cvcNumber },
//   { input: monthInput, output: monthText, suffix: " /" },
//   { input: yearInput, output: yearText },
// ];

// elements.forEach(({ input, output, suffix = "" }) => {
//   input.addEventListener('keyup', function () {
//     output.innerText = input.value + suffix;
//   });
// });
