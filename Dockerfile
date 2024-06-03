FROM cypress/included:3.4.0

WORKDIR /home/cypress/

COPY . /home/cypress/

VOLUME [ "/home/cypress/mochawesome-report" ]

RUN npm install

CMD ["npm", "run", "cy:run"]