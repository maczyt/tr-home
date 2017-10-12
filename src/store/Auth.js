import { observable, action } from 'mobx';

class auth {
    @observable isLoggin = false;
    @action login() {
        this.isLoggin = true;
    }
    @action logout() {
        this.isLoggin = false;
    }
}

export default new auth();