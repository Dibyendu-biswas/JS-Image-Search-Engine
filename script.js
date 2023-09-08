const formBtn= document.querySelector(".submit")
const formResult= document.querySelector(".result")
const inputValue= document.querySelector("input")
const showBtn= document.querySelector(".btn")

const secret_key="_i-84mSrFuPnYm8AO3aCILWBESeoQmwl6pcD9OQzjGA"
let query="";
let page =1;
 async function searchImage(){
     query = inputValue.value

    const api=`https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=${query}&client_id=${secret_key}`
    
    const respose =await fetch(api)
    const data = await respose.json()
    if(page === 1){
        formResult.innerHTML=""
    }
    const result= data.results
    result.map((item)=>{
        const image =document.createElement("img")
        image.src=item.urls.small
        const aTag =document.createElement("a")
        aTag.href=item.links.html
        aTag.target="_blank";
        aTag.appendChild(image)
        formResult.appendChild(aTag)
    })
    formResult.classList.remove(".active")

}
formBtn.addEventListener("submit",(e)=>{
    e.preventDefault()
    searchImage()

})
showBtn.addEventListener("click",()=>{
    page++
    searchImage()
})