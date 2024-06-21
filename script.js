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
        let taskContent;
        if (newTaskName.length > 20) {
            taskContent = `<div class="item"><div class="ellipsis">${newTaskName}</div> - ${newTaskDate} - ${newTaskTime}</div>`;
        } else {
            taskContent = `<div class="item">${newTaskName} - ${newTaskDate} - ${newTaskTime}</div>`;
        }
        
        $(taskContent).appendTo(newTask);
        $(newTask).appendTo('ol');
        
        $('#name').val('');
        $('#date').val('');
        $('#time').val('');
    });
    
    $('ol').on('click', '.item', function (e) {
        e.preventDefault();
        $(this).toggleClass("feito");
        
    });

});
