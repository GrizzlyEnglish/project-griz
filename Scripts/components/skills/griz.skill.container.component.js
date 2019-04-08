Vue.component('griz-skill-container', {
    props: {
        skills: Array,
        tags: Array,
        levels: Array
    },
    data: function () {
        return {
            activeTags: [],
            activeLevels: [],
            currentSkills: [],
            skillRows: [],
            getRows: function (skills) {
                var skillRows = [];
                let row_count = 0;
                for (var i = 0; i < skills.length; i++) {
                    if (skillRows[row_count] == null) {
                        skillRows[row_count] = [];
                    }
                    
                    if (skills[i].isVisible) skillRows[row_count].push(skills[i]);
                    if (skillRows[row_count].length == 3) row_count++;
                }
                if (skillRows.length == 1 && skillRows[0].length == 0) skillRows = null;
                return skillRows;
            },
            updateVisibilty: function (skills, activeTags, activeLevels) {
                return skills.map(function (data) {
                    var hasLevel = false;
                    var hasTag = false;
                    if (data.level !== undefined && data.level !== null) {
                        hasLevel = activeLevels.find(function (l) {
                            return l == data.level.name;
                        }) != null;
                    }

                    if (data.tag !== undefined && data.tag !== null) {
                        var func;
        
                        if (Array.isArray(data.tag)) {
                            func = function (t) {
                                return data.tag.includes(t);
                            };
                        } else {
                            func = function (t) {
                                return data.tag === t;
                            };
                        }
        
                        hasTag = activeTags.find(func) != null;
                    }
                    
                    data.isVisible = hasLevel && hasTag;
                    return data;
                });
            }
        }
    },
    beforeMount: function () {
        this.activeTags = [];//this.tags.map(function (t){ return t.name; });
        this.activeLevels = [];//this.levels.map(function (t){ return t.name; });
        this.currentSkills = this.skills.map(function (t) { t.isVisible = false; return t;});
        this.skillRows = [];//1this.getRows(this.currentSkills);
    },
    methods: {
        tagClicked: function (data) {
            var getArray = function (arr, active, tag){
                if (active) {
                    arr.push(tag);
                } else {
                    arr = arr.filter(function (t){
                        return t !== tag;
                    });
                }
                return arr;
            };
            
            if (data.type === 'tag'){
                this.activeTags = getArray(this.activeTags, data.active, data.tag);
            }
            else {
                this.activeLevels = getArray(this.activeLevels, data.active, data.tag);
            }
            
            this.currentSkills = this.updateVisibilty(this.currentSkills, this.activeTags, this.activeLevels);
            this.skillRows = this.getRows(this.currentSkills);
        },
        checkCount: function () {
            return this.$refs.skillColumn.children < 1;
        },
        checkTags: function (data) {
            
        }
    },
    template: `
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4>Skill Category</h4>
                </div>
            </div>
            <div class="row">
                <griz-skill-tag 
                    v-for="(tag,index) in tags" 
                    :key="index" @clickedTag="tagClicked"
                    :type="'tag'"
                    :color="'secondary'"
                    :tag="tag.name"></griz-skill-tag>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h4>Skill Level</h4>
                </div>
            </div>
            <div class="row">
                <griz-skill-tag 
                    v-for="(level,index) in levels" 
                    :key="index" @clickedTag="tagClicked"
                    :type="'level'"
                    :color="level.name"
                    :tag="level.name"></griz-skill-tag>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h4>Skill List</h4>
                </div>
            </div>
            <div class="row" v-if="skillRows == null || skillRows.length == 0">
                <div class="col-md-12 skill-helper" v-if="activeLevels.length == 0 && activeTags.length == 0">
                    <p>
                        To see my skill set add some tags.
                    </p>
                    <p>
                        Add at least one <strong>level</strong> and one <strong>category</strong>.
                    </p>
                </div>
                <div class="col-md-12 skill-helper" v-if="activeLevels.length > 0 && activeTags.length == 0">
                    <p>
                        Now just add some categories!!
                    </p>
                </div>
                <div class="col-md-12 skill-helper" v-if="activeLevels.length == 0 && activeTags.length > 0">
                    <p>
                        Now just add some levels!!
                    </p>
                </div>
            </div>
            <div class="row griz-skill-container" v-for="(row,index) in skillRows">
                <div class="col-md-4" v-for="(skill,index) in row">
                    <griz-skill 
                        :key="index"
                        :skill="skill"></griz-skill>
                </div>
            </div>
        </div>
    `
  })