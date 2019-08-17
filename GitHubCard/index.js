axios.get("https://api.github.com/users/AustinLynes")
.then((axiosData) => {
  new createCard(axiosData);
  console.log(axiosData);
})
.catch(err => {
  console.log("Data Sync Error:", err);
})

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
/* Step 2: Inspect and study the data coming back, this is YOUR 
github info! You will need to understand the structure of this 
data in order to use it to build your component function 

Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "philhart23"
];

for(let i = 0; i < followersArray.length; i++){
  axios.get(`https://api.github.com/users/${followersArray[i]}`)
  .then((axiosData) => {
    new createCard(axiosData);
    console.log(axiosData);
  })
  .catch(err => {
    console.log("Data Sync Error:", err);
  })
}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



class createCard {
  constructor(_data) {

    this.__cards_holder = document.body.querySelector(".cards");

    this.__card = document.createElement("div");
    this.__card.classList.add("card");
    this.__cards_holder.appendChild(this.__card);

    this.__img = document.createElement("img");
    this.__img.src = _data.data.avatar_url;
    this.__card.appendChild(this.__img);

    this.__cardInfos = document.createElement("div");
    this.__cardInfos.classList.add("card-info");
    this.__card.appendChild(this.__cardInfos);

    this.__name = document.createElement("h3");
    this.__name.classList.add("name");
    this.__name.innerHTML = _data.data.name;
    this.__cardInfos.appendChild(this.__name);

    this.__username = document.createElement("p");
    this.__username.classList.add("username");
    this.__username.innerHTML = _data.data.login;
    this.__cardInfos.appendChild(this.__username);

    this.__location = document.createElement("p");
    this.__location.innerHTML = _data.data.location;
    this.__cardInfos.appendChild(this.__location);

    this.__profile = document.createElement("p");
    this.__cardInfos.appendChild(this.__profile);
    this.__profile_link = document.createElement('a');
    this.__profile.appendChild(this.__profile_link);
    this.__profile_link.href = _data.data.html_url;
    this.__profile_link.innerHTML = _data.data.html_url;


    this.__following = document.createElement("p");
    this.__following.innerHTML = _data.data.following;
    this.__cardInfos.appendChild(this.__following);

    this.__followers = document.createElement("p");
    this.__followers.innerHTML = _data.data.followers;
    this.__cardInfos.appendChild(this.__followers);

    this.__bio = document.createElement("p");
    this.__bio.innerHTML = _data.data.bio;
    this.__cardInfos.appendChild(this.__bio);
  }
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/