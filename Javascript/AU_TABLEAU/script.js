import {createElements} from './components.js'

const COLORS = {
    deleted : "red",
    done: "blue",
    done_deleted: "orange",
    other : "#f4f4f4"
}
const DATA = [
    {
        id:1,
        title: "Un titre 1",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, unde libero",
        pts: 20,
        done:false,
        deleted: true
    },
    {
        id:2,
        title: "Un titre 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, unde libero? Ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex ipsum,",
        pts: 10,
        done:true,
        deleted: false
    },
    {
        id:3,
        title: "Un titre 3",
        content: "Nulla, unde libero? Ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ex ipsum,",
        pts: 8,
        done:true,
        deleted: true
    }
]
const tab=[1,2,5]

