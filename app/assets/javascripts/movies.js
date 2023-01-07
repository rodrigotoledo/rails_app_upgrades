$(document).ready(function () {
  $('#q').on('keyup', function () {
    var settings = {
      async: true,
      crossDomain: true,
      url: $(this).data('url'),
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: {
        q: $(this).val(),
      },
    }

    $.ajax(settings).done(function (response) {
      $('#movies').html(response)
    })
  })
})
