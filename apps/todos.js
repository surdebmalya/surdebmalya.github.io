window.onload = function () {
    elem = localStorage.getItem("tasks");
    if (elem != null) {
        update();
    }
}

function clickAddItem() {
    title = document.getElementById("title").value.trim();
    description = document.getElementById("description").value.trim();
    if (title.length == 0 || description.length == 0) {
        alert("Title of a task or Description of a task can't be empty!!!");
    }
    else {
        elem = localStorage.getItem("tasks");
        if (elem == null) {
            // previously no item is stored
            items = [];
            items.push([title, description]);
            localStorage.setItem("tasks", JSON.stringify(items));
        }
        else {
            itemsStr = localStorage.getItem("tasks");
            items = JSON.parse(itemsStr);
            items.push([title, description]);
            localStorage.setItem("tasks", JSON.stringify(items));
        }
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        update();
    }
}

function update() {
    itemsStr = localStorage.getItem("tasks");
    item = JSON.parse(itemsStr);
    str = "";
    let tableBody = document.getElementById("tableBody");
    if (item.length == 0) {
        str += `
        <tr>
            <td colspan="4" style="text-align: center;">
                <i>No task is there</i>
            </td>
        </tr>
        `;
    }
    else {
        item.forEach((ele, i) => {
            str += `
            <tr>
                <td>${i + 1}</td>
                <td>${ele[0]}</td>
                <td>${ele[1]}</td>
                <td>
                    <button class="w3-button w3-red w3-hover-green" onclick="deleteTask(${i})">
                        <i class="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
            `});
    }
    tableBody.innerHTML = str;
}

function deleteTask(itemIndex) {
    itemJsonArrayStr = localStorage.getItem('tasks')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(itemJsonArray));
    update();
}