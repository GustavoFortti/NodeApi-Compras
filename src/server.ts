
import express, { response, request } from 'express'; 

const app = express();
app.use(express.json());

const users = ([
    'Gustavo',
    'Carlos',
    'Diego',
    'Robson'
]);

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        nome: data.name,
        email: data.email
    }

    return response.json(user);
})

app.listen(3333); 

// npm install express
// npm install @types/express -D
// npm install ts-node -D
// npm install typescrip -D
// npx tsc --init gera o arquivo de configuração do Typescript
// npm install ts-node-dev -D