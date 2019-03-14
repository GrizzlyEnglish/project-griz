Vue.component('griz-skill-container', {
    props: {
        skills: Array,
        tags: Array
    },
    data: function () {
        return {
            activeTags: [],
            emptySkills: {
                name: "No active tags"
            }
        }
    },
    beforeMount: function () {
        this.activeTags = this.tags;
    },
    methods: {
        tagClicked: function (data) {
            if (data.active) {
                this.activeTags.push(data.tag);
            } else {
                this.activeTags = this.activeTags.filter(function (t){
                    return t.name !== data.tag.name;
                });
            }
        },
        checkCount: function () {
            return this.$refs.skillColumn.children < 1;
        },
        checkTags: function (data) {
            if (data.tag !== undefined && data.tag !== null) {
                var func;

                if (Array.isArray(data.tag)) {
                    func = function (t) {
                        return data.tag.includes(t.name);
                    };
                } else {
                    func = function (t) {
                        return data.tag === t.name;
                    };
                }

                return this.activeTags.find(func) != null;
            }
        }
    },
    template: `
        <div class="container">
            <div class="row">
                <griz-skill-tag 
                    v-for="(tag,index) in tags" 
                    :key="index" @clickedTag="tagClicked"
                    :tag="tag"></griz-skill-tag>
            </div>
            <div class="row griz-skill-container">
                <div class="col-md-2">
                    <div class="arrow-label">
                        <span>Expert</span>
                    </div>
                    <div class="arrow"></div>
                    <div class="arrow-label">
                        <span>Average</span>
                    </div>
                </div>
                <div class="col-md-10" v-bind:class="{'padd-col':  checkCount}">
                    <griz-skill :skill="emptySkills" :isVisible="activeTags.length == 0"></griz-skill>
                    <griz-skill 
                        v-for="(skill,index) in skills"
                        :key="index"
                        :isVisible="checkTags(skill)"
                        :skill="skill"></griz-skill>
                </div>
            </div>
        </div>
    `
  })