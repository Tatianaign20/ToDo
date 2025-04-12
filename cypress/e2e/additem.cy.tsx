import cypress from 'cypress';


describe('проверяем добавление item из формы в DataList', function() {
    it('item должны добавляться в DataList', function() {
        cy.visit('/'); 
        cy.get('div').find('input');
        cy.get('[placeholder="Add item"]').type('Task 1');
        cy.get('div').find('input').next('button').click();
        cy.get('.data-list-conteiner')
        .within(() => {
            cy.get('label').contains('Task 1'); // Проверяем, что в label появился "Task 1"
        });

        cy.get('div').find('input');
        cy.get('[placeholder="Add item"]').type('Task 2');
        cy.get('div').find('input').next('button').click();
        cy.get('.data-list-conteiner')
        .within(() => {
            cy.get('label').contains('Task 2'); // Проверяем, что в label появился "Task 1"
        });
})

})