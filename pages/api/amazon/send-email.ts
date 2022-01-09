/**
 * References:
 * - https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ses/index.html
 * - https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-ses/classes/sendemailcommand.html
 * - https://aws.amazon.com/premiumsupport/knowledge-center/ses-554-400-message-rejected-error/
 */
import { NextApiRequest, NextApiResponse } from 'next'
import { SendEmailCommand, SESClient } from '@aws-sdk/client-ses'

const sesClient = new SESClient({
  region: 'eu-west-1',
  credentials: {
    accessKeyId: process.env.SES_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.SES_AWS_SECRET_ACCESS_KEY!,
  },
})

const sendEmail = async (
  senderName: string,
  senderCompany: string,
  senderMail: string,
  message: string
) => {
  const subject = `Postcard received from ${senderName}, ${senderCompany}`
  const command = new SendEmailCommand({
    Source: 'admin@guitton.co',
    Destination: {
      ToAddresses: ['admin@guitton.co'],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Html: {
          Data: `
          <h1>${subject}</h1>
          <p>Email: ${senderMail}</p>
          <div>
            ${message.split('\r\n').map((line) => `<p>${line}</p>`).join('')}
          </div>
          `,
        },
      },
    },
    ReplyToAddresses: [senderMail],
  })

  const data = await sesClient.send(command)
  return data
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).send({
      error: 'Method Not Allowed',
    })
  }

  // console.log(req.body);
  const { ['full-name']: fullName, company, email, message } = req.body

  try {
    const data = await sendEmail(fullName, company, email, message)
    res.status(200).json({ sent: 'ok' })
  } catch (error) {
    console.error(`❌ Failed to send email: `, error)
    return res.status(400).send({
      error: 'Could not send the email',
    })
  }
}

export default handler
