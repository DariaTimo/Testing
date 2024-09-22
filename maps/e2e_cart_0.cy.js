describe('Карта', () => {
    it('Выбор объекта', () => {
        cy.visit('/');
        //cy.wait(3000);

        cy.wait(4000);
        //выбор метамодели
        cy.document().then((doc) => {

            const p = doc.querySelectorAll("[aria-label='Метамодель']").length;
            const i = doc.querySelectorAll('#mapToolsBtn').length;
            const a = doc.querySelectorAll('#objectSelectionFab').length;
            const b = doc.querySelectorAll('#obSelectBtn').length;
            const c = doc.querySelectorAll('#obSelectAreaBtn').length;
            const d = doc.querySelectorAll('#obSelectCircleBtn').length;
            cy.wait(4000);
            //alert(p);
            //alert(i);
            if (p != 0) {
                cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
                cy.wait(2000);
                cy.get('div.q-item').click();

                //ввод имени
                cy.get("[aria-label='Имя пользователя']").type('test');

                //ввод пароля
                cy.get("[aria-label='Пароль']").type('test123');

                //кнопка войти
                cy.get('button.q-btn.bg-primary').click();
                cy.wait(4000);
            }
            if (i != 0) {
                cy.get('#mapToolsBtn').click();
                if (a != 0) {
                    cy.get('#objectSelectionFab').click();
                    if (b !== 0) {
                        cy.get('#obSelectBtn').click();
                        if (c !== 0) {
                            cy.get('#obSelectAreaBtn').click();
                            if (d !== 0) {
                                cy.get('#obSelectCircleBtn').click();
                            }


                        }
                        else {
                            if (d !== 0) {
                                cy.get('#obSelectCircleBtn').click();


                            }

                        }

                    }
                    else {
                        if (c !== 0) {
                            cy.get('#obSelectAreaBtn').click();
                            if (d !== 0) {
                                cy.get('#obSelectCircleBtn').click();


                            }


                        }
                        else {
                            if (d !== 0) {
                                cy.get('#obSelectCircleBtn').click();


                            }
                        }
                    }

                }


            }
        })

    });
    it('Растояние', () => {
        cy.visit('/');
        cy.wait(3000);
        
        //выбор метамодели
        cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        cy.wait(2000);
        cy.get('div.q-item').click();

        //ввод имени
        cy.get("[aria-label='Имя пользователя']").type('test');

        //ввод пароля
        cy.get("[aria-label='Пароль']").type('test123');

        //кнопка войти
        cy.get('button.q-btn.bg-primary').click();
        cy.wait(5000);



        cy.document().then((doc) => {
            cy.wait(4000);
            const i = doc.querySelectorAll('#mapToolsBtn').length; //есть ли кнопка инсттрументов
            const a = doc.querySelectorAll('#measureDistanceBtn').length;//есть ли кнопка Измерить дистанцию
            cy.wait(4000);
            if (i != 0) {
                cy.get('#mapToolsBtn').click();
                if (a != 0) {
                    cy.get('#measureDistanceBtn').click();
                    cy.get('canvas').click('center');
                    cy.get('canvas').click('right');
                    cy.get('canvas').click('center');
                    cy.wait(4000);
                    cy.get('#measureDistanceBtn').click();
                }
            }
        })
    });

    it('Площадь', () => {
        cy.visit('/');
        cy.wait(3000);
        //выбор метамодели
        cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        cy.wait(2000);
        cy.get('div.q-item').click();

        //ввод имени
        cy.get("[aria-label='Имя пользователя']").type('test');

        //ввод пароля
        cy.get("[aria-label='Пароль']").type('test123');

        //кнопка войти
        cy.get('button.q-btn.bg-primary').click();
        cy.wait(5000);
        cy.document().then((doc) => {
            cy.wait(4000);
            const i = doc.querySelectorAll('#mapToolsBtn').length;//Существует ли кнопка с инструментами
            const a = doc.querySelectorAll('#measureAreaBtn').length;//Существует ли кнопка с Измерить площадь
            cy.wait(4000);
            if (i != 0) {
                cy.get('#mapToolsBtn').click();
                if (a != 0) {
                    cy.get('#measureAreaBtn').click();
                    //cy.get('canvas').click('center');
                    //cy.get('canvas').click('right');
                    cy.get('canvas').click(215, 290);
                    cy.get('canvas').click(350, 240);
                    cy.get('canvas').click(230, 350);
                    //cy.get('canvas').click();
                    cy.wait(2000);
                    cy.get('#measureAreaBtn').click();



                }

            }


        })



    });
    it('Местоположение', () => {
        cy.visit('/');
        //cy.wait(3000);

        cy.wait(4000);
        //выбор метамодели

        cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        cy.wait(2000);
        cy.get('div.q-item').click();

        //ввод имени
        cy.get("[aria-label='Имя пользователя']").type('test');

        //ввод пароля
        cy.get("[aria-label='Пароль']").type('test123');

        //кнопка войти
        cy.get('button.q-btn.bg-primary').click();


        cy.wait(4000);
        cy.document().then((doc) => {
            const i = doc.querySelectorAll('#mapToolsBtn').length;//есть ли кнопка инструментов
            const a = doc.querySelectorAll('#locationBtn').length;//есть ли кнопка Мое местоположение

            cy.wait(4000);

            if (i != 0) {
                cy.get('#mapToolsBtn').click();
                if (a != 0) {
                    cy.get('#locationBtn').click();

                }





            }

        })





    });
    it('Сохранить как изображение и как PDF', () => {
        cy.visit('/');
        //cy.wait(3000);
        
        cy.wait(4000);
        //выбор метамодели
        cy.wait(4000);
        cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        cy.wait(2000);
        cy.get('div.q-item').click();

        //ввод имени
        cy.get("[aria-label='Имя пользователя']").type('test');

        //ввод пароля
        cy.get("[aria-label='Пароль']").type('test123');

        //кнопка войти
        cy.get('button.q-btn.bg-primary').click();


        cy.wait(4000);
        
        cy.document().then((doc) => {
            const i = doc.querySelectorAll('#mapToolsBtn').length; //есть ли кнопка инструментов
            const a = doc.querySelectorAll('#saveImgBtn').length; //есть ли кнопка Сохранить
            const b = doc.querySelectorAll('#saveImgToPdfBtn').length;//есть ли кнопка Сохранить в pdf
            cy.wait(4000);

            cy.get('#fact-list-component').then(($node) => {
                const l = $node.children().length;
                const child = $node.text();
                if (l > 0 && child != 'Нет данных для отображения') { //проверка есть ли объекты в списке, если есть то скрываем первый объект, иначе добавляем объект Зарегистрированные участки  
    
                    cy.get('#fact-list-component').contains('Зарегистрированные участки').click()
                    cy.wait(4000)
                } else {
                    cy.get('#settingsFactListBtn').click()
                    cy.get('#inputFactDialog>label [aria-label="Фильтр"]').type('Зарегистрированные участки')
                    cy.get('.q-card').contains('ПРИМЕНИТЬ').click()
                    cy.get('#fact-list-component').contains('Зарегистрированные участки').click()
                    cy.wait(4000)
                }
            });
            
            if (i != 0) {
                cy.get('#mapToolsBtn').click();
                if (a != 0) {
                    cy.get('#saveImgBtn').click();
                    if (b != 0) {
                        cy.get('#saveImgToPdfBtn').click(); //открывается меню сохранения
                        cy.wait(2000);
                        cy.get('.container .header :nth-child(2)').type(' test');//добавляем название
                        cy.get('.checkboxes> :nth-child(1)').click()
                        cy.get('.checkboxes> :nth-child(2)').click()
                        //cy.get('.checkboxes > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg').click(); //раздел для сохранения Карты
                        cy.get('[aria-label="Скачать"] > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg > .q-checkbox__truthy').click(); //раздел для сохранения Скачать
                        cy.get('.q-gutter-sm > .q-btn > .q-btn__content > .block').click();//сохранить

                    }
                }
                else {
                    if (b != 0) {
                        cy.get('#saveImgToPdfBtn').click(); //открывается меню сохранения
                        cy.wait(2000);
                        cy.get('.container .header :nth-child(2)').type(' test');//добавляем название

                        cy.get('.checkboxes > .q-checkbox > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg').click(); //раздел для сохранения Карты
                        cy.get('[aria-label="Скачать"] > .q-checkbox__inner > .q-checkbox__bg > .q-checkbox__svg > .q-checkbox__truthy').click(); //раздел для сохранения Скачать
                        cy.get('.q-gutter-sm > .q-btn > .q-btn__content > .block').click();//сохранить

                    }
                }




            }

        })





    });
    it('Перейти по координатам', () => {
        cy.visit('/');
        //cy.wait(3000);
        
        cy.wait(4000);
        //выбор метамодели    
        cy.get("[aria-label='Метамодель']").type('ГИСОГД 2.0');
        cy.wait(2000);
        cy.get('div.q-item').click();
        //ввод имени
        cy.get("[aria-label='Имя пользователя']").type('test');
        //ввод пароля
        cy.get("[aria-label='Пароль']").type('test123');
        //кнопка войти
        cy.get('button.q-btn.bg-primary').click();
        cy.wait(4000);
        cy.document().then((doc) => {
            const i = doc.querySelectorAll('#mapToolsBtn').length;//Существует ли кнопка с инструментами
            const a = doc.querySelectorAll('#coordinatesBtn').length; //Существует ли кнопка с Показать по координатам
            cy.wait(4000);
            if (i != 0) {
                cy.get('#mapToolsBtn').click();
                if (a != 0) {
                    cy.get('#coordinatesBtn').click(); //если есть нажимаем на кнопку Показать по координатам
                    cy.get('#coordinateSystemList').click(); //выбираем систему координат
                    cy.get('div.q-menu> div >:nth-child(1)').click(); //выюирается первая из списка
                    cy.wait(2000);
                    cy.get('#coordinatesDialogMenu > :nth-child(2)').type('7354289');//указываем первую координату
                    cy.get('#coordinatesDialogMenu > :nth-child(3)').type('9222084');//указываем вторую координату
                    cy.get('.q-card > .q-card__actions > .q-gutter-sm > :nth-child(1)').click();//нажимаем Да
                }
            }
        })

    });


});
