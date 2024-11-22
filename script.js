//------------------------------------------------SideBar------------------------------------------------//
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//------------------------------------------------Feedback site(Input Validation)------------------------------------------------//
function validate(event) {
  event.preventDefault(); // Prevents the default form submission when validation fails

  emailjs.init({
    publicKey: "Y0MG98j8c-FRqYnvd",
  });
 
  // Get the values entered on the HTML form using document.getElementById()
  var email = document.getElementById("email").value; 
  var date = document.getElementById("date").value;
  var email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if(email == ''){ // Ensure email & date are filled out
    document.getElementById("msg2").innerHTML= "(Please enter your email.)";

  } else if(!email_filter.test(email)){
    document.getElementById("msg2").innerHTML= "(Please enter a valid email address.)";

  }if(date ==''){
    document.getElementById("msg3").innerHTML= "(Please fill out the date.)";

  } if(email =='' || date ==''|| !email_filter.test(email)){
    document.getElementById("target").scrollIntoView(true); // Automatically scroll to the h1: Feedback Form if the info needed is not completed by the user
    /* this info is taken from: https://stackoverflow.com/questions/5013281/need-javascript-to-auto-scroll-to-the-target-html-element-after-page-loads*/
  } 
  // emailjs (send email to the host when submit clicked) - Info is taken from : https://www.youtube.com/watch?v=BgVjild0C9A
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    date : document.getElementById("date").value,
    feedbacktype: Array.from(document.querySelectorAll('input[name="feedback"]:checked')).map(checkbox => checkbox.value).join(", "),     
    Q1_1 : document.getElementById("Q1_1").value,
    Q1_2 : document.getElementById("Q1_2").value,
    Q1_3 : document.getElementById("Q1_3").value,
    recommend: document.querySelector('input[name="recommend"]:checked').value,
    Q1_5 : document.getElementById("Q1_5").value,
    Q2_1 : document.getElementById("Q2_1").value,
    Q2_2 : document.getElementById("Q2_2").value,
    Q2_3 : document.getElementById("Q2_3").value,
    Q2_4 : document.getElementById("Q2_4").value,
    Q2_5 : document.getElementById("Q2_5").value,

}

if(email !=''&& email_filter.test(email) && date !=''&& email !=''){
  emailjs.send("service_hntq50u","template_qj5kl54",parms).then(alert("Form submitted"));
}


/* this info is taken from: https://www.youtube.com/watch?v=BgVjild0C9A */


}


