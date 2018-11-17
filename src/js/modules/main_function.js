import {getNewIdList} from "./get_new_id_list";

export function _cb_findItemsByKeywords(root) {
    let items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];
    let updated_elements = [];
    let max_length = 30;
    let full_inf_length = 10;
    let time_Now = ((new Date().getTime()) - (new Date().getTimezoneOffset()));
    let max_time = 600000;
    let minute = 60000;
    let second = 1000;

    if (!IdList.length) {
        //если масив IdList пустой, то в него добавляются только ID элементов
        IdList = getNewIdList(items, 'id_list');
    } else {
        //если масив IdList заполнен ID-ми, то в новый масив updated_elements добавляются элементы со всей информацией
        updated_elements = getNewIdList(items, '');

        for (let i = 0; i < updated_elements.length; i++) {
            let new_Id = '';

            for (let e = 0; e < IdList.length; e++) {
                if (updated_elements[i].itemId[0] === IdList[e].itemId[0]) {
                    //если ID повторяются в обоих массивах, условие break
                    new_Id = 'found';
                    break;
                }
            }

            if (!new_Id) {
                //находим новое ID и дальше проверка на макс длину массива
                if (IdList.length >= max_length)
                    IdList.splice(max_length - 1, 1);

                //вычисляем разницу во времени от момента когда продукт выставили и до момента когда
                // поиск его 'выловил', и дальше сортируем по этой временной разнице и добавляем ее значение в
                // полную информацию об элементе
                let time_diff = time_Now - Date.parse(updated_elements[i].listingInfo[0].startTime[0]);

                if (time_diff < max_time) {
                    let minutes,
                        seconds;
                    minutes = Math.floor(time_diff / minute) + ' min';
                    seconds = Math.floor((time_diff % minute) / second) + ' sec';

                    updated_elements[i].timeDif = [minutes + ' : ' + seconds];
                } else {
                    updated_elements[i].timeDif = ['< 10 min'];
                }

                let price;
                //если аукцион то цена элемента будет равна цене Buy It Now, если нет - то обычная
                if (updated_elements[i].listingInfo[0].listingType[0] === 'AuctionWithBIN')
                    price = updated_elements[i].listingInfo[0].buyItNowPrice[0].__value__;
                else
                    price = updated_elements[i].sellingStatus[0].currentPrice[0].__value__;

                // создаем сам элемент в html
                let newElemList = '';
                newElemList += '<li class="item product col-md-3 ">';
                newElemList += '<div class="product_container">';
                newElemList += '<a target="_blank" rel="noopener noreferrer" href="' + updated_elements[i].viewItemURL[0] + '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">';
                if (!updated_elements[i].galleryURL)
                    newElemList += '<img  src="" ></a>';
                else
                    newElemList += '<img  src="' + updated_elements[i].galleryURL[0] + '" ></a>';

                newElemList += '<div class="es-product-title-wrap">';
                newElemList += '<a target="_blank" rel="noopener noreferrer" href="' + updated_elements[i].viewItemURL[0] + '">';
                newElemList += '<h2 class="woocommerce-loop-product__title">' + updated_elements[i].title[0] + '</h2></a>';
                newElemList += '<span class="price">$' + price + '</span></div>';
                newElemList += '<div class="es-product-buttons-wrap">';
                newElemList += '<a  href="#" class="add_to_cart_button ">ID: ' + updated_elements[i].itemId[0] + '</a>';
                newElemList += '<a href="#" class="add_to_wishlist">' + updated_elements[i].timeDif[0] + '</a></div>';
                newElemList += '</div>';
                newElemList += '</li>';

                // сортируем по категории 9355 (Cell Phones & Smartphones)(отображаем элементы только из этой категории)
                if (updated_elements[i].primaryCategory[0].categoryId[0] === '9355') {
                    IdList.unshift(updated_elements[i]);
                    //если разница во времени больше 10 мин, элемент в списке New Elements не отображаеться, выводится
                    // только его ID в списке Saved Elements
                    if (time_diff < max_time)
                        $('.updated_el_list').prepend(newElemList);


                    // все элементы до full_inf_length имеют полную информацию, остальные только ID
                    if (IdList.length > full_inf_length)
                        IdList[full_inf_length] = {'itemId': [IdList[full_inf_length].itemId]};
                }
            }
        }
        console.log(IdList);

        //сохраненные ID всех элементов ( в html это список Saved Elements)
        let savedHTMLid = [];
        for (let i = 0; i < IdList.length; i++) {
            savedHTMLid.push('<span class="Id_List_new">' + IdList[i].itemId[0] + '</span>');
        }
        $(".Id_List").html(savedHTMLid.join(""));
    }
}
