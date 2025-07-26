import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, cityState, subject, message } = body;

    if (!name || !email || !phone || !cityState || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Please fill in all required fields.' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_HOST,
      port: Number(process.env.ZOHO_PORT),
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    const htmlContent = `
      <h1>New Inquiry from 601bullies.com</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>City/State:</strong> ${cityState}</p>
      <hr />
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    const mailOptions = {
      // --- THIS IS THE FIX ---
      // The email will now show as being from the person's name via your site
      from: `"${name} via 601 Bullies" <${process.env.ZOHO_EMAIL}>`,
      // Add this line so when you hit "Reply", it replies to their email, not yours
      replyTo: email,
      
      to: 'contact@601bullies.com', // Your receiving email address
      subject: `New Puppy Inquiry: ${subject}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });

  } catch (error) {
    console.error('Mail send error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), { status: 500 });
  }
}