//------------------------------------------------Order site(Input Validation)------------------------------------------------//
function validate2(event){
  event.preventDefault(); // Prevents the default form submission when validation fails

  emailjs.init({
    publicKey: "Y0MG98j8c-FRqYnvd",
  });
 
  // Get the values entered on the HTML form using document.getElementById()
  var username = document.getElementById("name").value;
  var tel = document.getElementById("tel").value;
  var address = document.getElementById("address").value;
  var area = document.getElementById("area").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var form = document.getElementById("order").value;
  var mainCourseSelected = document.querySelector('select[name="Main Course"]').value;
  var beverageSelected = document.querySelector('select[name="Beverage"]').value;
  var dessertSelected = document.querySelector('select[name="Dessert"]').value;
  
  // Ensure all the questions in customer info are not blanked 
  if(username ==''){ 
    document.getElementById("msg1").innerHTML= "(Please enter your name.)";

  }if(tel ==''){
    document.getElementById("msg2").innerHTML= "(Please fill out your phone number.)";

  }if(address ==''){
    document.getElementById("msg3").innerHTML= "(Please fill out your address.)";

  }if(area ==''){
    document.getElementById("msg4").innerHTML= "(Please fill out your living area.)";

  }if(date ==''){
    document.getElementById("msg5").innerHTML= "(Please fill out the date.)";

  }if(time ==''){
    document.getElementById("msg6").innerHTML= "(Please fill out the time.)";

  }if(mainCourseSelected === "0" && beverageSelected === "0" && dessertSelected === "0") { // Check if at least one of the product is selected
    alert("Please select at least one product before submitting the order.");

  } if(username ==''|| tel =='' || address ==''|| area =='' || date =='' || time =='' ){
    document.getElementById("target").scrollIntoView(true); 
    // Automatically scroll to the h1: Make your order if the info needed is not completed by the user
    /* This info is taken from: https://stackoverflow.com/questions/5013281/need-javascript-to-auto-scroll-to-the-target-html-element-after-page-loads*/

  } 

    // emailjs(send email to the host when submit clicked) - Info is taken from : https://www.youtube.com/watch?v=BgVjild0C9A
    let parms = {
      name : document.getElementById("name").value,
      tel : document.getElementById("tel").value,
      address : document.getElementById("address").value,
      area : document.getElementById("area").value,
      date : document.getElementById("date").value,
      time : document.getElementById("time").value,
      main_Course1 : document.getElementById("productSelect1").value,
      quantityM1 : document.getElementById("quantityM1").value,
      main_Course2 : document.getElementById("productSelect2").value,
      quantityM2 : document.getElementById("quantityM2").value,
      main_Course3 : document.getElementById("productSelect3").value,
      quantityM3 : document.getElementById("quantityM3").value,
      beverage1 : document.getElementById("productSelect4").value,
      quantityB1 : document.getElementById("quantityB1").value,
      ColdorHot1: document.getElementById("ColdHotSelect1").value,
      beverage2 : document.getElementById("productSelect5").value,
      quantityB2 : document.getElementById("quantityB2").value,
      ColdorHot2: document.getElementById("ColdHotSelect2").value,
      beverage3 : document.getElementById("productSelect6").value,
      quantityB3 : document.getElementById("quantityB3").value,
      ColdorHot3: document.getElementById("ColdHotSelect3").value,
      dessert1: document.getElementById("productSelect7").value,
      quantityD1 : document.getElementById("quantityD1").value,
      dessert2: document.getElementById("productSelect8").value,
      quantityD2 : document.getElementById("quantityD2").value,
      dessert3: document.getElementById("productSelect9").value,
      quantityD3 : document.getElementById("quantityD3").value,
      TotalPrice: document.getElementById("totalPrice").value,
  }
  
  if(username !=''&& tel !='' && address !=''&& area !='' && date !='' && time !='' && (mainCourseSelected != "0" || beverageSelected != "0" || dessertSelected != "0")){
    emailjs.send("service_hntq50u","template_16sfahe",parms).then(alert("Form submitted"));
  }


} 


//------------------------------------------------Order site& Feedback site(Cancel Button)------------------------------------------------//

// Deleting all the error message 
function resetForm(){ 
  document.getElementById("msg1").innerHTML = "";
  document.getElementById("msg2").innerHTML = "";
  document.getElementById("msg3").innerHTML = "";
  document.getElementById("msg4").innerHTML = "";
  document.getElementById("msg5").innerHTML = "";
  document.getElementById("msg6").innerHTML = "";
}

//------------------------------------------------Order site(Calculate Total Price)------------------------------------------------//

/* Basic codes are generated by ChatGPT */

// Function to calculate total for all selected products
function calculateTotal() {
  
  const productSelects = document.querySelectorAll('.productSelect'); // Select all dropdown elements and store them into productSelects 
  const quantities = document.querySelectorAll('.quantity'); // Select all quantity and store them into quantities

  
  let total = 0; // Set the total to 0


productSelects.forEach((productSelect, index) => { // Loop through each product and quantity

  
  const selectedOption = productSelect.options[productSelect.selectedIndex]; // Retrieves the selected option elements within the productSelect dropdown
  const price = parseFloat(selectedOption.getAttribute('data-price')); // Retrieves the data-price and convert to a float
  const quantity = parseInt(quantities[index].value); // Retrieves the quantity and convert it into an integer, use index to ensure it matches the correct dropdown
    
  
  if (!isNaN(price) && price > 0 && !isNaN(quantity) && quantity > 0) { // Ensure the price and quantity are valid
    total += price * quantity; // Multiples price and quantity to get total
  }
});

document.getElementById('subtotal').innerHTML = `${total.toFixed(2)}`; // Display the total, rounded to two decimal places
document.getElementById('totalPrice').value = total.toFixed(2); // Send subtotal to the server
}

document.addEventListener('DOMContentLoaded', () => { // Add event listeners to each dropdown and quantity input
  const productSelects = document.querySelectorAll('.productSelect');   // Select all dropdown elements 
  const quantities = document.querySelectorAll('.quantity');   // Select all quantity

  productSelects.forEach(select => {   // Add event listener to dropdown element, to make sure the calculateTotal update while the option changed  
    select.addEventListener('change', calculateTotal);
  });

  quantities.forEach(input => {   // Add event listener to quantity, to make sure the calculateTotal update while the input changed  
    input.addEventListener('input', calculateTotal);
  });

  calculateTotal();   // Call to set initial total on page load

});

