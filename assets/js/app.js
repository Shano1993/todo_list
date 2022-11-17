import "../styles/style.css";

let submit = document.createElement("input");
let input = document.createElement("input");
let form = document.querySelector("#form");
let content = document.querySelector("#content");
let clear = document.querySelector("#clear");

/**
 * create input search in container
 */

let createInput = function () {
    this.addInput = function () {
        input.type = "text";
        submit.type = "submit";
        submit.value = "Add Item";
        form.append(input);
        form.append(submit);
    }
}

let addSearchBar = new createInput();
addSearchBar.addInput();

/**
 * create item in container
 * @param text
 */
export let item = function (text) {
    this.text = text;

    this.addItem = function (add, edit, del) {
        const newItem = document.createElement("p");
        add = document.createElement("span");
        edit = document.createElement("span");
        del = document.createElement("span");
        add.innerHTML = "✔";
        edit.innerHTML = "📝";
        del.innerHTML = "❌";
        text = input.value;
        newItem.className = "task";
        newItem.innerHTML = text;
        content.append(newItem);
        content.append(add);
        content.append(edit);
        content.append(del);

        del.addEventListener("click", function () {
            newItem.remove();
            add.remove();
            edit.remove();
            del.remove();
        })

        edit.addEventListener("click", function () {
            let editItem = document.createElement("input");
            editItem.type = "text";
            newItem.contentEditable = "true";
            newItem.style.border = "1px solid brown";
            setTimeout(() => {
                newItem.contentEditable = "false";
                newItem.style.border = "none";
            }, 5000);
        })

        add.addEventListener("click", function () {
            newItem.contentEditable = "false";
            newItem.style.textDecorationLine = "line-through";
        })

        clear.addEventListener("click", function () {
            newItem.remove();
            add.remove();
            edit.remove();
            del.remove();
        })
    }
}

let addItem = new item();
submit.addEventListener("click", function () {
    addItem.addItem();
    addItem.contentEditable = "false";
    input.value = "";
})

