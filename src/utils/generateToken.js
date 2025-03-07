import jwt from 'jsonwebtoken'

const generateToken = userId => jwt.sign({ userId }, process.env.JWT_TOKEN, { expiresIn: '7 days' })

export { generateToken as default }
