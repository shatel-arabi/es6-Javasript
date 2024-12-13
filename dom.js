
 document.getElementById('add-friend').addEventListener('click', function(){
    const div = document.createElement('div');
    div.innerHTML = `
    <div class= "single-friend>
    <h1>my friend is name:arabi</h1>
    <span> some span</span>
    <p>this is my new friend </p></div>`
    document.getElementById('friend-container').appendChild(div);
    console.log(div);
})




// document.getElementById('add-friend').addEventListener('click', function(){
//    const div = document.createElement('div');
//    div.classList.add('single-friend');
//     const h1 = document.createElement('h1');
//     h1.innerText = "this is my new friend";
//     const p = document.createElement('p');
//     p.innerText = "some paragragh text";
//     div.appendChild(h1);
//     div.appendChild(p);



//     document.getElementById('friend-container').appendChild(div)
//     console.log(div);
    
// })