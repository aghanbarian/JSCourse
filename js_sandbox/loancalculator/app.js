document.getElementById('loan-form').addEventListener('submit', function (e) {
  document.getElementById('results').style.display = 'none'
  document.getElementById('loading').style.display = 'block'

  setTimeout(calculateLoanDetail, 2000)

  e.preventDefault()
})

function calculateLoanDetail(e) {
  const amount = document.getElementById('amount')
  const interest = document.getElementById('interest')
  const years = document.getElementById('years')
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  let principal = parseFloat(amount.value)
  let calculatedInterest = parseFloat(interest.value) / 100 / 12
  let calculatedPayments = parseFloat(years.value) * 12

  //compute Monthly payemnt

  const x = Math.pow(1 + calculatedInterest, calculatedPayments)
  const monthly = (principal * x * calculatedInterest) / (x - 1)

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2)
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2)
    //show result
    document.getElementById('results').style.display = 'block'
    document.getElementById('loading').style.display = 'none'
  } else {
    console.log('please check your numbers')
    showError('Please Check Your Parameters')
  }

  //show error
  function showError(err) {
    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'none'
    //create div
    const errorDiv = document.createElement('div')

    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    errorDiv.className = 'alert alert-danger'
    errorDiv.appendChild(document.createTextNode(err))

    card.insertBefore(errorDiv, heading)

    //clear error message

    setTimeout(clearError, 3000)
  }

  function clearError() {
    document.querySelector('.alert').remove()
  }

  e.preventDefault()
}
