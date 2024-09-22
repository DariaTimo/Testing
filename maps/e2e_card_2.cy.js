describe('Карта', () => {
    it('card test', () => {
        cy.visit('/');
        cy.wait(5000);

        //выбор метамодели
        cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        cy.wait(3000);
        cy.get('div.q-item').click();get('div.q-item').click();


        //ввод имени
        cy.get("[aria-label='Имя пользователя']").type('test');

        //ввод пароля
        cy.get("[aria-label='Пароль']").type('test123');

        //кнопка войти
        cy.get('button.q-btn.bg-primary').click();
        cy.wait(5000);



        if (document.querySelectorAll('.y-start.x-end > :nth-child(3)')!==null) //Проверка есть ли кнопка изменить масштаб карты, если есть то сменить масштаб, иначе ажать а копку рядрм
        {
            cy.get('.map-toolbar.y-start.x-end > :nth-child(3)').click();
            cy.wait(2000);

        }
        else
        {
            cy.get('.map-toolbar.y-start.x-end > :nth-child(2)').click();
            cy.wait(2000);
        }



    });
});
