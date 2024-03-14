window.Vue = require("vue").default;

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "website-footer",
    require("./components/website-footer.vue").default
);
Vue.component(
    "website-header",
    require("./components/website-header.vue").default
);
Vue.component(
    "homepage-description",
    require("./components/homepage-description.vue").default
);
Vue.component("cta-btns", require("./components/cta-btns.vue").default);

Vue.component(
    "quiz-description",
    require("./components/quiz-description.vue").default
);
Vue.component("quiz-btn", require("./components/quiz-btn.vue").default);
Vue.component("quiz", require("./components/quiz.vue").default);
Vue.component(
    "CompletionScreen",
    require("./components/completionScreen.vue").default
);
Vue.component(
    "programme-details",
    require("./components/programme-details.vue").default
);
Vue.component(
    "ProgrammeDescription",
    require("./components/programme-description.vue").default
);
Vue.component(
    "AdmissionSection",
    require("./components/admission-section.vue").default
);
Vue.component(
    "SubjectSection",
    require("./components/subject-section.vue").default
);

const app = new Vue({
    el: "#app",
});
