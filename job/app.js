const work = (name, image) => ({name, image})

const works = [
    work('Industry','images/factory.jpg'),
    work('Web programming','images/state.jpg'),
    work('Economy','images/eko.jpg'),
]

var app = new Vue({
    el: '#app',
    data: {
        works: works,
        work: works[0],
        selectedWorkIndex: 0,
        curScope: 0,
    },
    methods: {
        selectedWork(curScope) {
            this.work = works[this.curScope]
        }
    }
        
})

