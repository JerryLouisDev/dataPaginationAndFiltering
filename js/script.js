//Jerry Louis: Going for Meet Expectations
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//settings the items per page
let itemsPerPage = 9
//creating function  to show page
function showPage(list, page){
   let startIndex = (page * itemsPerPage) - itemsPerPage; 
   let endIndex = page * itemsPerPage; 
   // console.log(`Here is the start ${startIndex} and ending ${endIndex}`);
   // console.log(list);

   //created variable to target UL in HTML
   let studentUList = document.querySelector('.student-list')
   studentUList.innerHTML = '';
   //loopping through the list
   for(let i = 0; i < list.length; i++){
      console.log(list[i].picture.large);
      //conditional if index is greater than startIndex and less then endIndex
      if (i >= startIndex && i < endIndex) {
        //getting template literal of elements to appear on the page
         const html = `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src=${list[i].picture.large}alt="Profile Picture">
            <h3> ${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
         <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li>`;
         // taking the UL and adding ther template literal
         studentUList.insertAdjacentHTML('beforeend', html
         );


      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   //variable of page numbers
   const pageButton = Math.ceil( list.length / 9);
   // console.log(pageButton);
   //targeting UL in HTML
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   //looping through the page button and creating button
   for(let i = 1; i <= pageButton; i++){
      const li = document.createElement('li');
      const button = document.createElement('button');
      li.appendChild(button);
      const html = `
         <li>
            <button type= 'button'> ${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML('beforeend', html);
   }

   const firstButton = linkList.firstElementChild.firstElementChild;
   firstButton.className = 'active';
   //element.classList.add("mystyle")
   // adding eventlistener for users who click on button pages
   linkList.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON'){
         const activeClass = document.getElementsByClassName('active');
         for(let i = 0; i < activeClass.length; i++){
            activeClass[i].classList.remove("active");
         }
         e.target.className= 'active';
         showPage(list, e.target.textContent);
      }

   })
}

// Call functions
showPage(data, 1);
addPagination(data);
