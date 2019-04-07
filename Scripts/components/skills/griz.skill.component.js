Vue.component('griz-skill', {
    props: {
        skill: Object
    },
    computed: {
        
    },
    template: `
        <div class="row griz-skill">
            <div class="col-md-12">
                <div class="row full-height">
                    <div class="col-md-10 offset-1 bordered" :class="skill.level.name">
                        <p class="skill">{{skill.name}}</p]>
                    </div>
                </div>
            </div>
        </div>
    `
  })