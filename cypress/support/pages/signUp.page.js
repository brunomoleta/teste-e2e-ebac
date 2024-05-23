import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const data = {
    firstName: firstName,
    lastName: lastName,
    email: faker.internet.email({
        firstName: firstName,
        lastName: lastName,
    }),
    phone: faker.phone.number(),
    password: faker.internet.password({ length: 8 }),
};

export const signUpPage = {
    registrarConta(email) {
        cy.get(`[data-testid=signUp]`).click();

        cy.enterInput("firstName", `${firstName}{enter}`);

        cy.focused().type(`${lastName}{enter}`);
        cy.focused().type(`${data.phone}{enter}`);
        cy.focused().type(`${email}{enter}`);
        cy.focused().type(`${data.password}{enter}`);
        cy.focused().type(`${data.password}{enter}`);

        cy.get(`[data-testid=create]`).click();
    },
};