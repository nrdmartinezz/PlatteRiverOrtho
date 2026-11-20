/**
 * Swap each map facade for its Google Maps iframe once it nears the viewport.
 * The iframe is left out of the initial HTML so pages do not pay for it up front.
 */
function loadMap(facade: HTMLElement) {
  if (facade.dataset.loaded === 'true') return;
  facade.dataset.loaded = 'true';

  const iframe = document.createElement('iframe');
  iframe.src = facade.dataset.src ?? '';
  iframe.title = facade.dataset.title || 'Location map';
  iframe.referrerPolicy = 'no-referrer-when-downgrade';
  iframe.className = 'absolute inset-0 h-full w-full border-0';
  facade.replaceChildren(iframe);
}

function bindMapFacades() {
  const facades = document.querySelectorAll<HTMLElement>('.map-facade');
  const pending = [...facades].filter((facade) => facade.dataset.mapBound !== 'true');
  if (!pending.length) return;

  if (!('IntersectionObserver' in window)) {
    pending.forEach(loadMap);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const facade = entry.target as HTMLElement;
        observer.unobserve(facade);
        loadMap(facade);
      }
    },
    { rootMargin: '200px 0px' },
  );

  for (const facade of pending) {
    facade.dataset.mapBound = 'true';
    observer.observe(facade);
  }
}

bindMapFacades();
