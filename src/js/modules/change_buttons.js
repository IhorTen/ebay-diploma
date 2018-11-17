import {get_keywords} from "./get_keywords";

export function change_buttons() {
// код который меняет классы, id, цвета и названия кнопок
    $('.button_status').on('click', function (elem) {
        let butt_status = $(elem.target);
        let butt_status_id = butt_status.attr('id');

        switch (butt_status_id) {
            case 'butt_start':
                butt_status.attr('id', 'butt_searching');
                butt_status.html('Searching...');
                keywords = get_keywords();
                break;
            case 'butt_start_new':
                keywords = get_keywords();
                butt_status.removeClass('btn-info');
                butt_status.addClass('btn-primary');
                butt_status.attr('id', 'butt_searching');
                butt_status.html('Searching...');
                break;
        }
    });

    function change_button_launch(remove, add, attr, html) {
        let button_off_on_el = $('.button_off_on');

        button_off_on_el.removeClass(remove);
        button_off_on_el.addClass(add);
        button_off_on_el.attr('id', attr);
        button_off_on_el.html(html);
    }


    $('#butt_off_on').on('click', function () {
        let button_off_on_id = $('.button_off_on').attr('id');

        switch (button_off_on_id) {
            case 'butt_off_on':
                change_button_launch('btn-success', 'btn-danger', 'butt_stopped', 'Press to launch');
                $('.button_status').addClass('disabled');
                break;
            case 'butt_stopped':
                change_button_launch('btn-danger', 'btn-success', 'butt_launched', 'Press to stop');
                $('.button_status').removeClass('disabled');
                break;
            case 'butt_launched':
                change_button_launch('btn-success', 'btn-danger', 'butt_stopped', 'Press to launch');
                $('.button_status').addClass('disabled');
                break;
        }
    });

    $('#butt_start').on('click', function () {
        $('.button_off_on').removeClass('disabled');
    });

    $('.search_input').on('keypress', function () {
        let butt_stat = $('.button_status');

        if (butt_stat.attr('id') != 'butt_start') {
            butt_stat.attr('id', 'butt_start_new');
            butt_stat.removeClass('btn-primary');
            butt_stat.addClass('btn-info');
            butt_stat.html('Start New Search');
            //добавляет кнопку Back которая при нажатии возвращает предыдущее значение keywords, если input был изменен
            $('.butt_back_sp').html('<button id="butt_back" class="btn btn-dark butt_back ">Back</button>');
            $('.butt_back').on('click', function () {
                let butt_stat_new = $('#butt_start_new');

                $('.butt_back').addClass('disabled');
                butt_stat_new.removeClass('btn-info');
                butt_stat_new.addClass('btn-primary');
                butt_stat_new.attr('id', 'butt_searching');
                butt_stat_new.html('Searching...');

                $('.search_input').val(keywords);
            });
            $('#butt_start_new').on('click', function () {
                $('#butt_back').remove();
            });
        }
    });
}
