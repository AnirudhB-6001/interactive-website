// src/utils/fingerprint.js

export async function collectFingerprint() {
    const entropy = {};
  
    // Basic data
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
    }
  
    // WebGL fingerprint
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      entropy.webglVendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
      entropy.webglRenderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    } catch (e) {
      entropy.webglVendor = 'unavailable';
      entropy.webglRenderer = 'unavailable';
    }
  
    // Audio fingerprint
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
      entropy.audio = buffer.slice(0, 10).join(',');
      oscillator.stop();
    } catch (e) {
      entropy.audio = 'unavailable';
    }
  
    // Hashing the entropy to generate fingerprint_id
    const encoder = new TextEncoder();
    const data = encoder.encode(JSON.stringify(entropy));
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const fingerprintId = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
    return { fingerprintId, entropy };
  }  