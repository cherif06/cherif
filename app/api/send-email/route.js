import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, phone, service, message } = body;

    // Validation basique
    if (!firstname || !email || !message) {
      return Response.json(
        { error: "Prénom, email et message sont requis." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const serviceLabels = {
      api: "Développement d'API avec Laravel",
      ui: "Interfaces modernes & responsive",
      devops: "DevOps & Déploiement",
      mobile: "Développement mobile",
      seo: "Référencement SEO & Google Analytics",
      fullstack: "Développement Fullstack",
      other: "Autre",
    };

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📩 Nouveau message de ${firstname} ${lastname || ""} — ${serviceLabels[service] || "Autre"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a2e; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #00ff99, #00b8d9); padding: 30px; text-align: center;">
            <h1 style="margin: 0; color: #000; font-size: 24px;">Nouveau message reçu</h1>
          </div>
          <div style="padding: 30px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #aaa; width: 140px;">👤 Nom complet</td>
                <td style="padding: 10px 0; font-weight: bold;">${firstname} ${lastname || ""}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #aaa;">📧 Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #00ff99;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #aaa;">📞 Téléphone</td>
                <td style="padding: 10px 0;">${phone || "Non renseigné"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #aaa;">🛠 Service</td>
                <td style="padding: 10px 0;">${serviceLabels[service] || "Non spécifié"}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 20px; background: #27272c; border-radius: 8px; border-left: 4px solid #00ff99;">
              <p style="color: #aaa; margin: 0 0 10px;">💬 Message :</p>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
              Envoyé depuis votre portfolio — ${new Date().toLocaleString("fr-FR", { timeZone: "Africa/Dakar" })}
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return Response.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
