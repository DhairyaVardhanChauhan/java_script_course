const users = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
  { id: 3, name: "anna" },
];

const articles = [
  { userId: 1, articles: ["one", "two", "three"] },
  { userId: 2, articles: ["four", "five"] },
  { userId: 3, articles: ["six", "seven", "eight", "nine"] },
];

const getUser = (name) => {
  return new Promise((resolve, reject) => {
    const usr = users.find((data) => data.name === name);
    if (usr) {
      resolve(usr);
    } else {
      reject("No user found with such data");
    }
  });
};

const getArticle = (id) => {
  return new Promise((resolve, reject) => {
    const usrarticles = articles.find((data) => id === data.userId); // return the first object which has same id
    // console.log(usrarticles);  
    if (usrarticles) {
      resolve(usrarticles.articles);
    } else {
      reject(`Wrong ID`);
    }
  });
};


// using then and catch
getUser("john")
  .then((data) => {
    console.log(data);
    getArticle(data.id).then((articles)=>{
        console.log(articles);
    }).catch((err)=>{
        console.log("No such id found " + data.id);
    })
  })
  .catch((err) => console.log(err));


// using async and await

const getData = async ()=>{

    try {
        const person = await getUser("john"); // returns a promise fulfulled and an object as the value (resolve(usr);)
        const article = await getArticle(person.id);
        console.log(article);
        
    } catch (error) {
        console.log(error);
    }
  
}
getData();
