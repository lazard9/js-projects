class addElements {

    constructor() {
        // 1. Select all elements
        this.form = document.querySelector("#new-item-form")
        this.input = document.querySelector("#item-input")
        this.list = document.querySelector("#list")
        this.errorMessage = document.querySelector("#error-message")
        this.itemsInserted = []
        // 2. When I submit the form add a new element
        this.submit()
    }

    submit() {
        this.form.addEventListener("submit", e => {
            e.preventDefault()

            // 1. Create a new item
            const newItem = document.createElement("div")
            newItem.classList.add("list-item")

            // 2. Check if item is in the list
            if (!this.itemsInserted.includes(this.input.value)) {

                newItem.innerHTML = this.input.value

                // 3. Add that item to the list
                this.list.appendChild(newItem)

                // 4. Clear input
                this.input.value = ""
                this.errorMessage.innerHTML = ""

                this.checkItemsInserted()

            } else {
                this.errorMessage.innerHTML = "Already inserted in the list!"
                this.input.value = ""
            }

            // 5. Setup event listener to delete item when clicked
            newItem.addEventListener("click", () => {
                newItem.remove()
                this.checkItemsInserted()
            });
        })
    }

    checkItemsInserted() {
        this.itemsInserted = [...document.querySelectorAll(".list-item")].map(e => e.innerHTML)
        // console.log(this.itemInserted)
    }
}

new addElements();
