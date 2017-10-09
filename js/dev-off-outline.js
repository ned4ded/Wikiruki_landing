

document.getElementById("off-outline-btn").addEventListener("click", function () {
    console.log('Click!');

    if(document.getElementById('outline-stylesheet') === null) {
      console.log('Yep its null');
      var head = document.head;
      var link = document.createElement('link');

      link.id = 'outline-stylesheet';
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = 'styles/markup-color-border.css';

      head.appendChild(link);
    } else {
      console.log('nope, its not null');

      document.getElementById('outline-stylesheet').remove();
      // var link = getElementById()
    }

    return;
});

window.addEventListener('keydown', function(event) {
  if(event.keyCode === 27) {
    console.log('Space clicked!');

    if(document.getElementById('outline-stylesheet') === null) {
      console.log('Yep its null');
      var head = document.head;
      var link = document.createElement('link');

      link.id = 'outline-stylesheet';
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = 'styles/markup-color-border.css';

      head.appendChild(link);
    } else {
      console.log('nope, its not null');

      document.getElementById('outline-stylesheet').remove();
      // var link = getElementById()
    }

    return;
  }
});
