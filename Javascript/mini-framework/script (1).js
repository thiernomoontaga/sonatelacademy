import {createElement} from "./components.js"
import {DATA,COLORS} from "./consts.js"
const age = 10
const square = createElement('div', {
    style:{
        backgroundColor:COLORS.deleted,
        width: '100px',
        height: '100px'
    },
    vIf: age>18,
})


// const users = ["Fatou", "Penda", "Aida","test"];
// const myUl2 = createElement('ul', {
//     vFor: {
//         each: ["1","2","54,5,5"],
//         render: name => createElement('h1', {}, name)
//     }
// });

// v-if
const box = createElement('div', {
    class: 'card',
    vIf: true
}, "Ceci est visible grâce à v-if");


// v-for
const list = createElement('ul', {
    vFor: {
        each: ['JavaScript', 'Vue.js', 'React', 'Svelte'],
        render: tech => createElement('li', {}, tech)
    }
});

//
const productList = createElement('div', {
    style: { border: '1px solid red' },
    vFor: {
        each: DATA,
        render: (item) => {
            const color = item.done && item.deleted ? COLORS.done_deleted : item.done ? COLORS.done : item.deleted ? COLORS.deleted : COLORS.other
            return createElement('div', {
                class: 'card',
                style: `background-color: ${color}`
            }, [
                createElement('h2', {}, item.title),
                createElement('p', {}, item.content),
                createElement('b', {}, item.pts)
            ])
        }
    }
});
// v-show
const toggled = createElement('div', {
    class: 'card',
    vShow: true,
    id: 'toggleBox'
}, "Ceci est masqué par v-show");

// :style et événements
const button = createElement('button', {
    class: 'btn',
    id: 'toggleBtn',
    style: 'margin-top: 10px',
    onClick: () => {
        console.log(toggled)
        // const box = document.getElementById('toggleBox');
        toggled.style.display = toggled.style.display === 'none' ? '' : 'none';
    }
}, ["Afficher / Masquer le bloc",createElement('span',{},'test')]);


// const userLi = users.map((name) => createElement('li', {}, name))

// const myUl = createElement('ul', {},userLi)

const noms = ['aly', 'tall', 'toto', 'titi'];
const myDiv = createElement('div', {
    style: {display: 'flex', flexDirection: 'column', gap: '10px'},
    vFor:{
        
        each:["sdf",true,2] ,
        render: _ => createElement('p', {},'lorem')
    }
});

const app = createElement(
    'div', 
    {
        id:"app",
        style: { border: '1px solid black', padding: '50px' },
    },
    [
        toggled,
        myDiv,
        square,
        productList,
        button,
    ],
);















// Construction finale
// const app = createElement('div', {}, [
//     createElement('h1', {
//         style: { color: 'teal' }
//     }, "Mini Framework DOM (Vanilla JS)"),

//     box,
//     toggled,
//     productList,
//     createElement('div', { class: 'card' }, [
//         createElement('h3', {}, 'Liste avec v-for:'),
//         list
//     ]),
//     button
// ]);

document.body.append(app);