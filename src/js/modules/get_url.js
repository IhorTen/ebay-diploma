import {_cb_findItemsByKeywords} from "./main_function";
import {keywords} from "./get_keywords";

export function get_url() {
    let quantity = 15;

    let url = "https://svcs.ebay.com/services/search/FindingService/v1";
    url += "?OPERATION-NAME=findItemsByKeywords";
    url += "&SERVICE-VERSION=2.0.0";
    url += "&siteid=EBAY-US";
    url += "&SECURITY-APPNAME=-My1Api-PRD-68bb06b1d-2b1daea1";
    url += "&GLOBAL-ID=EBAY-US";
    url += "&RESPONSE-DATA-FORMAT=JSON";
    url += "&callback=_cb_findItemsByKeywords";
    url += "&sortOrder=StartTimeNewest";
    url += "&REST-PAYLOAD";
    url += "&keywords=" + keywords;
    url += "&itemFilter(0).name=HideDuplicateItems";
    url += "&itemFilter(0).value=true";
    url += "&itemFilter(1).name=ListingType";
    url += "&itemFilter(1).value(0)=AuctionWithBIN";
    url += "&itemFilter(1).value(1)=FixedPrice";
    url += "&itemFilter(2).name=LocatedIn";
    url += "&itemFilter(2).value(0)=US";
    url += "&paginationInput.entriesPerPage=" + quantity;

    return url;

}

window._cb_findItemsByKeywords = _cb_findItemsByKeywords;
window.keywords = keywords;
