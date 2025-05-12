export async function collectFingerprint() {
  const entropy = {};
  entropy.errors = [];

  // Basic data
  try {
    entropy.userAgent = navigator.userAgent;
    entropy.screen = `${screen.width}x${screen.height}`;
    entropy.colorDepth = screen.colorDepth;
    entropy.language = navigator.language;
    entropy.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    entropy.platform = navigator.platform;
    entropy.deviceMemory = navigator.deviceMemory || 'unknown';
    entropy.hardwareConcurrency = navigator.hardwareConcurrency || 'unknown';
    entropy.plugins = [...navigator.plugins].map(p => p.name).join(', ') || 'none';
    entropy.touchSupport = 'ontouchstart' in window;
  } catch (e) {
    entropy.errors.push("Basic data error");
    console.warn("⚠️ Basic fingerprinting error:", e);
  }

  // Canvas fingerprint
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = "14px 'Arial'";
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    ctx.fillText('fingerprint!', 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
    ctx.fillText('fingerprint!', 4, 17);
    entropy.canvas = canvas.toDataURL();
  } catch (e) {
    entropy.canvas = 'unavailable';
    entropy.errors.push("Canvas error");
    console.warn("⚠️ Canvas fingerprinting error:", e);
  }

  // WebGL fingerprint
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (gl && debugInfo) {
      entropy.webglVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      entropy.webglRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    } else {
      throw new Error("WebGL or debug extension not available");
    }
  } catch (e) {
    entropy.webglVendor = 'unavailable';
    entropy.webglRenderer = 'unavailable';
    entropy.errors.push("WebGL error");
    console.warn("⚠️ WebGL fingerprinting error:", e);
  }

  // Audio fingerprint with SHA-256 hashing
  try {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const analyser = context.createAnalyser();
    const gain = context.createGain();
    oscillator.connect(analyser);
    analyser.connect(gain);
    gain.connect(context.destination);
    oscillator.start(0);
    const buffer = new Float32Array(analyser.fftSize);
    analyser.getFloatFrequencyData(buffer);
    const audioStr = buffer.slice(0, 10).join(',');
    const audioEncoded = new TextEncoder().encode(audioStr);
    const audioHashBuffer = await crypto.subtle.digest("SHA-256", audioEncoded);
    const audioHashArray = Array.from(new Uint8Array(audioHashBuffer));
    entropy.audio = audioHashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    oscillator.stop();
  } catch (e) {
    entropy.audio = 'unavailable';
    entropy.errors.push("Audio fingerprint error");
    console.warn("⚠️ Audio fingerprinting error:", e);
  }

  // Fingerprint ID: deterministic SHA-256 of sorted entropy
  const ordered = Object.keys(entropy)
    .filter(k => k !== 'errors')
    .sort()
    .reduce((obj, key) => {
      obj[key] = entropy[key];
      return obj;
    }, {});

  const encoder = new TextEncoder();
  const data = encoder.encode(JSON.stringify(ordered));
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const fingerprintId = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return { fingerprintId, entropy };
}