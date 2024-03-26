

const parentList = document.querySelector(".parentlist");
const input = document.querySelector(".input");
const addButton = document.querySelector(".button");

// Check if there is any data in the local storage
const storedData  = JSON.parse(localStorage.getItem("todoList")) || [];

// Function to render the stored data
const renderStoredData = () => {
    storedData.forEach((value) => {
             console.log(value)
        const li = document.createElement("li");
          li.innerText = value;
   

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.classList.add("btn", "btn-danger","remove-button");

        removeButton.addEventListener("click", () => {
            // Remove from both the UI and the local storage
            parentList.removeChild(li);
            const index = storedData.indexOf(value);
            storedData.splice(index, 1);
            updateLocalStorage();
        });

        li.appendChild(removeButton);
        parentList.appendChild(li);
    });
};

// Render stored data when the page loads
renderStoredData();

addButton.addEventListener("click", () => {
    const value = input.value;

    const li = document.createElement("li");
    li.innerText = value;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.classList.add("btn", "btn-danger", "remove-button");

    removeButton.addEventListener("click", () => {
        parentList.removeChild(li);
        const index = storedData.indexOf(value);
        storedData.splice(index, 1);
        updateLocalStorage();
    });

    li.appendChild(removeButton);
    parentList.appendChild(li);

    // Store the value in the local storage
    storedData.push(value);
    updateLocalStorage();

    input.value = "";
});

// Function to update the local storage
const updateLocalStorage = () => {
    localStorage.setItem("todoList", JSON.stringify(storedData));
};


// const parentList = document.querySelector(".parentlist");
// const input = document.querySelector(".input");
// const addButton = document.querySelector(".button");

// const storedData = JSON.parse(localStorage.getItem("todoList")) || [];

// const renderStoredData = () => {
//     storedData.forEach((value) => {
//         const li = document.createElement("li");
//         li.innerText = value;

//         const removeButton = document.createElement("button");
//         const icon = document.createElement("box-icon");
//         icon.setAttribute("type", "solid");
//         icon.setAttribute("name", "comment-x");
//         removeButton.appendChild(icon);

//         removeButton.classList.add("btn", "btn-danger", "remove-button");

//         removeButton.addEventListener("click", () => {
//             parentList.removeChild(li);
//             const index = storedData.indexOf(value);
//             storedData.splice(index, 1);
//             updateLocalStorage();
//         });

//         li.appendChild(removeButton);
//         parentList.appendChild(li);
//     });
// };

// renderStoredData();

// addButton.addEventListener("click", () => {
//     const value = input.value;

//     const li = document.createElement("li");
//     li.innerText = value;

//     const removeButton = document.createElement("button");
//     const icon = document.createElement("box-icon");
//     icon.setAttribute("type", "solid");
//     icon.setAttribute("name", "comment-x");
//     removeButton.appendChild(icon);

//     removeButton.classList.add("btn"," btn-danger " ,"remove-button");

//     removeButton.addEventListener("click", () => {
//         parentList.removeChild(li);
//         const index = storedData.indexOf(value);
//         storedData.splice(index, 1);
//         updateLocalStorage();
//     });

//     li.appendChild(removeButton);
//     parentList.appendChild(li);

//     storedData.push(value);
//     updateLocalStorage();

//     input.value = "";
// });

// const updateLocalStorage = () => {
//     localStorage.setItem("todoList", JSON.stringify(storedData));
// };

