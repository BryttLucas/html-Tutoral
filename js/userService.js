let users = [
    { id: 1, name: "Brytt", favColor: 'red', favNumber: 7 },
    { id: 2, name: "Tim", favColor: 'orange', favNumber: 11 },
    { id: 3, name: "Shelly", favColor: 'Blue', favNumber: 3 },
    { id: 4, name: "Diana", favColor: 'pink', favNumber: 12 },
    { id: 5, name: "Sue", favColor: 'Snow White', favNumber: 5 }
];

$().ready(() => {

    console.log("Ready!");

    display();

    $("#add").click(() => {
        let id = $("#pid").val();
        let name = $("#name").val();
        let color = $("#color").val();
        let nbr = $("#nbr").val();
        let user = {
            id: id, name: name, favColor: color, favNumber: nbr
        }
        users.push(user);
        display();
    });
    
});

const sort = () => {
    let sortByFavNumber = (a, b) => {
        return a.favNumber - b.favNumber;
    }
    users.sort(sortByFavNumber);
}

const display = () => {
    let tbody = $("#tbody");
    tbody.html('');
    sort();
    for(let user of users) {
        let id = $(`<td>${user.id}</td>`);
        let name = $(`<td>${user.name}</td>`);
        let color = $(`<td>${user.favColor}</td>`);
        let nbr = $(`<td>${user.favNumber}</td>`);
        let tr = $("<tr></tr>");
        tr.append(id);
        tr.append(name);
        tr.append(color);
        tr.append(nbr);
        tbody.append(tr);
    }
    $("#pid").val('');
    $("#name").val('');
    $("#color").val('');
    $("#nbr").val('');
}