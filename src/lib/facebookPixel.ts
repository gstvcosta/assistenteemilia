// Lightweight Facebook Pixel initializer using Vite envs
// Initializes once and exposes simple tracking helpers with basic monitoring.

type FbqFn = (command: string, ...args: any[]) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
    __PIXEL_STATUS__?: {
      initialized: boolean;
      pixelId?: string;
      lastEvent?: string;
      errors: string[];
    };
  }
}

function getPixelId(explicitId?: string): string | undefined {
  const env = import.meta.env as any;
  const id = explicitId || env.VITE_FACEBOOK_PIXEL_ID;
  return typeof id === 'string' && id.trim().length > 0 ? id.trim() : undefined;
}

function ensureStatus() {
  if (!window.__PIXEL_STATUS__) {
    window.__PIXEL_STATUS__ = { initialized: false, errors: [] };
  }
  return window.__PIXEL_STATUS__!;
}

export function initFacebookPixel(pixelId?: string) {
  if (typeof window === 'undefined') return; // SSR guard
  const status = ensureStatus();

  const id = getPixelId(pixelId);
  if (!id) {
    const msg = 'Facebook Pixel ID ausente. Defina VITE_FACEBOOK_PIXEL_ID no .env.';
    status.errors.push(msg);
    console.warn(msg);
    return;
  }

  // Evita dupla inicialização: se já há fbq carregado, apenas dispara PageView
  if (status.initialized && window.fbq) {
    try {
      window.fbq!('track', 'PageView');
      status.pixelId = id;
      status.lastEvent = 'PageView';
    } catch (e) {
      const msg = 'Erro ao enviar PageView com Pixel já inicializado.';
      status.errors.push(msg);
      console.error(msg, e);
    }
    return;
  }

  // Standard Facebook Pixel bootstrap snippet
  try {
    // Evita duplicar script se já existir
    const existingScript = document.querySelector('script[src*="connect.facebook.net/en_US/fbevents.js"]');
    if (!existingScript) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          (n as any).callMethod ? (n as any).callMethod.apply(n, arguments as any) : (n as any).queue.push(arguments);
        } as any;
        (n as any).queue = [];
        (n as any).loaded = true;
        (n as any).version = '2.0';
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode?.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }

    // Inicializa o Pixel uma única vez
    window.fbq!('init', id);
    window.fbq!('track', 'PageView');
    status.initialized = true;
    status.pixelId = id;
    status.lastEvent = 'PageView';
    console.info('[Pixel] Inicializado com ID', id);
  } catch (e) {
    const msg = 'Falha ao inicializar o Facebook Pixel.';
    status.errors.push(msg);
    console.error(msg, e);
  }
}

export function trackFacebookEvent(eventName: string, params?: Record<string, any>) {
  const status = ensureStatus();
  if (!window.fbq) {
    const msg = 'fbq não disponível — Pixel não inicializado.';
    status.errors.push(msg);
    console.warn(msg);
    return;
  }
  try {
    window.fbq('track', eventName, params || {});
    status.lastEvent = eventName;
    console.info(`[Pixel] Evento '${eventName}' enviado`, params || {});
  } catch (e) {
    const msg = `Erro ao enviar evento '${eventName}'.`;
    status.errors.push(msg);
    console.error(msg, e);
  }
}

export function trackFacebookCustomEvent(eventName: string, params?: Record<string, any>) {
  const status = ensureStatus();
  if (!window.fbq) {
    const msg = 'fbq não disponível — Pixel não inicializado.';
    status.errors.push(msg);
    console.warn(msg);
    return;
  }
  try {
    window.fbq('trackCustom', eventName, params || {});
    status.lastEvent = eventName;
    console.info(`[Pixel] Evento custom '${eventName}' enviado`, params || {});
  } catch (e) {
    const msg = `Erro ao enviar evento custom '${eventName}'.`;
    status.errors.push(msg);
    console.error(msg, e);
  }
}