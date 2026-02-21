import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message, number } = req.body;

  try {
    await resend.emails.send({
      from: "Hugo Diving <onboarding@resend.dev>",
      to: "hugodiving974@gmail.com",
      subject: "Demande de contact depuis ton site",
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Numéro :</strong> ${number}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erreur lors de l'envoi" });
  }
}