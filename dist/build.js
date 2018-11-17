/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_only_en_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/only_en_lang */ \"./src/js/modules/only_en_lang.js\");\n/* harmony import */ var _modules_change_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/change_buttons */ \"./src/js/modules/change_buttons.js\");\n/* harmony import */ var _modules_get_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get_url */ \"./src/js/modules/get_url.js\");\n\n\n\nvar IdList = [];\nwindow.IdList = IdList;\nshowIdList();\nObject(_modules_change_buttons__WEBPACK_IMPORTED_MODULE_1__[\"change_buttons\"])();\nObject(_modules_only_en_lang__WEBPACK_IMPORTED_MODULE_0__[\"only_en_lang\"])();\n\nfunction showIdList(root) {\n  if (keywords && !$('.button_off_on').hasClass('btn-danger')) {\n    var real_url = Object(_modules_get_url__WEBPACK_IMPORTED_MODULE_2__[\"get_url\"])();\n\n    if (document.getElementById('showIdList')) {\n      document.getElementById('showIdList').remove();\n    }\n\n    var main_url = document.createElement('script');\n    main_url.src = real_url;\n    main_url.id = 'showIdList';\n    document.body.appendChild(main_url);\n  }\n\n  setTimeout(function () {\n    showIdList(root);\n  }, 1500);\n}\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/change_buttons.js":
/*!******************************************!*\
  !*** ./src/js/modules/change_buttons.js ***!
  \******************************************/
/*! exports provided: change_buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"change_buttons\", function() { return change_buttons; });\n/* harmony import */ var _get_keywords__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_keywords */ \"./src/js/modules/get_keywords.js\");\n\nfunction change_buttons() {\n  // код который меняет классы, id, цвета и названия кнопок\n  $('.button_status').on('click', function (elem) {\n    var butt_status = $(elem.target);\n    var butt_status_id = butt_status.attr('id');\n\n    switch (butt_status_id) {\n      case 'butt_start':\n        butt_status.attr('id', 'butt_searching');\n        butt_status.html('Searching...');\n        keywords = Object(_get_keywords__WEBPACK_IMPORTED_MODULE_0__[\"get_keywords\"])();\n        break;\n\n      case 'butt_start_new':\n        keywords = Object(_get_keywords__WEBPACK_IMPORTED_MODULE_0__[\"get_keywords\"])();\n        butt_status.removeClass('btn-info');\n        butt_status.addClass('btn-primary');\n        butt_status.attr('id', 'butt_searching');\n        butt_status.html('Searching...');\n        break;\n    }\n  });\n\n  function change_button_launch(remove, add, attr, html) {\n    var button_off_on_el = $('.button_off_on');\n    button_off_on_el.removeClass(remove);\n    button_off_on_el.addClass(add);\n    button_off_on_el.attr('id', attr);\n    button_off_on_el.html(html);\n  }\n\n  $('#butt_off_on').on('click', function () {\n    var button_off_on_id = $('.button_off_on').attr('id');\n\n    switch (button_off_on_id) {\n      case 'butt_off_on':\n        change_button_launch('btn-success', 'btn-danger', 'butt_stopped', 'Press to launch');\n        $('.button_status').addClass('disabled');\n        break;\n\n      case 'butt_stopped':\n        change_button_launch('btn-danger', 'btn-success', 'butt_launched', 'Press to stop');\n        $('.button_status').removeClass('disabled');\n        break;\n\n      case 'butt_launched':\n        change_button_launch('btn-success', 'btn-danger', 'butt_stopped', 'Press to launch');\n        $('.button_status').addClass('disabled');\n        break;\n    }\n  });\n  $('#butt_start').on('click', function () {\n    $('.button_off_on').removeClass('disabled');\n  });\n  $('.search_input').on('keypress', function () {\n    var butt_stat = $('.button_status');\n\n    if (butt_stat.attr('id') != 'butt_start') {\n      butt_stat.attr('id', 'butt_start_new');\n      butt_stat.removeClass('btn-primary');\n      butt_stat.addClass('btn-info');\n      butt_stat.html('Start New Search'); //добавляет кнопку Back которая при нажатии возвращает предыдущее значение keywords, если input был изменен\n\n      $('.butt_back_sp').html('<button id=\"butt_back\" class=\"btn btn-dark butt_back \">Back</button>');\n      $('.butt_back').on('click', function () {\n        var butt_stat_new = $('#butt_start_new');\n        $('.butt_back').addClass('disabled');\n        butt_stat_new.removeClass('btn-info');\n        butt_stat_new.addClass('btn-primary');\n        butt_stat_new.attr('id', 'butt_searching');\n        butt_stat_new.html('Searching...');\n        $('.search_input').val(keywords);\n      });\n      $('#butt_start_new').on('click', function () {\n        $('#butt_back').remove();\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/change_buttons.js?");

/***/ }),

/***/ "./src/js/modules/get_keywords.js":
/*!****************************************!*\
  !*** ./src/js/modules/get_keywords.js ***!
  \****************************************/
