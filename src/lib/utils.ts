export const dqsl = <T extends string>(selector: T) => {
  const el = document.querySelector(selector);
  if (el && el instanceof HTMLElement) return el;
};
export const dqsla = <T extends string>(selector: T) => {
  return Array.from(document.querySelectorAll(selector)).filter(
    (el) => el instanceof HTMLElement,
  );
};
