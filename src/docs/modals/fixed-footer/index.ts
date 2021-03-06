import Component from 'vue-class-component';

import mdButton from '../../../components/button';
import mdModal from '../../../components/modal';

import events from '../../../mixins/events';

@Component({
    components: {
        mdButton,
        mdModal
    },
    mixins: [
        events
    ],
    template: require('./fixed-footer.html')
})
export default class FifexFooterModal {
}

