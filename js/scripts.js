//Get and display 12 random users
//With the information provided from The Random User Generator API, send a single request to the API, and use the response data
//to display 12 users, along with some basic information for each:
//Image
//First and Last Name
//Email
//City or location
//Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and
// how it should be styled.

async function getUsers(url) {
 //try{
    //const response = await fetch("https://randomuser.me/api")
    fetch(url)
    .then(response => response.json())
    .then(data=> console.log(data));

//     if (!response.ok) throw new Error("Something went wrong");

//     const data = await response.json();
//     console.log(data);
//   } catch {

//}
}

getUsers("https://randomuser.me/api");