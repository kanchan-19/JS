const insert = document.querySelector('#insert');

window.addEventListener('keydown',function(event){
  insert.innerHTML = `
  <div class = "color">
    <table border="1">
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${event.key === ' ' ? 'Space' : event.key}</td> 
        <td>${event.keyCode}</td>
        <td>${event.code}</td>
      </tr>
    </table>
  </div>
  `
});

// event.key is used to get key value / name. event.keyCode is used to get key code and event.code is used to get key code. e.g. if we press d, then we will get d	68	KeyD as o/p.

