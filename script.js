function submitForm(){
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let cls = document.getElementById('class').value;

  if(name == "" || phone == "" || cls == ""){
    alert("Please saare box bharo!");
    return;
  }

  let fees = {6:800, 7:800, 8:900, 9:1000, 10:1200};
  
  let result = document.getElementById('result');
  result.style.display = "block";
  result.innerHTML = "✅ <b>Thank You " + name + "!</b><br>Class " + cls + " ke liye Fees: <b>₹" + fees[cls] + "/month</b><br>Hum aapko jald call karenge.";

  let old = localStorage.getItem('students') || "0";
  let total = parseInt(old) + 1;
  localStorage.setItem('students', total);
  document.getElementById('count').innerText = "Abhi tak Total Applications: " + total;
}