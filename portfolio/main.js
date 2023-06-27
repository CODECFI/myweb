const sections = document.querySelectorAll(".section");
const ControlBtns = document.querySelectorAll(".controlls");
const allBtns = document.querySelectorAll(".control");
const allSection = document.querySelector(".main-content");

// This function loops through all of the buttons and adds an event listener to each one.
// When a button is clicked,
// the event listener will run the following code:

// The provided code defines a function called transformActive() that loops through all buttons with the class "control"
// and adds an event listener to each one. When a button is clicked,
// the event listener executes a code block that handles the "active-btn" class. Here's an explanation of each part:

function transformActive() {

  allBtns.forEach(clicking => {
    clicking.addEventListener('click', () => {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn.forEach((actvs) => {
       actvs.classList.remove('active-btn')
      })

      clicking.classList.add('active-btn')
    })
  });


  //The code extracts the id value from the 
  // data-id attribute of the clicked element 
  // using e.target.dataset.id.


  allSection.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      ControlBtns.forEach((btns) => {
        btns.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide & show other section ------------
      sections.forEach((sectionHides) => {
        sectionHides.classList.remove("active");
      });


      const sectionShow = document.getElementById(id);
      sectionShow.classList.add("active");
    }
  });
}

transformActive();



const blogs = document.querySelectorAll(".blog");


const observer = new IntersectionObserver((IntersectionObserverEntry) => {
 console.log(IntersectionObserverEntry);
 IntersectionObserverEntry.forEach((activated) => {
    activated.target.classList.toggle('show', activated.isIntersecting);
    // if(activated.isIntersecting) {observer.unobserve(activated.target)};

 },
  {
  threshold: 1,
}
)
});

blogs.forEach((blog)=> {
 observer.observe(blog);
})



//    const articleHome = document.querySelector('.article_home');
//    const articleFeatures = document.querySelector('.article_features');
//    const h2 = document.querySelector("h2");
//    const h3 = document.querySelector("h3")

//  articleHome.addEventListener('click', (events) => {
//     // events.stopPropagation()
//     articleHome.classList.toggle('red');
//     articleHome.classList.toggle('color')
//  })

//  articleFeatures.addEventListener('click', (even) => {
//     // console.log(even.target);
//     even.stopPropagation()
//     articleFeatures.style.backgroundColor = 'red'

//  })

//  h2.addEventListener('click', (eve) => {
//    console.log(eve.target);
//    eve.stopPropagation()
//     h2.style.color = 'green';
//     eve.target.textContent = 'PassedEvenet'
//  }, true)

//  };

const toggled = document.querySelector(".toggle_btn");

toggled.addEventListener("click", () => {
  const element = document.body;
  element.classList.toggle("light-mode");
});






// newFunction();
// function newFunction() {
//   const textTransforms = document.querySelector('.texttransform');

//   const changeText = () => {


//     setTimeout(() => {
//       textTransforms.textContent = 'Developer';
//     }, 0);

//     setTimeout(() => {
//       textTransforms.textContent = 'Kiran Tamang';

//     }, 5000);

//   };

//   changeText();
// }

// setInterval(newFunction, 9000 )






const sayHello =  () => {
  let x = document.querySelector('.but').onclick = () => {
  let text = 'This is crazy, I am talking to computer'

  document.querySelector('.output').innerText = text;

  function sum (a, b) {
    return a + b
  }
  let add = sum(3, '69')
  document.querySelector('.adss').innerText = '. Hello I Am computer I code '+ add ;

  }
}

sayHello();





console.log(`first gets ${sum(111, 222)}`);
let add = (a, b) => a + b

console.log(`second gets ${add(333, 222)}`);

function sum (a, b) {
  return a + b
}






























