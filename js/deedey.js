$.getJSON('filelist')
  .done(function(files) {
    $('script.checklist').template({files: files})
  })

$('body').on('change', 'input.file', function() {
  $('script.comic').template({
    files: $('input:checked').map(function (v) { return 'files' + this.name }).get()
  })
})
