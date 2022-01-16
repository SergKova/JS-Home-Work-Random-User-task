function User(firstName, lastName, age, email = 'Test@gmail.com', isMale, isSubscribe = false) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.isMale = isMale;
    this.isSubscribe = isSubscribe;

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }

}

function createRandomUser(quantity) {
    const res = [];

    for (let i = 0; i < quantity; i++) {
        const user = new User(
            `Name${i}`,
            `LastName ${i}`,
            Math.round(Math.random()*100),
            `mail${i}@test.com`,
            Math.random() > 0.5,
            Math.random() > 0.5,
        ); 
        res.push(user);
    }
    return res;
}

const userArr = createRandomUser(50);
console.table(userArr);

// Task1
const userFullName = userArr.map((user) => user.getFullName());

// Task2
const allAdults = userArr.filter((user) => {
    if (user.age > 18) {
        return user;
    }
});

// Task4
const womensMail = allAdults.filter((user) => {
    if(user.isMale === false && user.isSubscribe === true) {
        console.table(user.email);
    }
});

