const loadDataFromDB = (requestObj) => {
    $.get("/read-from-db", requestObj) // Make HTTP GET call to nodeJS Server
        .done(function(res) {
            console.log(res.data);
            insertIntoTable('data-table', res.data)
        })
}

const loadQuestionFromDB = () => {
    $.get("/read-from-db") // Make HTTP GET call to nodeJS Server
        .done(function(res) {
            insertIntoElementById('question', res.data) // INSERT DATA INTO HTML
        })
}

const insertIntoElementById = (elementId, innerHtml) => {
    let el = $(`#${elementId}`);
    let finalHtml = innerHtml;
    if (Array.isArray(innerHtml)) {
        finalHtml = arrayToHtml(finalHtml, 'tr', 'td')
    } else {
        finalHtml = `<p>${finalHtml}</p>`
        el.html(finalHtml);
    }
}

const arrayToHtml = (arr, rowType, columnType) => {
    let innerHtml = '';
    for (let item of arr) {
        let itemCols = '';
        for (const [key, value] of Object.entries(item) ) {
            itemCols += `<${columnType}>${value}</${columnType}>`
        }
        innerHtml += `<${rowType}>${itemCols}</${rowType}>`;
    }
    return innerHtml;
};

$(document).ready(() => {
    loadQuestionFromDB();
})

const insertIntoTable = (tableId, dataArray) => {
    $(`#${tableId}`).html('');
    let innerHtml = '';
    for (let data of dataArray) {
        innerHtml += `<tr><td>${data.name}</td><td>${data.age}</td></tr>`
    }
    $(`#${tableId}`).html(innerHtml);
}

