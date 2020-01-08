export const removeScroll = function() {
  const el = document.scrollingElement
  if (
    el &&
    el.style &&
    Object.prototype.hasOwnProperty.call(el.style, 'overflow')
  ) {
    el.style.overflow = 'hidden'
  }
}
export const returnScroll = function() {
  const el = document.scrollingElement
  if (
    el &&
    el.style &&
    Object.prototype.hasOwnProperty.call(el.style, 'overflow')
  ) {
    el.style.overflow = ''
  }
}
