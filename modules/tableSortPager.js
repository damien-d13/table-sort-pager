
import {paginateTable} from './tablePager.js';
import {sortTable} from "./tableSort.js";

export function wrap(tableId, sortClass, navId, rowCountPerPageArray , defaultOrder = "DESC" ) {

    let callback = paginateTable(
        tableId,
        navId,
        rowCountPerPageArray
    );

    sortTable(
        tableId,
        sortClass,
        defaultOrder,
        callback
    );


}

// wrap("myTable", "sort", "pagination-navigation", [2, 5, 10, 15, 20, 25, 30], "ASC");
//
// wrap("second-table", "second-sort", "navigation", [5, 10, 15, 20, 25, 30], "ASC");

// sortTable(
//     "myTable",
//     "sort",
//     "ASC"
// );
//
// sortTable(
//     "second-table",
//     "second-sort",
//     "ASC"
// );
//
// paginateTable(
//     "myTable",
//     "pagination-navigation",
//     [2, 5, 10, 15, 20, 25, 30]
// );
//
// paginateTable(
//     "second-table",
//     "navigation",
//     [5, 10, 15, 20, 25, 30]
// );