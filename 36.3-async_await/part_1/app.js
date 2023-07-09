let favNumber = 3;
let baseURL = "http://numbersapi.com";

async function favFact() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
favFact();

const favNumbers = [42, 63, 10];
async function multipleNumbers(){
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(data);
}
multipleNumbers();

async function facts() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  facts();