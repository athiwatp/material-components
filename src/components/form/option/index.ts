import Component from 'vue-class-component';

import bindBoolean from '../../../directives/bind-boolean';

import input from '../../../mixins/input';

@Component({
    props: {
        disabled: {
            type: Boolean,
            required: false,
            'default': false
        },
        value: {
            type: String,
            required: true
        }
    },
    events: {
        'option::select': function (value) {
            this.optionSelect(value);
        },
        'option::unselect': function (value) {
            this.optionUnselect(value);
        }
    },
    directives: {
        bindBoolean
    },
    mixins: [
        input
    ],
    template: require('./option.html')
})
export default class SelectOption {
    private _slotContents: any;

    private $dispatch: any;
    private $parent: any;

    private active: boolean;
    private disabled: boolean;
    private value: any;

    data() {
        return {
            active: false
        }
    }

    get content() {
        return this._slotContents ? this._slotContents.default : '';
    }

    get multiple() {
        return this.$parent.multiple;
    }

    get computedClasses() {
        return {
            disabled: this.disabled,
            active: this.active && !this.disabled,
            selected: this.active && !this.disabled
        };
    }

    toggle() {
        if (!this.active) {
            this.select();
        }
        else {
            this.unselect();
        }
    }

    select() {
        if (!this.active && !this.disabled) {
            this.active = true;
            this.$dispatch('select::select', this.value);
        }
    }

    unselect() {
        if (this.active && this.multiple) { // only multiple could be unselected
            this.active = false;
            this.$dispatch('select::unselect', this.value, this);
        }
    }

    optionSelect(value) {
        if (this.multiple) {
            if (!this.active && this.value == value) {
                this.active = true;
            }
        }
        else {
            if (this.value == value) {
                this.active = true;
            }
            else {
                this.active = false;
            }
        }
    }

    optionUnselect(value) {
        if (this.multiple) {
            if (this.active && this.value == value) {
                this.active = false;
            }
        }
        else {
            if (this.value == value) {
                this.active = false;
            }
        }
    }
}