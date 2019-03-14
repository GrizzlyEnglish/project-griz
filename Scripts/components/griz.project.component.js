Vue.component('griz-project', {
    props: {
        project: Object
    },
    methods: {
        
    },
    template: `
        <div class="container-fluid highlight-hover">
            <div class="row">
                <div class="col-md-12">
                    <label class="border-label">{{project.name}}</label>
                </div>
                <div class="col-md-12" v-for="link in project.links" v-if="project.links !== undefined && project.links !== null">
                    <label>
                        <a class="small" :href="link.href">{{link.name}}</a>
                    </label>
                </div>
                <div class="col-md-12">
                    <p v-for="line in project.lines">{{line}}</p>
                </div>
            </div>
        </div>
    `
  })