import {wrap} from './modules/tableSortPager.js';

wrap("myTable", "sort", "pagination-navigation", [2, 5, 10, 15, 20, 25, 30], "ASC");

wrap("second-table", "second-sort", "navigation", [5, 10, 15, 20, 25, 30], "ASC");