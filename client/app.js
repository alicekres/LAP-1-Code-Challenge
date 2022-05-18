// work in progress!

// const searchResults = [

//     {
//     "description":"Signature. Elon Reeve Musk FRS (born June 28, 1971) is an engineer, industrial designer, technology entrepreneur and philanthropist.",
//     "link":"https://en.wikipedia.org/wiki/Elon_Musk",
//     "title":"Elon Musk - Wikipedia"
//     },
//     {
//     "description":"Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla - and in space, via rocket producer SpaceX. He owns 21% of ...",
//     "link":"https://www.forbes.com/profile/elon-musk/",
//     "title":"Elon Musk - Forbes"
//     },
//     {
//     "description":"May 26, 2020 - In 1992, Musk left Canada to study business and physics at the University of Pennsylvania. He graduated with an undergraduate degree in ...",
//     "link":"https://www.biography.com/business-figure/elon-musk",
//     "title":"Elon Musk - Education, Tesla & SpaceX - Biography"
//     },
//     {
//     "description":"Jul 13, 2020 - Elon Musk's net worth just hit $70.5 billion, surpassing Warren Buffett's. Here's how the billionaire Tesla and SpaceX CEO went from getting ...",
//     "link":"https://www.businessinsider.com/the-rise-of-elon-musk-2016-7",
//     "title":"Elon Musk's life story: The Tesla CEO's early years, career ..."
//     },
//     {
//     "description":"Elon Musk co-founded and leads Tesla, SpaceX, Neuralink and The Boring Company. As the co-founder and CEO of Tesla, Elon leads all product design, engineering and global manufacturing of the company's electric vehicles, battery products and solar energy products.",
//     "link":"https://www.tesla.com/elon-musk",
//     "title":"Elon Musk | Tesla"
//     },
//     {
//     "description":"1.1m Followers, 40 Following, 145 Posts - See Instagram photos and videos from Elon Musk Now (@elonrmuskk)",
//     "link":"https://www.instagram.com/elonrmuskk/?hl=en",
//     "title":"Elon Musk Now (@elonrmuskk) • Instagram photos and videos"
//     },
//     {
//     "description":"Elon Musk, Blasting Off in Domestic Bliss. The billionaire space oddity on life with Grimes and Baby X, Trump ...",
//     "link":"https://www.nytimes.com/2020/07/25/style/elon-musk-maureen-dowd.html",
//     "title":"Elon Musk: The Maureen Dowd Interview - The New York Times"
//     },
//     {
//     "description":"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future [Vance, Ashlee] on Amazon.com. *FREE* shipping on qualifying offers. Elon Musk: Tesla ...",
//     "link":"https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/006230125X",
//     "title":"Elon Musk: Tesla, SpaceX, and the Quest for a ... - Amazon.com"
//     },
//     {
//     "description":"SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ...",
//     "link":"https://www.spacex.com/",
//     "title":"SpaceX"
//     },
//     {
//     "description":"1 day ago - 'Mars is looking real': Elon Musk as SpaceX test rocket makes 1st flight, landing upright. SpaceX plans to launch reusable Starships atop ...",
//     "link":"https://www.hindustantimes.com/science/",
//     "title":"'Mars is looking real': Elon Musk as SpaceX test rocket makes ..."
//     },
//     {
//     "description":"Elon Musk, Tesla.",
//     "link":"https://www.cnbc.com/elon-musk/",
//     "title":"Elon Musk - CNBC - CNBC.com"
//     }

//     ]

const clickSearchBtn = document.getElementById('searchBtn');
const clickRandomBtn = document.getElementById('randomBtn');

clickSearchBtn.addEventListener('click', () => {
  fetch('http://localhost:3000/results')
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const div = document.querySelector('.results-box');

      data.forEach((object) => {
        console.log(object);
        const newP = document.createElement('p');
        const newA = document.createElement('a');
        const newTitle = document.createElement('h5');

        newP.textContent = object.description;
        newA.textContent = object.link;
        newTitle.textContent = object.title;

        div.appendChild(newTitle);
        div.appendChild(newP);

        newTitle.


        // newLiWithAll = newLI.appendChild(newP, newA, newTitle);
        // const result = ul.appendChild(newLiWithAll);
        // return result;
      });
      //   console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

clickRandomBtn.addEventListener('click', (e) => {
  let randNum = Math.floor(Math.random() * 10);
  console.log(randNum);
  fetch('http://localhost:3000/results')
    .then((resp) => resp.json())
    .then((data) => {
      const ul = document.querySelector('ul');
      newLI = document.createElement('li');
      newLI.textContent = data[randNum].link;
      ul.append(newLI);
    })
    .catch((err) => {
      console.log(err);
    });
});
