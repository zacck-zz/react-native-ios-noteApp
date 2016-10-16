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
  },
  getNotes(username){
    username = username.toLowerCase().trim();
    var url = `https://gentest-7b8cd.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json());
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    var url = `https://gentest-7b8cd.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
}

module.exports = api;
