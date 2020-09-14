class Homepage {
    getEmail(value){
        return cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type(value);
    };

    getPassword(value){
        return cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input').clear().type(value);
    }
}

export default Homepage;