import nodemailer from "nodemailer";

export async function POST() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const now = new Date().toLocaleString("fr-FR", { timeZone: "Africa/Dakar" });

    const mailOptions = {
      from: `"Portfolio" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `📥 Quelqu'un a téléchargé votre CV — ${now}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a2e; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #00b8d9, #00ff99); padding: 30px; text-align: center;">
            <h1 style="margin: 0; color: #000; font-size: 24px;">📄 CV Téléchargé !</h1>
          </div>
          <div style="padding: 30px; text-align: center;">
            <p style="font-size: 18px; margin-bottom: 10px;">
              Un visiteur vient de télécharger votre CV sur votre portfolio.
            </p>
            <p style="color: #aaa; font-size: 14px;">
              🕐 ${now}
            </p>
            <div style="margin-top: 24px; padding: 16px; background: #27272c; border-radius: 8px; border-left: 4px solid #00b8d9;">
              <p style="margin: 0; color: #aaa; font-size: 13px;">
                💡 Quelqu'un s'intéresse à votre profil — pensez à vérifier si vous avez un nouveau message dans la section contact !
              </p>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur notification CV:", error);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
