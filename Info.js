document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("result").innerText = `Submitted! Name: ${name}, Email: ${email}`;

    document.getElementById("infoForm").reset();
});
