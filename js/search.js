// function search contacts

function searchInput () {
  var input, filter, table, tr, td, i
  input = document.getElementById('searchInput')
  filter = input.value.toUpperCase()
  table = document.getElementById('tableSearch')
  tr = table.getElementsByTagName('tr')
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[0]
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}