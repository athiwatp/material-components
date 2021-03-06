import Component from 'vue-class-component';

import components from '../../../components';

@Component({
    components,
    template: require('./get-started-page.html'),
})
export default class GetStartedPage {
    data() {
        return {
            snippets: {
                link: require('./link.snippet.html'),
                bundle: require('./bundle.snippet.html')
            }
        }
    }

    showInConsole() {
        var w: any = window;
        var vmc = window['VueMaterialComponentsDocs'];
        w.console.log({
            components: vmc.components,
            directives: vmc.directives,
            mixins: vmc.mixins,
            registerComponents: vmc.registerComponents,
            registerDirectives: vmc.registerDirectives,
            registerAll: vmc.registerAll,
            Vue: vmc.Vue
        });
    }
}