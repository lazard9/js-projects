const form = document.getElementById("quiz-form")
const answers = Array.from(document.querySelectorAll(".answer"))
const questionItems = document.querySelectorAll(".question-item")
const modal = document.getElementById("alert")
const clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", () => {
    questionItems.forEach(questionItem => {
        questionItem.classList.remove("correct")
        questionItem.classList.remove("incorrect")
    })
})

form.addEventListener("submit", e => {
    e.preventDefault()

    questionItems.forEach(questionItem => {
        questionItem.classList.add("incorrect")
    })

    const checkedAnswers = answers.filter(answer => answer.checked)

    checkedAnswers.forEach(answer => {
        const questionItem = answer.closest(".question-item")

        if (answer.value === "true") {
            questionItem.classList.remove('incorrect')
            questionItem.classList.add('correct')
        } else {
            questionItem.classList.remove('correct')
            questionItem.classList.add('incorrect')
        }
    })

    const allAnswered = checkedAnswers.length === questionItems.length
    const allTrue = checkedAnswers.every(answer => answer.value === "true")

    if (allTrue && allAnswered) {
        modal.classList.add("active")
        setTimeout(() => {
            modal.classList.remove("active")
        }, 1500)
    }
})
