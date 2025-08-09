document.addEventListener('DOMContentLoaded', function() {
  const egg = document.getElementById('egg');
  const msg = document.getElementById('message');

  if (egg) {
    egg.addEventListener('click', () => {
      egg.src = '../images/hatch.gif'; // Replace with your hatch animation file
      msg.textContent = 'Your Skullbird has hatched!';
    });
  }
});
