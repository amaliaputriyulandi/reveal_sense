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
                
                allMotivasi.slice(1).slice(-14).reverse().forEach(motivasi => {
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


addItem = (input) => {
  const item = document.createElement("div");
  const text = document.createElement("p");

  item.className = "item";
  text.textContent = input;

  
  
  item.appendChild(text);
  
  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
}
  