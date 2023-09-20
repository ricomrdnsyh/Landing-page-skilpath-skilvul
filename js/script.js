function handleGetFormData() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber(input) {
  if (!isNaN(input)) {
    return true;
  } else {
    return false;
  }
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  if (formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}

let formData = handleGetFormData();

if (validateFormData(formData)) {
  console.log("Lanjutkan proses selanjutnya");
} else {
  console.log("Pastikan semua data sudah terisi");
}

function submit(event) {
  event.preventDefault();
  let formData = handleGetFormData();
  if (validateFormData(formData)) {
    console.log("Data Berhasil Ditambahkan");
    console.log(handleGetFormData());
  } else {
    let warningDiv = document.getElementById("warning");
    warningDiv.textContent = "Periksa form anda sekali lagi";
  }
}

// Menghubungkan fungsi submit dengan form
let form = document.querySelector("form");
form.addEventListener("submit", submit);
