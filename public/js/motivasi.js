// document.querySelector("#input").addEventListener("keydown", (event) => {
//   if(event.key === "Enter")
//     addMotivasi
// });

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
                console.log("🧐 ~ file: script.js ~ line 19 ~ response.json ~ allMotivasi", allMotivasi)
                const aaaa = allMotivasi.slice(1).slice(-12).reverse()
                console.log("🧐 ~ file: script.js ~ line 21 ~ response.json ~ aaaa", aaaa)
                
                allMotivasi.slice(1).slice(-12).reverse().forEach(motivasi => {
                  addItem(motivasi.title, motivasi.id)
                })
                
                
            })
        }
    ).catch(function (err){
        console.log(err)
    })
  
// document.querySelector("#add_item").addEventListener("click", () => {
//   const input = document.querySelector("#input");
//   addItem(input.value);
// });

function addMotivasi(e) {
  e.preventDefault();
      let title = document.getElementById('input').value; 
      console.log("🧐 ~ file: script.js ~ line 41 ~ addMotivasi ~ title", title)
  
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

  item.className = "item";
  text.textContent = input;
  item.id = `${id}`

  
  item.appendChild(text);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
}
  