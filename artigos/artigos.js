// Mesmo número do site principal (WhatsApp Business). Se trocar lá, trocar aqui também.
var WHATS = '5541995229633';
document.querySelectorAll('.wpp').forEach(function (a) {
  a.href = 'https://wa.me/' + WHATS + '?text=' + encodeURIComponent(a.dataset.msg || 'Olá, Dr. Pedro!');
  a.target = '_blank'; a.rel = 'noopener';
});
document.querySelectorAll('.tel').forEach(function (a) { a.href = 'tel:+' + WHATS; });
