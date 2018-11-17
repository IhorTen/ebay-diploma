export let keywords = '';

export function get_keywords() {
    keywords = $('.search_input').val();
    let error = '';

    if (!keywords) {
        error = 'Keywords are empty!';
        console.log(error);
        $('.search_input').attr('placeholder', error);
    } else
        return keywords;
}