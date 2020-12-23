let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.querySelector('#li');
//let elementList = document.getElementsById('element-list');


//「ボタン」クリックで要素の追加
btn.addEventListener('click', () => {
    let txt = input.value;
    if(txt === "") {
        alert("記入してねー！");
    } else {
        let li = document.createElement('li');
        li.innerText = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
});


//「完了」のためのメソッド
list.addEventListener('click', e => {
    if(e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
});

//「消去」のためのメソッド
// list.addEventListener('dblclick', () => {
//     elementList.removeChild(list);
// });


