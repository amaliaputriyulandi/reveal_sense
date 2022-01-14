document.getElementById('addKataMotivasi').addEventListener('click', addMotivasi)


let title2 = document.getElementById('title').Value; 
console.log("ini dia:", title2)

fetch('https://api-chatbot-rs.herokuapp.com/get')
    .then(
        function(response) {
            if(response.status != 200){
                console.log('Ooops...' + response.status)
                return
            }

            response.json().then(function(data){
                const allMotivasi = data.todo
                allMotivasi.forEach(motivasi => {
                    document.getElementById('motivasiList')
                        .insertAdjacentHTML('beforeend', `<p class="ui big header"> ${motivasi.id} | ${motivasi.title}</p>`)
                });
            })
        }
    ).catch(function (err){
        console.log(err)
    })

// function getAll() {
//     fetch('https://api-chatbot-rs.herokuapp.com/get')
//     .then(
//         function(response) {
//             if(response.status != 200){
//                 console.log('Ooops...' + response.status)
//                 return
//             }

//             response.json().then(function(data){
//                 const allMotivasi = data.todo
//                 allMotivasi.forEach(motivasi => {

//                     // document.getElementById('motivasiList').innerHTML = `<p class="ui big header" id="${motivasi.id}"> ${motivasi.id} | ${motivasi.title}</p>`

//                     document.getElementById('motivasiList')
//                         .insertAdjacentHTML('beforeend', `<p class="ui big header" id="${motivasi.id}"> ${motivasi.id} | ${motivasi.title}</p>`)
//                 });
//             })
//         }
//     ).catch(function (err){
//         console.log(err)
//     })
// }

function addMotivasi(e) {
    e.preventDefault();
        let title = document.getElementById('title').value; 
    
        if(title == ""){
            console.log("tidak bisa")
        }else{
            fetch('https://api-chatbot-rs.herokuapp.com/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type':'application/json'
                },
                body:JSON.stringify({"title": title})
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
        }
        
}