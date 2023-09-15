const containter = document.querySelector(".container");
const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");



const url = "https://api.quotable.io/quotes/random";

// window.addEventListener("load", getQuote);
btn.addEventListener("click", async () => {
    quote.classList.remove("animate");
    author.classList.remove("animate");
    await getQuote();
    quote.classList.add("animate");
    author.classList.add("animate");
});

async function getQuote() {
 
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    return  pushQuote(data);
}

async function pushQuote(data) {

    quote.innerText = await data[0].content;
    author.innerText =await data[0].author;
}

