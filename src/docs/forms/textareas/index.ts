import Component from 'vue-class-component';

import mdTextarea from '../../../components/form/textarea';

var eolToBr = function (input) {
    return input.replace(/\n/g, '<br>');
};

@Component({
    components: {
        mdTextarea
    },
    filters: {
        eolToBr
    },
    template: require('./textarea.html')
})
export default class Textareas {

    data() {
        return {
            value: 'Text',
        }
    }
}

