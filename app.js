var personName = '';
personName = prompt('what is your name?') || '';
if (personName !== null && personName !== '') {
    alert("\u201CHello $(personName), would you like to learn some Python today?");
}
else {
    alert('you have to fill your name !');
}
