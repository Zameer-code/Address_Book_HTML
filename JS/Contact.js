class Contact {

    /**validating Full name */
    get fullName() {return this._fullName;}
    set fullName(fullName) {
        let fullNamePattern = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (fullNamePattern.test(fullName)) {
            this._fullName = fullName;
        }
        else
            throw 'Invalid Name';
    }
    get fullName(){
        return this._fullName;
    }


    /* Validating phone number */

    get tel() {return this._tel;}
    set tel(tel) {
        let telPattern = RegExp('((^\\+?)(([0-9]{2,3})(\\s))?)' + '[0-9]{10}$');
        if (telPattern.test(tel)) {
            this._tel = tel;
        }
        else
            throw 'Invalid Mobile Number';
    }
    get tel(){
        return this._tel;
    }


    /**Validating address */

    get address() { return this._address; }
    set address(address) {
        let words = address.split(" ");
        let addressPattern = RegExp('([A-Z a-z 0-9]{3,})+');
        for (const word of words) {
            if (!addressPattern.test(word))
                throw 'Invalid Address';
        }
        this._address = address;
    }
    get address(){
        return this._address;
    }

    get city() {return this._city;}
    set city(city) {this._city = city;}

    get state() {return this._state;}
    set state(state) {this._state = state;}

    get zip() {return this._zip;}
    set zip(zip) {this._zip = zip;}

    get id() {return this._id;}
    set id(id) {this._id = id;}
    

    //Methods
    toString() {
        return '[ FullName : ' + this.fullName + ' Address : '
            + this.address + ' City : ' + this.city + ' State : ' + this.state + ' Zip : ' + this.zip +
            ' Phone Number : ' + this.phoneNumber + ' ]';
    }
}