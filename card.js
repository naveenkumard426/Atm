// Function to submit card application
function submitCardApplication() {
    const fullName1 = document.getElementById("fullName1").value;
    const email1 = document.getElementById("email1").value;
    const cardType = document.getElementById("cardType").value;
  
  
    // Perform any client-side validation if needed
    if (!fullName1 || !email1 || !cardType) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    // Create the card application result message
    const applicationResultMessage ="Card Application Result\n" +
  "Thank you, " + fullName1 + ", for applying for a " + (cardType === 'debit' ? 'Debit' : 'Credit') + " Card.\n" + "We will contact you at " + email1 + " with further updates";
  
    // Show the card application result in an alert
    alert(applicationResultMessage);
  }
  