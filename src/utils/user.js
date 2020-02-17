const getFirstName = fullName => {
  return fullName.split(' ')[0]
}

const isValidPassword = loginPassword => {
  return loginPassword.length >= 8 && !loginPassword.toLowerCase().includes('loginPassword')
}

export { getFirstName, isValidPassword }
