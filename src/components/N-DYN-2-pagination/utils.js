const getPageSpread = (pages, current) => {
  const spreadPages = pages.map(page => ({
    page,
    isCurrent: current === page
  }));
  return spreadPages;
};

export const getPages = (current, total) => {
  if (total <= 5) {
    const items = Array.from(new Array(total).keys()).map(n => n + 1);
    return getPageSpread(items, current);
  }
  if (current < 5) {
    const items = Array.from(new Array(4).keys()).map(n => n + 1);
    return [
      ...getPageSpread(items, current),
      { isEllipses: true, page: 5 },
      ...getPageSpread([total], current)
    ];
  }
  if (total > 5 && current >= total - 3) {
    return [
      ...getPageSpread([1], current),
      { isEllipses: true, page: total - 4 },
      ...getPageSpread([total - 3, total - 2, total - 1, total], current)
    ];
  }
  if (total > 6 && current > 4) {
    return [
      ...getPageSpread([1], current),
      { isEllipses: true, page: current - 2 },
      ...getPageSpread([current - 1, current, current + 1], current),
      { isEllipses: true, page: current + 2 },
      ...getPageSpread([total], current)
    ];
  }
  return [];
};
