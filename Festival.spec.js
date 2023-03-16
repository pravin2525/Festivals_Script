//following refernce used for autocompletion in cypress tool
/// <reference types="cypress" />


//following describe block used to show on which application you are working
describe('Localhost Application for Festival', ()=>{

    //following beforeEach hook method used before every single it block
    beforeEach('Visit to the URL', ()=>{
        cy.visit('https://localhost:4200/festivals')
    })

    //following all it blcoks are the TCs
    it('Verify First Order List Element with text', ()=>{
        cy.get('#adriansventi').children().should('have.text', 'Trainerella')
    })

    it('Verify Second Order List Element with text', ()=>{
        cy.get('#auditions').children().should('have.length', 1)
    })

    it('Verify Third Order List Element with text', ()=>{
        cy.get('#crittergirls').should('have.text', ' ')
    })

    it('Verify Fourth Order List Element with text', ()=>{
        cy.get('#frankjupitor').children().should('have.value', 'LOL-palooza')
    })

    it('Verify Fifth Order List Element with text', ()=>{
        cy.get('#greenmildcoldcapsicium').children().should('have.text', 'Small Night In')
    })

    it('Verify Sixth Order List Element with text', ()=>{
        cy.get('#jillblack').children().should('have.value', 'LOL-palooza')
    })

    it('Verify Seventh Order List Element with text', ()=>{
        cy.get('#manishditch').children().should('have.length', 1)
    })

    it('Verify Eight Order List Element with text', ()=>{
        cy.get('#propeller').should('have.text', ' ')
    })

    it('Verify Nine Order List Element with text', ()=>{
        cy.get('#squint').children().should('have.value', 'Small Night In')
    })

    it('Verify Ten Order List Element with text', ()=>{
        cy.get('#squint-281').children().should('have.text', 'Twisted Tour')
    })

    it('Verify Eleven Order List Element with text', ()=>{
        cy.get('#summon').children().should('have.value', 'Twisted Tour')
    })

    it('Verify Twelve Order List Element with text', ()=>{
        cy.get('#theblackdashesh').children().should('have.length', 1)
    })

    it('Verify Thirteen Order List Element with text', ()=>{
        cy.get('#werewolfweekday').children().should('have.value', 'LOL-palooza')
    })

    it('Verify Fourteen Order List Element with text', ()=>{
        cy.get('#wildantelope').children().should('have.text', 'Small Night In')
    })

    it('Verify Fifteen Order List Element with text', ()=>{
        cy.get('#wildantelope').children().should('have.length', 1)
    })
})