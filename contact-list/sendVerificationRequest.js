import nodemailer from 'nodemailer'

export default async function sendVerificationRequest({ identifier: email, url, provider }) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  })

  const message = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: `Verify your ${provider?.name ?? 'account'}`,
    html: `
      <p>Hello!</p>
      <p>Please <a href="${url}">click here to verify your ${provider?.name ?? 'account'}</a>.</p>
      <p>If you did not request this, please ignore this email.</p>
    `,
  }

  await transporter.sendMail(message)
}