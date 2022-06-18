class loginPage{

    static elements = {
        usernameInput: () => cy.get('#username'),
        passwordInput: () => cy.get('#password'),
        loginBtn: () => cy.get('.radius'),
        errorMessage: () => cy.get('#flash')
    }

    static visit() {
        cy.visit('https://the-internet.herokuapp.com/login');
    }
    
    static typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    static typePassword(password){
        this.elements.passwordInput().type(password);
    }

    static clickLogin(){
        this.elements.loginBtn().click();
    }

    static getErrorMessage(text){
        this.elements.errorMessage().should('include.text', text)
    }

    static isLoggedIn(){
        cy.url().should('contain', 'secure')
        cy.url().should('include', 'secure')
    }
}

export default loginPage;