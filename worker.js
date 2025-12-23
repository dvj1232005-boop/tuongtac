export default {
  async fetch(req) {
    if (req.method !== "POST")
      return new Response("Not allowed", { status: 405 });

    const { message } = await req.json();

    const TELEGRAM_TOKEN = "8545247225:AAESHj0s7eZOPWnOWEvTFSaIh8hHwxUFQWA";
    const CHAT_ID = "6887159720";

    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message })
      }
    );

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
