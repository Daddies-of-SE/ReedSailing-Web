server = 'https://reedsailing.xyz/api/';

function insert_option(form, select, value, content) {
    var option = document.createElement('option');
    option.innerText = content;
    $(option).attr('value', value);
    select.append(option);
    form.render('select');
}

function time_check(start, end) {
    return Date.parse(start) <= Date.parse(end);
}
