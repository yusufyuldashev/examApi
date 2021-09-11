const elList = document.querySelector("#main__list")
let todos = window.localStorage.getItem("todo")
function renderUser(renderArr, element) {
    element.innerHTML = null
    renderArr.forEach((elem) => {
        const newLi = document.createElement("li")
        newLi.setAttribute("id", "main__item")
        newLi.setAttribute("data-uuid", `${elem.id}`)
        newLi.innerHTML = `
       <div id="left__content">
       <h1 id="left__data">Information</h1>
       <h4 id="left__name">${elem.name}</h4>
       <h4 id="left__username">${elem.username}</h4>
       <p id="left__email">${elem.email}</p>
       <a id="left__website" href="${elem.website}">hildegard.org</a>
   </div>
   <div id="center__content">
       <h1 id="center__data"> Address</h1>
       <h4 id="center__city">${elem.address.city}</h4>
       <h4 id="center__street">${elem.address.street}</h4>
       <p id="center__zipcode">${elem.address.zipcode}</p>
       <p id="center__suite">${elem.address.suite}</p>
   </div>
   <div id="right__content">
       <h1 id="right__data">Company</h1>
       <h4 id="right__name">${elem.company.name}</h4>
       <h4 id="right__street">${elem.company.bs}</h4>
       <p id="right__zipcode">${elem.company.catchPhrase}</p>
       <p id="left__phonenumber">${elem.phone}</p>
   </div>
     <p id="fetch__number" data-uuid=${elem.id} >${elem.id}</p>
       `
        element.appendChild(newLi)
    })
}
const elsecondlist = document.querySelector("#page__list")

function renderPost(renderArr, element) {
    element.innerHTML = null
    elList.addEventListener("click", (e) => {
        e.preventDefault()
        elsectionlist.style.display = 'none'
        element.innerHTML = null
        if (e.target.matches("#fetch__number")) {
            let { uuid} = e.target.dataset
            
            renderArr.forEach((x) => {
                if (uuid == x.userId) {
                    const elnewLi = document.createElement("li")
                    elnewLi.setAttribute("id", "page__item")
                    elnewLi.innerHTML = `
                    <h4 id="page__name">${x.title}</h4>
                    <p id="page__body">${x.body}</p>
                    <p id="page__id" data-uuid = ${x.id}  >${x.userId}</p>
                    `
                    element.appendChild(elnewLi)
                }
            })
        }else if(e.target.matches("#main__item")) {
            let { uuid} = e.target.dataset

            renderArr.forEach((x) => {
                if (uuid == x.userId) {
            const elnewLi = document.createElement("li")
                    elnewLi.setAttribute("id", "page__item")
                    elnewLi.innerHTML = `
                    <h4 id="page__name">${x.title}</h4>
                    <p id="page__body">${x.body}</p>
                    <p id="page__id" data-uuid = ${x.id}  >${x.userId}</p>
                    `
                    element.appendChild(elnewLi)
                }
            })
        }
    })
    
}



     
    
    const elsectionlist = document.querySelector("#section")
    
    fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(response => response.json())
    .then(data=>{
        elsecondlist.addEventListener("click" , (e)=>{
                let uuid = e.target.dataset.uuid
                elsectionlist.style.display = 'block'
                if(uuid){
                      elsectionlist.innerHTML = null
                         data.map((elem)=>{
                             if(uuid == elem.postId){
                            const elnewLi = document.createElement("li")
                            elnewLi.setAttribute("id", "section__item")
                            elnewLi.innerHTML = `
                            <h4 id="section__name">${elem.name}</h4>
                            <p id="section__body">${elem.body}</p>
                            <a id="section__email" href="mailto:Eliseo@gardner.biz">${elem.email}</a>
                            <p id="section__id">${elem.id}</p>
                            
                            `

                            elsectionlist.appendChild(elnewLi)
                         }
                     })
                  }
                  
                 })
                

         })
      



async function fetchUserId() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    renderUser(data, elList)
}
fetchUserId()

async function fetchPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    renderPost(data, elsecondlist)
}
fetchPost()
