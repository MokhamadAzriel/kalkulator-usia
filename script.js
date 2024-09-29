let intervalID;

function calculate() {
  let birthdate = new Date(document.getElementById('birthdate').value);
  if (isNaN(birthdate)) {
    alert("Masukan tanggal lahir yang valid");
    return;
  }
  
  document.getElementById('result').style.display="block";
  intervalID = setInterval(() => {
    let now = new Date();
    let ageInMs = now.getTime()-birthdate.getTime();
    let ageInS = ageInMs / 1000;
    let ageInMins = ageInS / 60;
    let ageInHrs = ageInMins / 60;
    let ageInDays = ageInHrs / 24;
    let ageInMonths = ageInDays / 30.4375;
    let ageInYears = ageInMonths / 12;
    
    document.querySelector('#years').innerHTML = `Tahun: ${Math.floor(ageInYears)}`;
    document.querySelector('#months').innerHTML = `Bulan: ${Math.floor(ageInMonths % 12)}`;
    document.querySelector('#days').innerHTML = `Hari: ${Math.floor(ageInDays % 30.4375)}`;
    document.querySelector('#hours').innerHTML = `Jam: ${Math.floor(ageInHrs % 24)}`;
    document.querySelector('#minutes').innerHTML = `Menit: ${Math.floor(ageInMins % 60)}`;
    document.querySelector('#second').innerHTML = `Detik: ${Math.floor(ageInS % 60)}`;
  }, 1000);
}

function reset() {
  clearInterval(intervalID);
  window.location.reload();
}