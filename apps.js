
window.addEventListener("DOMContentLoaded" , function(e) {
    console.log("Page Loaded")

    const addForm = document.forms['name'];

    if (addForm) {
        addForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const value = addForm.querySelector('input[type="text"]').value;
            if (value === "") {
                document.getElementsByClassName("errorMessage")[0].style.display = "block"
            } else {
                console.log(value);

                const saveToLocalStorage = () => {
                    localStorage.setItem('nameInput', value)
                }

                saveToLocalStorage();

                const storedInput = localStorage.getItem('nameInput');

                replaceName();
                    function replaceName() {
                        let name = document.getElementsByClassName("spanName");
                        for (var i = 0; i < name.length; i++) {
                            name[i].innerHTML = storedInput;
                        }
                    }
                displayText();
                    function displayText() {
                        var texts = document.getElementsByClassName("hidden");
                        for (var i = 0; i < texts.length; i++) {
                            texts[i].style.display = "block";
                        }
                    }

                hideIntro();
                function hideIntro() {
                        var intro = document.querySelectorAll(".intro,.errorMessage");
                        for (var i = 0; i < intro.length; i++) {
                            intro[i].style.display = "none";
                        }
                    }
                }

            });
        }
    }); 
    const storedInput = localStorage.getItem('nameInput');

    replaceName();
                    function replaceName() {
                        let name = document.getElementsByClassName("spanName");
                        for (var i = 0; i < name.length; i++) {
                            name[i].innerHTML = storedInput;
                        }
                    }
// document.getElementsByClassName("spanName").item(0).innerHTML = localStorage.getItem("nameInput");