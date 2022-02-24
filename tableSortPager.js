import {paginateTable} from './modules/tablePager';
import {sortTable} from "./modules/tableSort";


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