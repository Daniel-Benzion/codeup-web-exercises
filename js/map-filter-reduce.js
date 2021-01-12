const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const langArr = users.filter((user) => {
    return user.languages.length >= 3;
})
console.log(langArr);

const emailArr = users.map((user) => {
    return user.email;
})
console.log(emailArr);

const totalExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0)
console.log(totalExperience);

const avgExperience = totalExperience / users.length;
console.log(avgExperience);

const longestEmail = users.reduce((total, user) => {
    return total.email.length > user.email.length ? total.email : user;
});

console.log(longestEmail);

const nameString = users.reduce((names, user) => {
    if (names !== "") {
        names += ", ";
    }
    return names + user.name;
}, "");

console.log(`Your instructor's names are ${nameString}`);