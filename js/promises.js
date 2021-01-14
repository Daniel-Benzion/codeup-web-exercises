function getLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;

    return fetch(url, {headers: {'Authorization': `token ${gitHub}`}})
        .then(response => response.json()
            .then(data => {
                console.log(data);
                console.log(data[0].created_at)
            }));

}

getLastCommit('daniel-benzion');

const wait = (milliseconds) => {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved();
        }, milliseconds);
    });
};
wait(1000).then(() => console.log(`You'll see this after 1 second`));
wait(3000).then(() => console.log(`You'll see this after 3 seconds`));