let profileCard =
{
    name: "Emmanuel Abreu",
    age: 24,
    location: "New York",
    profilePic: "images/me.jpg",

    stats:
    {
        followers: "80K",
        likes: "803K",
        photos: "1.4K"
    }
}

console.log(document.getElementById("fullName").innerText = profileCard.name);
console.log(document.getElementById("age").innerText = profileCard.age);
console.log(document.getElementsByClassName("profilePic").innerText = profileCard.profilePic);