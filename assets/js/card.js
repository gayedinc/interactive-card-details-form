// confirm butonunu seçme ve olay dinleyici atama
const confirmBtn = document.querySelector('.confirmBtn');
const thankYou = document.querySelector('.thankYouContent');
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
  const nameValid = nameInput.value.trim() !== "" && /^[a-zA-ZçÇğĞıİşŞöÖüÜ\s]*$/.test(nameInput.value); // Türkçe harfler de dahil
  const cardValid = cardNumber.value.trim() !== "" && cardNumber.value.length === 19 && cardNumber.value !== '0000 0000 0000 0000'; // 16 rakam + 3 boşluk
  const monthValid = monthInput.value.trim() !== "" && monthInput.value.length === 2 && monthInput.value !== '00';
  const yearValid = yearInput.value.trim() !== "" && yearInput.value.length === 2 && yearInput.value !== '00';
  const cvcValid = cvcInput.value.trim() !== "" && cvcInput.value.length === 3 && cvcInput.value !== '000';

  // Hataları gösterme
  if (!nameValid) { // Eğer isim boşsa ya da geçerli değilse
    nameInput.classList.add('invalid-input');
    if (nameInput.value.trim() === "") {
      nameInput.nextElementSibling.textContent = "Can't be blank"; // Boşsa mesaj
    } else {
      nameInput.nextElementSibling.textContent = "Wrong format, letters only"; // Sayı girildiyse mesaj
    }
    nameInput.nextElementSibling.style.display = 'inline';
  } else {
    nameInput.classList.remove('invalid-input');
    nameInput.nextElementSibling.style.display = 'none';
  }

  if (!cardValid) { // Kart numarası kontrolü
    const cardInput = document.querySelector('.cardNumber');
    if (cardNumber.value === '0000 0000 0000 0000') { // Eğer 0 ise
      cardInput.classList.add('invalid-input');
      cardInput.nextElementSibling.textContent = "Can't be zero";
    } else {
      cardInput.classList.add('invalid-input');
      cardInput.nextElementSibling.textContent = "Can't be blank"; // Boşsa mesaj
    }
    cardInput.nextElementSibling.style.display = 'inline';
  } else {
    document.querySelector('.cardNumber').classList.remove('invalid-input');
    document.querySelector('.cardNumber').nextElementSibling.style.display = 'none';
  }

  if (!monthValid) { // Ay kontrolü
    const monthInputEl = document.querySelector('.monthInput');
    if (monthInput.value === '00') { // Eğer 0 ise
      monthInputEl.classList.add('invalid-input');
      monthInputEl.nextElementSibling.textContent = "Can't be zero";
    } else {
      monthInputEl.classList.add('invalid-input');
      monthInputEl.nextElementSibling.textContent = "Can't be blank"; // Boşsa mesaj
    }
    monthInputEl.nextElementSibling.style.display = 'inline';
  } else {
    document.querySelector('.monthInput').classList.remove('invalid-input');
    document.querySelector('.monthInput').nextElementSibling.style.display = 'none';
  }

  if (!yearValid) { // Yıl kontrolü
    const yearInputEl = document.querySelector('.yearInput');
    if (yearInput.value === '00') { // Eğer 0 ise
      yearInputEl.classList.add('invalid-input');
    } else {
      yearInputEl.classList.add('invalid-input');
    }
  } else {
    document.querySelector('.yearInput').classList.remove('invalid-input');
  }

  if (!cvcValid) { // CVC kontrolü
    const cvcInputEl = document.querySelector('.cvcInput');
    if (cvcInput.value === '000') { // Eğer 0 ise
      cvcInputEl.classList.add('invalid-input');
      cvcInputEl.nextElementSibling.textContent = "Can't be zero";
    } else {
      cvcInputEl.classList.add('invalid-input');
      cvcInputEl.nextElementSibling.textContent = "Can't be blank"; // Boşsa mesaj
    }
    cvcInputEl.nextElementSibling.style.display = 'inline';
  } else {
    document.querySelector('.cvcInput').classList.remove('invalid-input');
    document.querySelector('.cvcInput').nextElementSibling.style.display = 'none';
  }

  // Eğer tüm doğrulamalar başarılıysa
  if (nameValid && cardValid && monthValid && yearValid && cvcValid) {

    // Thank You sayfasını çıkart
    thankYou.classList.add('d-flex');

    // Bilgi giriş sayfasını gizle
    document.querySelector('.card-input').classList.add('d-none');

    // Kredi kartının içerisine girilen değerleri yaz
    document.querySelector('.cardName').innerText = nameInput.value.trim();
    document.querySelector('.numberTxt').innerText = cardNumber.value.trim();
    document.querySelector('.monthText').innerText = monthInput.value.trim();
    document.querySelector('.yearText').innerText = yearInput.value.trim();
    document.querySelector('.cvcNumber').innerText = cvcInput.value.trim();
  }

  // Eğer tüm doğrulamalar başarılıysa
  if (nameValid && cardValid && monthValid && yearValid && cvcValid) {

    // Thank You sayfasını çıkart
    thankYou.classList.add('d-flex');

    // Bilgi giriş sayfasını gizle
    document.querySelector('.card-input').classList.add('d-none');

    // Kredi kartının içerisine girilen değerleri yaz
    document.querySelector('.cardName').innerText = nameInput.value.trim();
    document.querySelector('.numberTxt').innerText = cardNumber.value.trim();
    document.querySelector('.monthText').innerText = monthInput.value.trim();
    document.querySelector('.yearText').innerText = yearInput.value.trim();
    document.querySelector('.cvcNumber').innerText = cvcInput.value.trim();
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
