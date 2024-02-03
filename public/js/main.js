const registerUsername = document.querySelector('#register-username')
const registerPassword = document.querySelector('#register-password')
const loginUsername = document.querySelector('#login-username')
const loginPassword = document.querySelector('#login-password')
const productName = document.querySelector('#products-name')
const productDescription = document.querySelector('#products-description')
const jwt = document.querySelector('#users-jwt')
const responsesEl = document.querySelectorAll('pre')

document.querySelector('#register button')
.addEventListener('click', () => {
  fetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      username: registerUsername.value,
      password: registerPassword.value,
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(res => responsesEl[0].textContent = JSON.stringify(res))
})

document.querySelector('#login button')
.addEventListener('click', () => {
  fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      username: loginUsername.value,
      password: loginPassword.value,
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(res => responsesEl[1].textContent = res)
})

document.querySelector('#users-me button')
.addEventListener('click', () => {
  fetch('/api/users/me', {
    headers: {
      authorization: 'Bearer ' + jwt.value
    }
  })
  .then(res => res.json())
  .then(res => responsesEl[2].textContent = JSON.stringify(res))
})

document.querySelector('#products button')
.addEventListener('click', () => {
  fetch('/api/products/', {
    method: 'POST',
    body: JSON.stringify({
      name: productName.value,
      description: productDescription.value,
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(res => responsesEl[3].textContent = JSON.stringify(res))
})
