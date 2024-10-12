const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()

  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')
  const results1= document.querySelector('#results1')
 if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
 }
 if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
 }
 else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
    if(bmi < 18.6){
        results1.innerHTML = "Unerweight"
    }
    if(bmi > 18.6 && bmi < 24.9){
        results1.innerHTML = "Normal Weight"
    }
    else{
        results1.innerHTML = "OverWeight"
    }
 }
})