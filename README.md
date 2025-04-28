# Portal de Talentos

Este projeto é uma aplicação para gestão de candidaturas e processos seletivos. Ele permite que recrutadores cadastrem candidatos e visualizem suas informações, além de possibilitar que os candidatos se candidatem às vagas abertas.

## Começando

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app), garantindo uma configuração rápida e fácil de começar a trabalhar.

### Pré-requisitos

Para rodar a aplicação localmente, você precisa ter o **Node.js** e o **npm** instalados. Caso não tenha, você pode instalá-los em [nodejs.org](https://nodejs.org/).

### Instalação

1. Clone este repositório para a sua máquina:
   ```
   git clone https://github.com/ronaldohauser/teste-portal-talentos.git

2. Navegue até o diretório do projeto:
   ```
   cd teste-portal-talentos

3. Navegue até o diretório do projeto:
   ```
   npm install

# Rodando a Aplicaçãos
Depois de instalar as dependências, você pode iniciar a aplicação localmente:
  ```
  npm start

   ```
A aplicação será aberta automaticamente no navegador em http://localhost:3000.

# Funcionalidades
## Para Recrutadores:
Cadastro de candidatos com nome, e-mail, experiência, e cargo desejado.

- Cada candidato recebe um código único para identificação.

- Área para visualização das candidaturas enviadas.

### Acesso para Recrutadores:
E-mail: teste@teste.com

Senha: Teste123

### Para Candidatos:
Cadastro com informações pessoais, como nome, e-mail, e histórico profissional.

Possibilidade de visualização da candidatura e acompanhamento do status.

### Acesso para Candidatos (Conta de Teste):
Código de Usuário: 0001

## Comandos Disponíveis
No diretório do projeto, você pode rodar os seguintes comandos:

npm start
Roda a aplicação no modo de desenvolvimento.
Abra http://localhost:3000 no seu navegador para visualizar.

A página será recarregada automaticamente quando houver alterações no código.

npm test
Roda os testes no modo interativo de observação.
Para mais informações, consulte a seção sobre executando testes.

npm run build
Cria a versão otimizada para produção da aplicação na pasta build.
A aplicação é minificada e otimizada para o melhor desempenho possível.

Agora, a aplicação está pronta para ser implantada!

npm run eject
Aviso: esta operação é irreversível. Depois de executar o comando eject, você não poderá voltar.

Se você não estiver satisfeito com as configurações de construção e ferramentas, pode usar este comando para copiar todos os arquivos de configuração para o seu projeto. A partir daí, você terá total controle sobre as configurações do Webpack, Babel, ESLint e outras ferramentas.

# Como Funciona a Candidatura
Recrutador: Pode visualizar todas as candidaturas.

Candidato: Envia sua candidatura preenchendo um formulário com seus dados pessoais e profissionais. O código sequencial gerado será utilizado para o candidato acompanhar sua candidatura.

Administração: O recrutador ou o administrador pode acessar os dados dos candidatos por meio de um painel de controle.

# Tecnologias Usadas
React.js: Framework JavaScript para construir interfaces de usuário.

Node.js: Ambiente de execução para JavaScript no servidor.

Express: Framework web para Node.js, caso utilize no backend.

Axios: Biblioteca para realizar requisições HTTP para consumir APIs.

Licença
Este projeto está licenciado sob a MIT License.
