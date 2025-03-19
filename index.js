console.log("start")

let downCnt = document.getElementById("downCnt")
let userData = document.getElementById("userData")
userData.addEventListener("keyup",(e)=>{
    if (e.key == "Enter") {
             console.log(e.target.value)
             input = e.target.value
             fetch("https://apis.ccbp.in/wiki-search?search="+input).then((e)=>{
               return e.json()
             }).then((data)=>{
                console.log(data.search_results)
                let {search_results} = data
                let input = "";
                search_results.map((result)=>{
                    input+=`
                     <div class="card">
                     <a class="link" target="_blank"  href=${result.link}> ${result.link}</a>
                      <a  class="link2" target="_blank" href=${result.link}> <h3 class="title">${result.title}</h3></a>
                      <p class="desc">${result.description}</p>
                     </div>
                     `
                    console.log(result)
                })
                 downCnt.innerHTML=input;
            })
    }
})


