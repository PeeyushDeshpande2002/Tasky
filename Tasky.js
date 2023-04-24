const taskcontainer = document.querySelector(".task__container");
const globalstore = [];

const taskData = {
  id : `${Date.now()}`,
  imageUrl : document.getElementById("imageurl").value,
  taskTitle : document.getElementById("tasktitle").value,
  taskType : document.getElementById("tasktype").value,
  taskDescription : document.getElementById("taskdescription").value,
};

const generateNewCard = (taskData) => 
  `
  <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}>
  <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success"> <i class="fa-solid fa-pencil">  </i></button>
      <button type="button" class="btn btn-outline-danger"> <i class="fa-sharp fa-solid fa-trash"> </i></button>
    </div>
    <div class="card-body">
      <img src=${taskData.imageUrl} class="card-img-top" alt="...">
      <h5 class="card-title mt-3 fw-bold text-primary">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
  </div>
</div>
</div>
  `;

//on refresh we have to load the initial data present
const loadInitialCardData = () => {
  //get data from tasky040502 to local storage
  const getCardData = localStorage.getItem("tasky040502");
  // convert data to normal object
  const {cards} = JSON.parse(getCardData);

  //loop ober the array of objects to create the HTML card
  cards.map((cardObject) =>{
    taskcontainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));

     //update our global store
     globalstore.push(cardObject);
  });
}
const saveChanges = () => {
        taskcontainer.insertAdjacentHTML("beforeend", genrateNewCard(taskData));

        globalstore.push(taskData);
        localStorage.setItem("tasky040502", JSON.stringify({cards : globalstore}));
};