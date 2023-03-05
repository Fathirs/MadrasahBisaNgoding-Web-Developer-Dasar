function handleGetFormData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;
  
    return {
      name: name,
      email: email,
      city: city,
      zipCode: zipCode,
      status: status
    };
  }
  
  
  function isNumber(string) {
    for (let i = 0; i < string.length; i++) {
      if (isNaN(string[i])) {
        return false;
      }
    }
    return true;
  }
  
  function checkboxIsChecked() {
    const checkbox = document.getElementById("status");
    if (checkbox.checked === true) {
      return true;
    } else {
      return false;
    }
  }
  
  function validateFormData(data) {
    return (
      data !== null &&
      typeof data.zipCode === "number" &&
      document.getElementById("status").checked === true
    );
  }
  
  function handleGetFormData() { 
      const name = document.getElementById('name').value; 
      const email = document.getElementById('email').value; 
      const city = document.getElementById('city').value; 
      const zipCode = document.getElementById('zip-code').value; 
      const status = document.getElementById('status').checked; 
      return {name, email, city, zipCode, status}; 
  } 
  function isNumber(string) {return !isNaN(string)} 
   
  function checkboxIsChecked() { 
      const checkbox = document.getElementById('status'); 
      if (checkbox.checked) { 
          return true; 
      }} 
  function validateFormData(formData) { 
      return formData && !isNaN(formData.zipCode) && document.getElementById('status').checked; 
  } 
  function submit() { 
      if (validateFormData(handleGetFormData())) warning.innerText =''; 
      else warning.innerText = 'Periksa form anda sekali lagi'; 
  }
  