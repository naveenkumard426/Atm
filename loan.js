function applyForLoan() {
    // Get input values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  
    
    // Display loan application result
    const loanResult = document.getElementById("loanResult");
    loanResult.innerHTML = `
      <h3>Loan Application Result for ${fullName}</h3>
      <p>Email: ${email}</p>
      <p>Loan Amount: $${loanAmount}</p>
      <p>Application Status: <strong>Application Pending</strong></p>
    `;
  
    // Show the alert message
    alert("Your Loan Request Submitted Successfully");
    alert("We will review your application and get back to you soon.");
  }
  