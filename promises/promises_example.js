//  Javascript Nuggets - Promises Example
// .first - after 1s first red; when the first is red then after that we want second to be invoked hence promises are used coz there is a requirement for after one is invoked
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  addcolor(1000, ".first", "red")
    .then(() => {
      addcolor(3000, ".second", "blue").then(()=>{
        addcolor(2000, ".third", "green").catch((err)=>{console.log(err)});
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

function addcolor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(); // is you wont resolve the state will stay pending and you wont fo anywhere after first is red   
      }, time);
    } else {
      reject(`There is no such element:${selector}`);
    }
  });
}
