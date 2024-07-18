interface ObserveQueryVisibilityParams {
  query: string;
  observerOptions: IntersectionObserverInit;
  onEnterViewport: (target: Element) => void;
  onExitViewport: (target: Element) => void;
}

function observeQueryVisibility({
  query,
  observerOptions,
  onEnterViewport,
  onExitViewport,
}: ObserveQueryVisibilityParams) {
  const elementsToObserve = document.querySelectorAll(query);

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onEnterViewport(entry.target);
      } else {
        onExitViewport(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(
    observerCallback,
    (observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      ...observerOptions,
    }),
  );

  elementsToObserve.forEach((element) => observer.observe(element));
}

export default observeQueryVisibility;
