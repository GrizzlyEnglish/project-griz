Vue.component('griz-skill-tag', {
    props: {
        tag: String,
        color: String,
        type: String
    },
    data: function () {
        return {
            isActive: true
        }
    },
    beforeMount: function () {
        this.tagColor = 'btn-' + this.color;
    },
    methods: {
        clickedButton: function () {
            this.isActive = !this.isActive;
            this.$emit('clickedTag', {tag: this.tag, active: this.isActive, type: this.type});
        }
    },
    template: `
        <div class="col-md-4">
            <div class="btn-group-toggle" data-toggle="buttons">
                <label class="btn griz-tag-btn" :class="[{'active':isActive}, tagColor]" v-on:click="clickedButton">
                    <i class="fas" :class="[isActive ? 'fa-check' : 'fa-times']"></i>
                    <input type="checkbox" checked autocomplete="off"> {{tag}}
                </label>
            </div>
        </div>
    `
  })