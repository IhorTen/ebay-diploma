export function getNewIdList(items, only_id) {
    //функция создает самый первый ID массив (только ID), если он уже есть то пушит всю информацию об новом элементе
    let NewidList = [];

    for (let i = 0; i < items.length; i++) {
        let Idarray = {};

        if (only_id === 'id_list')
            Idarray.itemId = items[i].itemId;
        else
            Idarray = items[i];

        NewidList.push(Idarray);
    }
    return NewidList;
}