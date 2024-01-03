const accordion = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    var panel = this.nextElementSibling;
    panel.classList.toggle("hidden");
    var icons = this.getElementsByClassName('icon-plus')[0];
    icons.classList.toggle('hidden');
    icons = this.getElementsByClassName('icon-minus')[0];
    icons.classList.toggle('hidden');
  });
}
