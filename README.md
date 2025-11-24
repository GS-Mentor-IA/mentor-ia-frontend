# Mentor IA - frontend

## Sobre o projeto

O Mentor.IA é uma plataforma inovadora desenvolvida para a Global Solution da FIAP. O projeto consiste em um site que aplica um teste vocacional voltado exclusivamente para carreiras do futuro.

Diferente de testes tradicionais, utilizamos um algoritmo de Inteligência Artificial que analisa as skills avaliadas durante o questionário e indica a profissão emergente que mais combina com o perfil do usuário, preparando-o para o mercado de trabalho dos próximos anos.

## Estrutura do Projeto

A estrutura de pastas foi organizada para garantir escalabilidade e fácil manutenção, utilizando TypeScript e Vite:

mentor-ia-frontend/

├── .vite/               
├── public/              
├── src/

│   ├── components/      
│   ├── context/         
│   ├── routes/          
│   ├── types/           
│   ├── App.tsx          
│   ├── globals.css      
│   └── main.tsx         
├── eslint.config.js     
├── index.html           
├── package.json         
├── tailwind.config.js   
├── tsconfig.json        
└── vite.config.ts       


## Como rodar o projeto (ambiente de dev)

1. Clone o Repositório

Primeiro, clone este repositório para o seu ambiente local usando o terminal:
```bash 
git clone https://github.com/GS-Mentor-IA/mentor-ia-frontend.git
cd mentor-ia
```


2. Instale as dependências do projeto

Dentro da pasta do projeto, instale todas as dependências necessárias utilizando o npm:
``` bash
npm install
```

Este comando irá ler o arquivo package.json e baixar todas as bibliotecas listadas (como React, Vite, Tailwind CSS, etc.).

Também instale o react-hook-form para a execução correta de algumas funcionalidades:
``` bash
npm i react-hook-form
```

3. Execute o Projeto

Após a instalação das dependências, inicie o servidor de desenvolvimento do Vite:
```bash
npm run dev
```

4. Acesse a Aplicação

O terminal mostrará uma mensagem indicando que o servidor está rodando. Geralmente, a aplicação estará disponível no seguinte endereço:
```bash
http://localhost:5173
```

Abra o seu navegador e acesse essa URL para ver o projeto em execução!

## Como rodar o projeto (ambiente de prod)

Cole o seguinte link no seu navegador de preferência para acessar a versão online:
``` bash
https://mentor-ia-frontend-five.vercel.app/
```

Caso queira visitar a API (Backend):
```
https://mentor-ia-gs.onrender.com
```

## Tecnologias Utilizadas



As tecnologias utilizadas no desenvolvimento foram:

![NPM](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Integrantes do projeto

Eduardo Novaes Mollo - RM 561515 | 1TDSPJ

Pedro Henrique Lacerda Ferraz - RM 563062 | 1TDSPJ

João Henrique Batista Leal - RM 564361 | 1TDSPJ

## Link do repositório

https://github.com/GS-Mentor-IA/mentor-ia-frontend

## Link do vídeo no YouTube

https://youtu.be/LsBOR3Q0PcI?si=8rGbnH-5rHozRmMI
