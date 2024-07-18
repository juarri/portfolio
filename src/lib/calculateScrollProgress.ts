interface CalculateScrollProgressOptions {
  target: Element | null;
  offset: [string, string];
}

export default function calculateScrollProgress(
  options: CalculateScrollProgressOptions,
): number {
  const { target, offset } = options;

  if (!target) {
    return 0; // Return 0 if target is null
  }

  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const elementRect = target.getBoundingClientRect();
  const elementOffsetTop = elementRect.top + scrollPosition;
  const elementHeight = target.clientHeight; // Use clientHeight for Element
  const elementOffsetBottom = elementOffsetTop + elementHeight;

  const parseOffset = (
    offsetDef: string,
    elementStart: number,
    elementEnd: number,
  ): number => {
    const [start, end] = offsetDef.split(" ");
    const startOffset = start === "start" ? elementStart : elementEnd;
    const endOffset = end === "end" ? windowHeight : 0;
    return startOffset - endOffset;
  };

  const startOffset = parseOffset(
    offset[0],
    elementOffsetTop,
    elementOffsetBottom,
  );
  const endOffset = parseOffset(
    offset[1],
    elementOffsetTop,
    elementOffsetBottom,
  );

  let progress = 0;
  if (scrollPosition >= startOffset && scrollPosition <= endOffset) {
    const totalOffset = endOffset - startOffset;
    progress = (scrollPosition - startOffset) / totalOffset;
  } else if (scrollPosition > endOffset) {
    progress = 1;
  }

  progress = Math.max(0, Math.min(1, progress));

  return progress;
}
