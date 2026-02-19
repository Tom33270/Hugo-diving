import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      text: `
Nom : ${name}
Email : ${email}

Message :
${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur email :", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}