server = 'http://114.116.94.235/';

function insert_option(form, select, value, content) {
    var option = document.createElement('option');
    option.innerText = content;
    $(option).attr('value', value);
    select.append(option);
    form.render('select');
}