import {only_en_lang} from "./modules/only_en_lang";
import {change_buttons} from "./modules/change_buttons";
import {get_url} from "./modules/get_url";

let IdList = [];
window.IdList= IdList;

showIdList();
change_buttons();
only_en_lang();


function showIdList(root) {
    if (keywords && !$('.button_off_on').hasClass('btn-danger')) {
        let real_url = get_url();

        if (document.getElementById('showIdList')) {
            document.getElementById('showIdList').remove();
        }

        let main_url = document.createElement('script');
        main_url.src = real_url;
        main_url.id = 'showIdList';
        document.body.appendChild(main_url);

    }

    setTimeout(function () {
        showIdList(root);
    }, 1500);
}
