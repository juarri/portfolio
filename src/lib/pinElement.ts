export default function pinElement(element: Element | null, pinDuration = 0) {
  if (!element) return;

  let isPinned = false;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY >= pinDuration && !isPinned) {
      // If the scroll position is greater than or equal to pinDuration, pin the element
      isPinned = true;
      element.style.position = "fixed";
      element.style.top = "0";
    } else if (scrollY < pinDuration && isPinned) {
      // If the scroll position is less than pinDuration, unpin the element
      isPinned = false;
      element.style.position = "";
      element.style.top = "";
    }
  });
}
