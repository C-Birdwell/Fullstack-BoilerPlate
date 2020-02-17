import bcrypt from 'bcryptjs'

const hashPassword = loginPassword => {
  if (loginPassword.length < 8) {
    throw new Error('Password must be 8 characters or longer.')
  }

  return bcrypt.hash(loginPassword, 10)
}

export { hashPassword as default }
