Vue.component('griz-project', {
    props: {
        project: Object
    },
    methods: {
        handleEvent(event) {
            if (this.project.external !== undefined && this.project.external !== null) {
                window.open(this.project.external)
            } else {
                var $elem = document.getElementById('leftContainer')
                var $div = document.createElement('div')
                $div.innerHTML = '<h1>HELLO</h1>'
                $elem.appendChild($div)
            }
        }
    },
    template: `
        <div class="container-fluid project-section" v-on:click="handleEvent">
            <div class="row">
                <div class="col-md-12">
                    <label>{{project.name}}</label>
                </div>
                <div class="col-md-12">
                    <p v-for="line in project.lines">{{line}}</p>
                </div>
            </div>
        </div>
    `
  })