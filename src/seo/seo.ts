/* Lightweight SEO utilities for SPA (no external deps). */

export type HreflangMap = Record<string, string>;

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = `link[rel="${rel}"]${href ? `[href]` : ''}`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  if (href) el.setAttribute('href', href);
  if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
}

export function setTitle(title: string) {
  document.title = title;
  // Open Graph title
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
  // Twitter title
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
}

export function setDescription(desc: string) {
  upsertMeta('meta[name="description"]', { name: 'description', content: desc });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: desc });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: desc });
}

export function setCanonical(url: string) {
  upsertLink('canonical', url);
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
}

export function setOgImage(url: string) {
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: url });
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: url });
}

export function setOgType(type: string) {
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
}

export function setTwitterCard(card: 'summary' | 'summary_large_image') {
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: card });
}

export function setHreflangs(map: HreflangMap) {
  // Remove existing alternates first (to avoid duplicates when navigating)
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((n) => n.remove());
  Object.entries(map).forEach(([lang, href]) => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', lang);
    link.setAttribute('href', href);
    document.head.appendChild(link);
  });
}

export function injectJSONLD(id: string, data: object) {
  const existing = document.getElementById(id);
  const script = existing instanceof HTMLScriptElement ? existing : document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(data);
  if (!existing) {
    document.head.appendChild(script);
  }
}

export function removeJSONLD(id: string) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
}

export function absoluteUrl(root: string, path: string) {
  if (path.startsWith('http')) return path;
  if (!root.endsWith('/') && !path.startsWith('/')) return `${root}/${path}`;
  return `${root}${path}`;
}
