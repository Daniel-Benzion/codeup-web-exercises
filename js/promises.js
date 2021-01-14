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