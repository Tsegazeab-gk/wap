"use strict";
$(function() {
    $('#hw').change(function() {
        let file = ''+$('#hw').val();
        console.log(file);
        if(file.length==0) {
            $('#output').val('');
        } else {
        $.ajax({
            'url': file,
            'type': 'GET',
            'success': onSuccess,
            'error': onFailure
        });
        }
    });
});

function onSuccess(data) {
    $('#output').val(data);
}

function onFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}
