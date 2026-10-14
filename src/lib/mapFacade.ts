const observed = new WeakSet<HTMLElement>();

function loadMap(facade: HTMLElement) {
  if (facade.dataset.loaded === 'true') return;
  const src = facade.dataset.src;
  if (!src) return;

  facade.dataset.loaded = 'true';
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.title = facade.dataset.title || 'Location map';
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.className = 'absolute inset-0 h-full w-full border-0';
  facade.replaceChildren(iframe);
}

/** Swap each map placeholder for its iframe the first time it enters the viewport. */
export function initMapFacades() {
  const facades = document.querySelectorAll<HTMLElement>('.map-facade');
  if (!facades.length) return;

  if (!('IntersectionObserver' in window)) {
    facades.forEach(loadMap);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const facade = entry.target as HTMLElement;
        loadMap(facade);
        observer.unobserve(facade);
      }
    },
    { rootMargin: '120px 0px' },
  );

  for (const facade of facades) {
    if (observed.has(facade) || facade.dataset.loaded === 'true') continue;
    observed.add(facade);
    facade.querySelector('button')?.addEventListener('click', () => {
      loadMap(facade);
      observer.unobserve(facade);
    });
    observer.observe(facade);
  }
}
