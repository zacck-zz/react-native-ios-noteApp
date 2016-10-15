var api = {
  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    //lets use fetch to pull from remote
    return fetch(url).then((res) => res.json());
  },
  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;

    //lets use fetch to pull from remote
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;
