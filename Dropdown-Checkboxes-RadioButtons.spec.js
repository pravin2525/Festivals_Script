/// <reference types="cypress" />

describe('Dropdown-Checkboxes-RadioButtons',function(){
    
    it('Visit URL', function(){
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.wait(3000)
    })

    it('Dropdown Menu', function(){
        cy.get('#dropdowm-menu-1').select('Python').should('have.value','python')
       
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value','maven')

        cy.get('#dropdowm-menu-3').select('JavaScript').should('have.value','javascript')
    })

    it('Checkboxes Menu', function(){
        cy.get('input[type="checkbox"]').check('option-1')

        cy.get('input[type="checkbox"]').check('option-2')

        cy.get('input[type="checkbox"]').check('option-4')

        cy.wait(4000)

        cy.get('input[type="checkbox"]').uncheck('option-1').should('not.be.checked')

        cy.wait(4000)

        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
        
    })

    it('RadioButtons Menu', function(){
        cy.get('input[type="radio"]').check("green")

        cy.wait(3000)

        cy.get('input[type="radio"]').check('yellow')
        
    })

    it('Selected & Disabled Menu', function(){
        cy.wait(3000)

        cy.get('input[type="radio"]').check('lettuce')

        cy.wait(2000)

        cy.get('input[type="radio"]').check('pumpkin')

        cy.wait(2000)

        cy.get('#fruit-selects').select('Pear').should('have.value','pear')
        
    })

    it('Mouseover', function(){
      cy.visit('https://demowebshop.tricentis.com/')
      cy.contains("a", "Computers").trigger('mouseover')
    })
})