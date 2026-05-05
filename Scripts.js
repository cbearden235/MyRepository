//Hamburger
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

//Calculate answers
function checkAnswers() {
    let score = 0;

    let q1 = document.querySelector("input[name='q1']:checked");
    let q2 = document.querySelector("input[name='q2']:checked");
    let q3 = document.querySelector("input[name='q3']:checked");
    let q4 = document.getElementById("q4").value.trim().toLowerCase();

    let q5 = document.querySelectorAll("input[type='checkbox']:checked");
    let q5Answers = Array.from(q5).map(cb => cb.value);
    let q5CorrectAnswers = ["Server", "Client"];
                    
    if (q1 && q1.value == "Tim Berners-Lee") {
        score++;
    }

    if (q2 && q2.value == "Hypertext Transfer Protocol Secure") {
        score++;
    }

    if (q3 && q3.value == "HTTP/1.1") {
        score++;
    }

    if (q4 == "multiplexing") {
        score++;
    }

    if (q5Answers.length == q5CorrectAnswers.length &&
        q5CorrectAnswers.every(ans => q5Answers.includes(ans))) {
            score++;
        }

    //Calculate results
    if (score >= 4) {
        document.getElementById("result").textContent =
            "You passed! You got " + score + " out of 5 questions correct!";
    } else {
        document.getElementById("result").textContent =
            "You failed. You got " + score + " out of 5 questions correct.";
    }

    //Highlight correct answers
    //Question 1
    document.querySelectorAll("input[name='q1']").forEach(input => {
        let label = input.parentElement;

        if (input.value === "Tim Berners-Lee") {
            if (input.checked) {
                label.classList.add("correct");
            } else  {
                label.classList.add("wrong");
            }
        }
    });

    //Question 2
    document.querySelectorAll("input[name='q2']").forEach(input => {
        let label = input.parentElement;

        if (input.value === "Hypertext Transfer Protocol Secure") {
            if (input.checked) {
                label.classList.add("correct");
            } else  {
                label.classList.add("wrong");
            }
        }
    });

    //Question 3
    document.querySelectorAll("input[name='q3']").forEach(input => {
        let label = input.parentElement;

        if (input.value === "HTTP/1.1") {
            if (input.checked) {
                label.classList.add("correct");
            } else  {
                label.classList.add("wrong");
            }
        }
    });

    //Question 4
    let q4Input = document.getElementById("q4");
    let q4Display = document.getElementById("q4Correct");

    if (q4 == "multiplexing") {
        q4Input.classList.add("correct");
        q4Display.textContent = "";
    } else {
        q4Input.classList.add("wrong");
        q4Display.textContent = "Correct answer: Multiplexing";
    }

    //Question 5
    document.querySelectorAll("input[type='checkbox']").forEach(input => {
        let label = input.parentElement;

        if (q5CorrectAnswers.includes(input.value)) {
            if (input.checked) {
                label.classList.add("correct");
            } else {
                label.classList.add("wrong");
            }
        }
    });
}

function clearResult() {
    document.getElementById("result").textContent = "";

    //Removes highlight of correct answer
    document.querySelectorAll(".correct, .wrong").forEach(el => {
        el.classList.remove("correct", "wrong");
    });

    //Removes correct answer from question 4
    let q4Display = document.getElementById("q4Correct");
    q4Display.textContent = "";
}