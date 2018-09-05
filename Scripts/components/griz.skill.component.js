Vue.component('griz-skill', {
    props: {
        skill: Object
    },
    computed: {
        skillClass: function () {
            return 'col-md-' + (this.skill.level * 4)
        }
    },
    template: `
        <div v-bind:class="skillClass">
            <div class="col-md-12">
                <label>{{skill.name}}</label>
            </div>
        </div>
    `
  })