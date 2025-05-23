
 function task(){
    const taskElement = createElement('div')
    const header = createElement('div')
    const title = createElement('div')
    const actions = createElement('div')
    const action_btn1 = createElement('span')
    const action_btn2 = createElement('span')
    const content = createElement('div')
    const footers = createElement('div')
    const footer = createElement('div')
}

function createElement(tag){
    if(typeof tag === 'string' ){
        return
    }
    return document.createElement(tag)
}

export function createElements(tags){
    if(!Array.isArray(tags)){
        return
    }
    const elements = []
    tags.forEach(tag => {
        elements.push(createElement(tag))   
    });
    return elements
}











        //  <div class="card">
        //         <div class="header">
        //             <div class="title">un titre</div>
        //             <div class="actions">
        //                 <span class="action-btn">x</span>
        //                 <span class="action-btn">x</span>
        //             </div>
        //         </div>
        //         <div class="content">
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, unde libero? Ipsum.
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex ipsum,
        //         </div>
        //         <div class="footers">
        //             <div class="footer">Pts : 10</div>
        //         </div>
        //     </div>