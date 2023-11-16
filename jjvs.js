let btn=document.querySelector("#new-quote");
let quote=document.querySelector(".quote");
let person=document.querySelector('.person');

const quotes=[
    {
        quote:"We write to taste life twice, in the moment and in retrospect.",
        person:"--Anaïs Nin"
    },{
        quote:"Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
        person:"--Mark Twain"
    },{
        quote:"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        person:"--Toni Morrison"
    },{
        quote:"One day I will find the right words, and they will be simple.",

        person:"--Jack Kerouac, The Dharma Bum"
    },{
        quote:"Either write something worth reading or do something worth writing.",

        person:"--Benjamin Franklin"
    },{
        quote:"Words can be like X-rays if you use them properly they'll go through anything. You read and you're pierced.",

        person:"--Aldous Huxley"
    }, ];

btn.addEventListener('click',function(){
    
    let random= Math.floor(Math.random() * quotes.length);
    quote. innerHTML=quotes[random].quote;
    person.innerHTML=quotes[random].person;
});
server.listen(3000 ,"0.0.0.0", function () {
    console.log("Server Connected");
});
