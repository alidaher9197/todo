const allData = {...localStorage };
const sortedKeys = Object.keys(allData).sort();
const main = document.querySelector("main");
localStorage.length == 0 ? main.innerHTML = "<h2> No Todo yet</h2>" : main.innerHTML = "";
const sortedData = {};
sortedKeys.forEach(key => {
    sortedData[key] = allData[key];
});
for (const key in sortedData) {
    try {
        // Try to parse JSON values

        const data_json = JSON.parse(allData[key]);

        main.innerHTML = main.innerHTML + `<div>
            <h2>${data_json.todo}</h2>
            <p>${data_json.date}</p>
            <section>
                <button onclick="goToEdit('${key}')">Edit</button>
                <button onclick="delete_todo(this, '${key}')">Delete</button>
            </section> 
        </div>`;
    } catch {
        console.log("no data");
    }
}

const delete_todo = (button, key) => {

    localStorage.removeItem(key);
    const div = button.closest('div');
    if (div) div.remove();

    localStorage.length == 0 && (main.innerHTML = "<h2> No Todo yet</h2>")
}

function goToEdit(key) {
    window.location.href = `update_todo.html?key=${key}`;
}