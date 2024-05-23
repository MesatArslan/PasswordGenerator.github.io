document.getElementById('length').addEventListener('input', function() {
    document.getElementById('length-value').textContent = this.value;
});

document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
    
    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('password').value = password;
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let allChars = '';
    if (uppercase) allChars += uppercaseChars;
    if (lowercase) allChars += lowercaseChars;
    if (numbers) allChars += numberChars;
    if (symbols) allChars += symbolChars;
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}


document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.container, .upper-part, .controls label, #password-display').forEach(element => {
        element.classList.toggle('dark-mode');
    });
    
    var toggleButton = document.getElementById('toggle-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌞';
    } else {
        toggleButton.textContent = '🌙';
    }
});





//? sevdiğimiz passwordları kaydetme ekranımızda olabilir bir button ekleyip sağ tarafta bunları kaydedebileceğimiz bir ekran olabilir