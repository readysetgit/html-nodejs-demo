const loadDataFromDB = (requestObj) => {
    $.get("/read-from-db", requestObj) // Make HTTP GET call to nodeJS Server
        .done(function(res) {
            console.log(res.data);
            insertIntoTable('data-table', res.data)
        })
}

const insertIntoTable = (tableId, dataArray) => {
    $(`#${tableId}`).html('');
    let innerHtml = '';
    for (let data of dataArray) {
        innerHtml += `<tr><td>${data.name}</td><td>${data.age}</td></tr>`
    }
    $(`#${tableId}`).html(innerHtml);
}

