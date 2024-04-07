const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];
  
  //Všechna čísla
  document.body.innerHTML += `<div> Všechna čísla: ${numbers}</div>`
  
  //Druhé mocniny
  const mocnina = [];

  numbers.forEach(num => {
    mocnina.push(num ** 2)})
  
  document.body.innerHTML += `<div> Druhé mocniny všech čísel: ${mocnina}</div>`
  
  //Záporná čísla
  let zapornaCisla = ' '
  numbers.forEach(num => {
    if (num < 0) {
    zapornaCisla += `${num}, `
    }})

  document.body.innerHTML += `<div> Všechna záporná čísla: ${zapornaCisla}</div>`

  //Absolutní hodnotu všech čísel
  const absolutniHodnoty = []
  numbers.forEach(num => {
    const absolutniH = Math.abs(num)
    absolutniHodnoty.push(absolutniH)})
  
  document.body.innerHTML += `<div> Absolutní hodnoty všech čísel: ${absolutniHodnoty}</div>`

  //Sudá čísla
  const sudaCisla = numbers.filter(num => num % 2 === 0)
  document.body.innerHTML += `<div> Sudá čísla: ${sudaCisla}</div>`
  
  //Čísla dělitelná třemi
  const delitelnaTremi = numbers.filter(num => num % 3 === 0)
  document.body.innerHTML += `<div> Čísla dělitelná třemi: ${delitelnaTremi}</div>`

  //Vzdálenosti čísel od čísla 5
  const vzdalenostOd5 = numbers.map(num => Math.abs(num - 5));
  document.body.innerHTML += `<div> Vzdalenost od čísla 5: ${vzdalenostOd5}</div>`
  
  // Druhé mocniny vzdáleností čísel od čísla 5
  const druhhaMocninaVzdalenosti = vzdalenostOd5.map(distance => distance ** 2);
  document.body.innerHTML += `<div> Druhá mocnina vzdálenosti od čísla 5: ${druhhaMocninaVzdalenosti}</div>`

  // Spočítat počet záporných čísel
  let pocetZapornychCisel = 0
  numbers.forEach(num => {
    if (num < 0) {
    pocetZapornychCisel++}})
  
  document.body.innerHTML += `<div> Počet záporných čísel: ${pocetZapornychCisel}</div>`;

  //Spočítat součet všech čísel v poli
  let soucet = 0
  for (let i = 0; i < numbers.length; i++) {
    soucet += numbers[i]}
  document.body.innerHTML += `<div> Součet všech čísel: ${soucet}</div>`

  //Průměr všech čísel
  const prumer = soucet / numbers.length
  document.body.innerHTML += `<div> Průměrná hodnota všech čísel: ${prumer}</div>`

  //Součet všech kladných čísel v poli
  const kladnaCisla = []
  numbers.forEach(num => {
    if (num > 0) {
    kladnaCisla.push(num)}})

  let soucetKladnychCisel = 0
  for (let i = 0; i < kladnaCisla.length; i++) {
    soucetKladnychCisel += kladnaCisla[i]}
 
  document.body.innerHTML += `<div> Součet kladných čísel: ${soucetKladnychCisel}</div>`

  