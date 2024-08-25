function calculate() {
  const display = document.querySelector(".results");

  //input values
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const interestAmount = parseFloat(
    document.querySelector("#interestAmount").value
  );
  const month = parseFloat(document.querySelector("#month").value);

  if (isNaN(loanAmount) || isNaN(interestAmount) || isNaN(month)) {
    alert("Please enter a valid number");
  }

  //calculation
  const interest = (interestAmount / 100) * loanAmount;
  const totalInterest = loanAmount + interest;
  const monthlyPay = totalInterest / month;
  if (loanAmount && interestAmount && month) {
    display.innerHTML = `<p>Monthly Payments: ${monthlyPay.toFixed(2)} Taka</p> 
    <p>Total Interest: ${interest.toFixed(2)} Taka</p>`;
  }
}
