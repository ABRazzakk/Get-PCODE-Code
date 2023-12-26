document.getElementById('getPcodeBtn').addEventListener('click', function () {
    var userInput = document.getElementById('codeInput').value;
    fetch('https://temp.polando8.info/wp-content/uploads/2023/12/10-million-password-list-top-10000.txt')
        .then(response => response.text())
        .then(data => {
            if (data.includes(userInput)) {
                // Code matches, run PHP script
                fetch(`script.php?code=${userInput}`)
                    .then(response => response.text())
                    .then(pcode => {
                        document.getElementById('result').innerHTML = `Worker, this is your PCODE for proof: ${pcode}`;
                    });
            } else {
                // Code does not match
                document.getElementById('result').innerHTML = '<span style="color: red;">Invalid Code</span>';
            }
        });
});
