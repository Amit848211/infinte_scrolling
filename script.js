const imgContainer = document.getElementById("ima_container")
const count =10;
const apiKey = "uLwkN6CHNiuWc5iKdnuAJK0GEkDj48eTOICpsiF7-io";
const api= `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let PhotosArray=[];

function  setAttributes(elements,attributes){
    for(const key in attributes){
        elements.setAttribute(key,attributes[key]);
    }
}


function displayPhotos(){
    PhotosArray.forEach((photo) => {
        const item =document.createElement("a");
        setAttributes(item ,{
            href:photo.links.html,
            target: "_blank"
        })
        const img =document.createElement("img");
        setAttributes(img ,{
            src : photo.urls.regular,
            alt :`${photo.alt_description}`
        })
        item.append(img);
        imgContainer.append(item);
    })
}
async function getPhotos(){
    const response = await fetch(api);
    PhotosArray = await response.json();
    console.log(PhotosArray);
    displayPhotos();
}


window.addEventListener("scroll" ,()=>{
    if(window.innerHeight+window.scrollY >= document.body.offsetHeight){
        getPhotos();
    }
})

getPhotos();