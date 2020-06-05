"use strict";
$(function() {
    $('#hw').change(function() {
        var file = 'assignment10/lab1/'+$('#hw').val();
        $.ajax({
            'url': file,
            'type': 'GET',
            'success': onSuccess,
            'error': onFailure
        });
    });
});

function onSuccess(data) {
    $('#output').val(data);
}

function onFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}
