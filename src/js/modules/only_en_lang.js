
export function only_en_lang() {
    // код которые позволяет вводить в input только буквы англ-го алфавита,а также цифры и символы .,+*
$('.search_input').on('keypress', function (event) {
    var regex = new RegExp("^[a-z.,+*A-Z0-9 ]+$");
    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (regex.test(str)) {
        return true;
    }

    event.preventDefault();
    return false
});
}