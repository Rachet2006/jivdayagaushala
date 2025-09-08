export default async function handler(req, res) {
  const allowed = process.env.ALLOWED_ORIGIN || "https://your-domain.vercel.app";
  res.setHeader("Access-Control-Allow-Origin", allowed);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).send("ok");
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  // Parse JSON (Vercel usually parses for you)
  const body = typeof req.body === "object" ? req.body : JSON.parse(req.body || "{}");

  // 1) Honeypot: drop silently if filled
  if (body.hp && String(body.hp).trim() !== "") return res.status(200).send("ok");

  // 2) Optional min submit time: if client sent 'ts'
  if (body.ts && Date.now() - Number(body.ts) < 1200) return res.status(200).send("ok");

  // 3) Optional: Cloudflare Turnstile verification (if you add widget)
  if (process.env.TURNSTILE_SECRET && body.turnstileToken) {
    const form = new URLSearchParams();
    form.append("secret", process.env.TURNSTILE_SECRET);
    form.append("response", body.turnstileToken);
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", body: form,
    }).then(r => r.json()).catch(() => ({ success: false }));
    if (!verify.success) return res.status(401).send("Unauthorized");
  }

  // Clean payload before forwarding
  const forward = { ...body };
  delete forward.hp; delete forward.ts; delete forward.turnstileToken;

  const r = await fetch(process.env.MAKE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(forward),
  });

  if (!r.ok) return res.status(502).send("Upstream error");
  return res.status(200).send("ok");
}
