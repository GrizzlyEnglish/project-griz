Vue.component('griz-skill', {
    props: {
        skill: Object,
        isVisible: Boolean
    },
    computed: {
        
    },
    template: `
        <div class="row griz-skill" v-if="isVisible">
            <div class="col-md-12">
                <label>{{skill.name}}</label>
            </div>
        </div>
    `
  })