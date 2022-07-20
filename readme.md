# Intro:

This project is a JavaScript application that allows you to add pagination and a sort filter to tables

## Table of Contents

- [Latest updates](#Latest updates)
- [Requirement](#Requirement)
- [Features](#Features)
- [Installation](#installation)
- [Configuration](#Configuration)
- [Usage examples](#Usage exeamples)
- [Maintainers](#Maintainers)

## Latest updates

## Requierement

Compatibility of your project with javascript language

## Features

## Installation

Downlaod the project into your files project and link main.js and all file uin modules.

## configuration

```javascript
import('./modules/tableSort');
import('./modules/tablePager');
import('./modules/tableSortPager');
import('./main.js');
```

## Usage examples

in main files change or add wrap like this with your id and classe name:

```javascript
wrap("myTable", "sort", "pagination-navigation", [2, 5, 10, 15, 20, 25, 30], "ASC");
```

"myTable" is the id of your table.

"sort" is the classe of your sortable column.

"pagination-navigation" is the pagition menu that appears.

[2, 5, 10, 15, 20, 25, 30] is the element yu can see per page.

"ASC" is the direction of the sort filter ("ASC" for ascendant and "DESC" for descendant) Optional DESC by default.


## Maintainers

* __[Damien Devoti](https://github.com/damien-d13)__
*  __[Theo Battani ](https://github.com/theoBattani)__

