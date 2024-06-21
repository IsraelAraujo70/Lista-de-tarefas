$(document).ready(function(){
    $('.headerbox button').click(function(){
        if ($('form').is(':visible')) {
            $('form').slideUp();
        } else {
            $('form').slideDown();
        }
    });
    $('#addButton').click(function(l){
        l.preventDefault();
        const newTaskName = $('#name').val();
        const newTaskDate = $('#date').val();
        const newTaskTime = $('#time').val();
        const newTask = $('<li></li>');
        $(`<div class="item">${newTaskName} - ${newTaskDate} - ${newTaskTime}</div>`).appendTo(newTask);
        $(newTask).appendTo('ol');
    });
    
    $('ol').on('click', '.item', function (e) {
        e.preventDefault();
        $(this).toggleClass("feito");
    });
});
