import { collectFingerprint } from "./fingerprint.js";

let sessionId = localStorage.getItem("session_id");
let fingerprintId = null;
let entropyData = null;

const referrer = document.referrer || "Direct";
const userAgent = navigator.userAgent.toLowerCase();
const device = /mobile|android|iphone|ipad/.test(userAgent) ? "Mobile" : "Desktop";

export async function initVisitorLog() {
  const page = window.location.pathname;
  const client_timestamp = new Date().toISOString();

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem("session_id", sessionId);
  }

  const { fingerprintId: fpId, entropy } = await collectFingerprint();
  fingerprintId = fpId;
  entropyData = entropy;

  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source") || null;
  const utm_medium = params.get("utm_medium") || null;
  const utm_campaign = params.get("utm_campaign") || null;
  const utm_term = params.get("utm_term") || null;
  const utm_content = params.get("utm_content") || null;

  await fetch("https://visitor-intel-api.onrender.com/log-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page,
      referrer,
      device,
      session_id: sessionId,
      fingerprint_id: fingerprintId,
      entropy_data: entropyData,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      client_timestamp
    }),
  })
    .then(res => res.json())
    .then(data => console.log("✅ Visitor logged:", data))
    .catch(err => console.error("Visitor log error:", err));
}

export function logEvent(eventType, eventData = null) {
  const page = window.location.pathname;
  const client_timestamp = new Date().toISOString();

  if (!sessionId || !fingerprintId) {
    console.warn("⚠️ Session or fingerprint not ready yet.");
    return;
  }

  return fetch("https://visitor-intel-api.onrender.com/log-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: sessionId,
      fingerprint_id: fingerprintId,
      event_type: eventType,
      event_data: eventData,
      page,
      referrer,
      device,
      entropy_data: entropyData,
      client_timestamp
    }),
  })
    .then(res => res.json())
    .then(data => console.log("📌 Event logged:", data))
    .catch(err => console.error("Event log error:", err));
}

export function startTimeTracker() {
  const pageStartTime = Date.now();
  window.addEventListener("beforeunload", () => {
    const duration = Math.round((Date.now() - pageStartTime) / 1000);
    if (typeof window.logEvent === "function") {
      window.logEvent("time_on_page", { duration });
    }
  });
}