export default {
  name: 'sun-md',
  bind(el) {
    el.sunHtml = el.innerHTML
    el.textContent = el.innerHTML = '';
  }
}