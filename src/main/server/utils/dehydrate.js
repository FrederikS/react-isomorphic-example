import { toJS } from 'mobx';

export default function (state = {}) {
    return JSON.stringify(toJS(state));
}