/*! exports provided: keywords, get_keywords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"keywords\", function() { return keywords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_keywords\", function() { return get_keywords; });\nvar keywords = '';\nfunction get_keywords() {\n  keywords = $('.search_input').val();\n  var error = '';\n\n  if (!keywords) {\n    error = 'Keywords are empty!';\n    console.log(error);\n    $('.search_input').attr('placeholder', error);\n  } else return keywords;\n}\n\n//# sourceURL=webpack:///./src/js/modules/get_keywords.js?");

/***/ }),

/***/ "./src/js/modules/get_new_id_list.js":
/*!*******************************************!*\
  !*** ./src/js/modules/get_new_id_list.js ***!
  \*******************************************/
/*! exports provided: getNewIdList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNewIdList\", function() { return getNewIdList; });\nfunction getNewIdList(items, only_id) {\n  //функция создает самый первый ID массив (только ID), если он уже есть то пушит всю информацию об новом элементе\n  var NewidList = [];\n\n  for (var i = 0; i < items.length; i++) {\n    var Idarray = {};\n    if (only_id === 'id_list') Idarray.itemId = items[i].itemId;else Idarray = items[i];\n    NewidList.push(Idarray);\n  }\n\n  return NewidList;\n}\n\n//# sourceURL=webpack:///./src/js/modules/get_new_id_list.js?");

/***/ }),

/***/ "./src/js/modules/get_url.js":
/*!***********************************!*\
  !*** ./src/js/modules/get_url.js ***!
  \***********************************/
/*! exports provided: get_url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get_url\", function() { return get_url; });\n/* harmony import */ var _main_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_function */ \"./src/js/modules/main_function.js\");\n/* harmony import */ var _get_keywords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_keywords */ \"./src/js/modules/get_keywords.js\");\n\n\nfunction get_url() {\n  var quantity = 15;\n  var url = \"https://svcs.ebay.com/services/search/FindingService/v1\";\n  url += \"?OPERATION-NAME=findItemsByKeywords\";\n  url += \"&SERVICE-VERSION=2.0.0\";\n  url += \"&siteid=EBAY-US\";\n  url += \"&SECURITY-APPNAME=-My1Api-PRD-68bb06b1d-2b1daea1\";\n  url += \"&GLOBAL-ID=EBAY-US\";\n  url += \"&RESPONSE-DATA-FORMAT=JSON\";\n  url += \"&callback=_cb_findItemsByKeywords\";\n  url += \"&sortOrder=StartTimeNewest\";\n  url += \"&REST-PAYLOAD\";\n  url += \"&keywords=\" + _get_keywords__WEBPACK_IMPORTED_MODULE_1__[\"keywords\"];\n  url += \"&itemFilter(0).name=HideDuplicateItems\";\n  url += \"&itemFilter(0).value=true\";\n  url += \"&itemFilter(1).name=ListingType\";\n  url += \"&itemFilter(1).value(0)=AuctionWithBIN\";\n  url += \"&itemFilter(1).value(1)=FixedPrice\";\n  url += \"&itemFilter(2).name=LocatedIn\";\n  url += \"&itemFilter(2).value(0)=US\";\n  url += \"&paginationInput.entriesPerPage=\" + quantity;\n  return url;\n}\nwindow._cb_findItemsByKeywords = _main_function__WEBPACK_IMPORTED_MODULE_0__[\"_cb_findItemsByKeywords\"];\nwindow.keywords = _get_keywords__WEBPACK_IMPORTED_MODULE_1__[\"keywords\"];\n\n//# sourceURL=webpack:///./src/js/modules/get_url.js?");

/***/ }),

/***/ "./src/js/modules/main_function.js":
/*!*****************************************!*\
  !*** ./src/js/modules/main_function.js ***!
  \*****************************************/
