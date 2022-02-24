import {paginateTable} from './modules/tablePager.js';
import {sortTable} from "./modules/tableSort.js";


sortTable(
    "myTable",
    "sort",
    "ASC"
);

sortTable(
    "second-table",
    "second-sort",
    "ASC"
);

paginateTable(
    "myTable",
    "pagination-navigation",
    [2, 5, 10, 15, 20, 25, 30]
);

paginateTable(
    "second-table",
    "navigation",
    [5, 10, 15, 20, 25, 30]
);