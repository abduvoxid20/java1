const users = {}

for (let i = 1; i <= 10; i++) {
    let answer = prompt('Ismingini kiriting')
    let year = +prompt('Yoshingizni kiriting')
    users[i] = {};
    users[i].name = answer;
    users[i].age = year;
    console.log(`Foydalanuvchi ${i} Ismingiz ${answer} Yoshingiz ${year}`);
} 
console.log(users);