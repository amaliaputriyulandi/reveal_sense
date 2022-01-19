document.getElementById('add_item').addEventListener('click',  addMotivasi)

fetch('https://api-chatbot-rs.herokuapp.com/get')
    .then(
        function(response) {
            if(response.status != 200){
                console.log('Ooops...' + response.status)
                return
            }

            response.json().then(function(data){
                const allMotivasi = data.todo
                
                allMotivasi.slice(1).slice(-12).reverse().forEach(motivasi => {
                  addItem(motivasi.title, motivasi.id)
                })
                
                
            })
        }
    ).catch(function (err){
        console.log(err)
    })
  

function addMotivasi(e) {
  e.preventDefault();
      let title = document.getElementById('input').value; 
  
      if(title == ""){
          console.log("tidak bisa")
      }else{
          fetch('https://api-chatbot-rs.herokuapp.com/todo/add', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-type':'application/json'
              },
              body:JSON.stringify({"title": title})
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .then(() => {
              window.location.reload();
          })
      }
      
}


addItem = (input, id) => {
  const item = document.createElement("div");
  const text = document.createElement("p");
  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");

  item.className = "item";
  text.textContent = input;
  item.id = `${id}`

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", () => {
    checkIcon.style.color = "limegreen";
  })
  div.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
    fetch(`https://api-chatbot-rs.herokuapp.com/todo/delete/${item.id}`, {
              method: 'DELETE',
              headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-type':'application/json'
              },
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .then(() => {
              window.location.reload();
          })
  })
  div.appendChild(trashIcon);

  
  item.appendChild(text);
  item.appendChild(div);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
}
  