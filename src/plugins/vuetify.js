import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#555555",
                secondary: "#484848",
                gray: "#8d8d8d",
                white: "#fffff",
                background: "#efefef"
            }
        }
    }
});
