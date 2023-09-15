$(document).ready(function() {
    document.getElementById('convertBtn').addEventListener('click', function() {
      const currency = document.getElementById('currency').value;
      const amount = parseFloat(document.getElementById('amount').value);
    
      if (isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
      }
    
      let conversionRate;
    
      // Conversion rates as of September 2021
      const conversionRates = {
        USD: 82.26, // 1 USD to INR
        EUR: 90.79, // 1 EUR to INR
        GBP: 105.67, // 1 GBP to INR
        JPY: 0.58, // 1 JPY to INR
        AUD: 54.69, // 1 AUD to INR
          };
    
      if (currency in conversionRates) {
        conversionRate = conversionRates[currency];
      } else {
        alert('Invalid currency selection.');
        return;
      }
    
      const convertedAmount = amount * conversionRate;
      alert(`You have successfully withdrawn ${convertedAmount.toFixed(2)} INR. Please collect your cash for ${amount} ${currency}.`);
    });
    });