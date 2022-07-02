
export function toggleMenu(){
  let menu = document.getElementById('extralarge-modal');
  if (menu?.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  }
  else {
      menu?.classList.add('hidden');
  }
}