$(document).ready(function(){
    dateFormatChange();
});

function dateFormatChange(){
    $('.date input[type="date"]').change(function(){
        let date = $(this).val();
        let dateYear = date.substr(0, 4);
        let dateMonth = date.substr(5, 2);
        let dateDay = date.substr(8, 2);

        $(this).closest('.date').find('input[type="text"]').val(dateYear + '.' + dateMonth + '.' + dateDay)
    });
}