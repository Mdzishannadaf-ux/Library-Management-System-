const form = document.getElementById("bookForm");

const bookList =
document.getElementById("bookList");

let editRow = null;

form.addEventListener("submit", function(e){

    e.preventDefault();

    const bookName =
    document.getElementById("bookName").value;

    const author =
    document.getElementById("author").value;

    const bookId =
    document.getElementById("bookId").value;

    const category =
    document.getElementById("category").value;

    if(editRow == null){

        const row =
        document.createElement("tr");

        row.innerHTML = `

            <td>${bookName}</td>

            <td>${author}</td>

            <td>${bookId}</td>

            <td>${category}</td>

            <td>

                <button onclick="editBook(this)">
                    Edit
                </button>

                <button onclick="deleteBook(this)">
                    Delete
                </button>

            </td>
        `;

        bookList.appendChild(row);

    }

    else{

        editRow.cells[0].innerHTML = bookName;
        editRow.cells[1].innerHTML = author;
        editRow.cells[2].innerHTML = bookId;
        editRow.cells[3].innerHTML = category;

        editRow = null;

    }

    form.reset();

});

function deleteBook(button){

    button.parentElement.parentElement.remove();

}

function editBook(button){

    editRow =
    button.parentElement.parentElement;

    document.getElementById("bookName").value =
    editRow.cells[0].innerHTML;

    document.getElementById("author").value =
    editRow.cells[1].innerHTML;

    document.getElementById("bookId").value =
    editRow.cells[2].innerHTML;

    document.getElementById("category").value =
    editRow.cells[3].innerHTML;

}