/*! exports provided: _cb_findItemsByKeywords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_cb_findItemsByKeywords\", function() { return _cb_findItemsByKeywords; });\n/* harmony import */ var _get_new_id_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_new_id_list */ \"./src/js/modules/get_new_id_list.js\");\n\nfunction _cb_findItemsByKeywords(root) {\n  var items = root.findItemsByKeywordsResponse[0].searchResult[0].item || [];\n  var updated_elements = [];\n  var max_length = 30;\n  var full_inf_length = 10;\n  var time_Now = new Date().getTime() - new Date().getTimezoneOffset();\n  var max_time = 600000;\n  var minute = 60000;\n  var second = 1000;\n\n  if (!IdList.length) {\n    //если масив IdList пустой, то в него добавляются только ID элементов\n    IdList = Object(_get_new_id_list__WEBPACK_IMPORTED_MODULE_0__[\"getNewIdList\"])(items, 'id_list');\n  } else {\n    //если масив IdList заполнен ID-ми, то в новый масив updated_elements добавляются элементы со всей информацией\n    updated_elements = Object(_get_new_id_list__WEBPACK_IMPORTED_MODULE_0__[\"getNewIdList\"])(items, '');\n\n    for (var i = 0; i < updated_elements.length; i++) {\n      var new_Id = '';\n\n      for (var e = 0; e < IdList.length; e++) {\n        if (updated_elements[i].itemId[0] == IdList[e].itemId[0]) {\n          //если ID повторяются в обоих массивах, условие break\n          new_Id = 'found';\n          break;\n        }\n      }\n\n      if (!new_Id) {\n        //находим новое ID и дальше проверка на макс длину массива\n        if (IdList.length >= max_length) IdList.splice(max_length - 1, 1); //вычисляем разницу во времени от момента когда продукт выставили и до момента когда\n        // поиск его 'выловил', и дальше сортируем по этой временной разнице и добавляем ее значение в\n        // полную информацию об элементе\n\n        var time_diff = time_Now - Date.parse(updated_elements[i].listingInfo[0].startTime[0]);\n\n        if (time_diff < max_time) {\n          var minutes = void 0,\n              seconds = void 0;\n          minutes = Math.floor(time_diff / minute) + ' min';\n          seconds = Math.floor(time_diff % minute / second) + ' sec';\n          updated_elements[i].timeDif = [minutes + ' : ' + seconds];\n        } else {\n          updated_elements[i].timeDif = ['< 10 min'];\n        }\n\n        var price = void 0; //если аукцион то цена элемента будет равна цене Buy It Now, если нет - то обычная\n\n        if (updated_elements[i].listingInfo[0].listingType[0] === 'AuctionWithBIN') price = updated_elements[i].listingInfo[0].buyItNowPrice[0].__value__;else price = updated_elements[i].sellingStatus[0].currentPrice[0].__value__; // создаем сам элемент в html\n\n        var newElemList = '';\n        newElemList += '<li class=\"item product col-md-3 \">';\n        newElemList += '<div class=\"product_container\">';\n        newElemList += '<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"' + updated_elements[i].viewItemURL[0] + '\" class=\"woocommerce-LoopProduct-link woocommerce-loop-product__link\">';\n        if (!updated_elements[i].galleryURL) newElemList += '<img  src=\"\" ></a>';else newElemList += '<img  src=\"' + updated_elements[i].galleryURL[0] + '\" ></a>';\n        newElemList += '<div class=\"es-product-title-wrap\">';\n        newElemList += '<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"' + updated_elements[i].viewItemURL[0] + '\">';\n        newElemList += '<h2 class=\"woocommerce-loop-product__title\">' + updated_elements[i].title[0] + '</h2></a>';\n        newElemList += '<span class=\"price\">$' + price + '</span></div>';\n        newElemList += '<div class=\"es-product-buttons-wrap\">';\n        newElemList += '<a  href=\"#\" class=\"add_to_cart_button \">ID: ' + updated_elements[i].itemId[0] + '</a>';\n        newElemList += '<a href=\"#\" class=\"add_to_wishlist\">' + updated_elements[i].timeDif[0] + '</a></div>';\n        newElemList += '</div>';\n        newElemList += '</li>'; // сортируем по категории 9355 (Cell Phones & Smartphones)(отображаем элементы только из этой категории)\n\n        if (updated_elements[i].primaryCategory[0].categoryId[0] === '9355') {\n          IdList.unshift(updated_elements[i]); //если разница во времени больше 10 мин, элемент в списке New Elements не отображаеться, выводится\n          // только его ID в списке Saved Elements\n\n          if (time_diff < max_time) $('.updated_el_list').prepend(newElemList); // все элементы до full_inf_length имеют полную информацию, остальные только ID\n\n          if (IdList.length > full_inf_length) IdList[full_inf_length] = {\n            'itemId': [IdList[full_inf_length].itemId]\n          };\n        }\n      }\n    }\n\n    console.log(IdList); //сохраненные ID всех элементов ( в html это список Saved Elements)\n\n    var savedHTMLid = [];\n\n    for (var _i = 0; _i < IdList.length; _i++) {\n      savedHTMLid.push('<span class=\"Id_List_new\">' + IdList[_i].itemId[0] + '</span>');\n    }\n\n    $(\".Id_List\").html(savedHTMLid.join(\"\"));\n  }\n}\n\n//# sourceURL=webpack:///./src/js/modules/main_function.js?");

/***/ }),

/***/ "./src/js/modules/only_en_lang.js":
/*!****************************************!*\
  !*** ./src/js/modules/only_en_lang.js ***!
  \****************************************/
/*! exports provided: only_en_lang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"only_en_lang\", function() { return only_en_lang; });\nfunction only_en_lang() {\n  // код которые позволяет вводить в input только буквы англ-го алфавита,а также цифры и символы .,+*\n  $('.search_input').on('keypress', function (event) {\n    var regex = new RegExp(\"^[a-z.,+*A-Z0-9 ]+$\");\n    var str = String.fromCharCode(!event.charCode ? event.which : event.charCode);\n\n    if (regex.test(str)) {\n      return true;\n    }\n\n    event.preventDefault();\n    return false;\n  });\n}\n\n//# sourceURL=webpack:///./src/js/modules/only_en_lang.js?");

/***/ })

/******/ });