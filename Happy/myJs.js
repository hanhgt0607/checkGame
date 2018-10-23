var celebrationNames = [
  'Ngô Thị Ngọc Ánh',
  'Ngô Thị Mai',
  'Giang Thị Tình',
  'Giang Thị Hạnh',
  'Trần Thị Hương Ly',
  'Đặng Danh Quảng'
];

var show_more = document.getElementById('show-more');
show_more.onclick = function () {
  this.classList.add('hidden-tag');
  var list_name = document.getElementById('list-name');
  for (var i = 0; i < celebrationNames.length; i++) {
    list_name.innerHTML += '<li>' + celebrationNames[i] + '</li>';
  }
}






