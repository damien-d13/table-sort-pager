
export function sortTable(tableId, sortClass, defaultOrder = "DESC") {

    let table = document.getElementById(tableId);
    let tableBody = table.getElementsByTagName("tbody")[0];
    let tableRows = tableBody.getElementsByTagName("tr");

    let data = [];
    for (let i = 0; i < tableRows.length; i++) {
        let values = tableRows[i].getElementsByTagName("td");
        let arrayValues = [];
        for (let j = 0; j < values.length; j++) {
            arrayValues.push(values[j]);
        }
        data.push(arrayValues);
    }

    let titles = table.getElementsByTagName("thead")[0].getElementsByTagName("th");

    let order = defaultOrder;
    let sortButtons = [];
    let states = {}

    for (let index = 0; index < titles.length; index++) {

        if (titles[index].className === sortClass) {
            let button = document.createElement('button');
            button.innerHTML = order === "ASC" ? "&uarr;" : "&darr;";
            button.value = index.toString();
            let text = " " + titles[index].textContent.trim();
            titles[index].innerHTML = "";
            titles[index].append(button);
            titles[index].append(text);
            sortButtons.push(button);
            states[button] = order;
        }
    }

    function sortByColumn(columnIndex, reverse = false) {
        data.sort((row1, row2) => {
            return row1[columnIndex].textContent.localeCompare(row2[columnIndex].textContent);
        });
        if (reverse) {
            data.reverse();
        }
        let rowCount = tableRows.length;
        for (let i = 0; i < rowCount; i++) {tableRows[0].remove();}
        data.forEach((row) => {
            let tr = document.createElement("tr");
            row.forEach((td) => {
                tr.appendChild(td);
            })
            tableBody.appendChild(tr);
        });
    }

    sortButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (states[button] === "ASC") {
                button.innerHTML = "&darr;";
                states[button] = "DESC";
                sortByColumn(parseInt(button.value), false);
            } else {
                button.innerHTML = "&uarr;";
                states[button] = "ASC";
                sortByColumn(parseInt(button.value), true);
            }
        });
    });

    sortByColumn(0, order === "ASC");
}