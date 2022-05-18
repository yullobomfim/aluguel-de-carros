# Avaliação Sistemas Distribuidos

## 📃 Sobre

Este trabalho foi desenvolvido como avaliação da disciplina de Sistemas Distribuidos na Internet da Universidade Federal da Bahia IFBA- Vitória da Conquista ministrada pelo Professor Luis Paulo da Silva Caravlho, este projeto é estritamente didático e o código com as informações são de Autoria do Discente Yullo Costa Bomfim, VII semestre.
Foi desenvolvida uma aplicação utilizando os conceitos de orquestração de containers utilizando Docker e back-end em NodeJs e utiliza a linha de comando para teste da aplicação.

O **objetivo** deste trabalho é criar um back-end de microsserviços web containerizados para que um cliente assíncrono o consuma. Foi criado uma loja fake de aluguel de carros, aonde será possivel 1- listas os clientes, 2- listar os veiculos da locadora, 3- Listar o status de pagamento dos veiculos alugados, todos os serviços estão containerizados e acessivéis atráves do Cliente. Cada microsserviço realiza somente UMA coisa. Como este sistema não possui uma **interface gráfica**, está sendo **apresentado** em linha de comando. Além disso, os usuários poderão acessar algum serviço, mesmo que outro não esteja funcionando. Este projeto foi desenvolvido para fins de estudo e aprendizado próprio, com foco em Docker, na linguagem JavaScript.

## 🚀 Tecnologias utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:
- [**Visual Studio Code**](https://code.visualstudio.com/): um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS, recomendado para o desenvolvimento de aplicações web;
- [**Node.js**](https://nodejs.org/en/): um interpretador de JavaScript assíncrono com código aberto orientado a eventos;
- [**Docker Desktop**](https://www.docker.com/): O Docker Desktop é um aplicativo fácil de instalar que permite criar e compartilhar aplicativos e microsserviços em contêineres. Ele vem com ferramentas de contêiner como Kubernetes, Docker Compose, BuildKit e verificação de vulnerabilidades.

## 📟 Layout e Análise da aplicação
A aplicação **Rental** foi desenvolvida por mim e não tem a pretensão de ser definitiva, mas apenas atender aos critérios da avaliação desta disciplina e o código fonte esta disponivel em meus repositórios no GitHub [**yullobomfim**](https://github.com/yullobomfim/aluguel-de-carros.git/).
O projeto está publicado também atráves de vídeo autoral explicando a configuração inicial, as principais funcionalidades e o desenvolvimento do projeto que está sendo enviado ao professor Luís Paulo via Google Class.

## 🔧 Instalação e Execução

Para você poder instalar e executar esta aplicação, terá que ter instalado em sua máquina o Git [**Git**](https://git-scm.com/) e o [**Docker Desktop**](https://www.docker.com/).
É importante verificar durante a configuração desta aplicação se as portas utilizadas estão livres. Como estou utilizando os microserviços nas portas 9000, 9001, 9002 e 9003, é uma premissa que estas portas estejam livres para assim rodar a aplicação.

### Microservices e BackEnd

1. Faça um clone da aplicação do github e vá até a pasta raíz do repositório:
    ```bash
    $ git clone https://github.com/yullobomfim/aluguel-de-carros.git
    ```
2. Navegue até a pasta raíz do repositório:
    ```bash
    $ cd/rental
    ```
3. Execute o Build do Dockerfile na pasta raíz:
    ```bash
    $ docker build .
    ```
4. Execute o docker-compose:
    ```bash
    $ docker-compose up -d
    ```
5. Navegue até o cliente da aplicação:
    ```bash
    $ cd/client
    ```
6. Instale as dependencias do Cliente em /client:
    ```bash
    $ npm install
    ```
7. Execute o Cliente e observe o recebimento dos dados:
    ```bash
    $ npm start
    ```

- Ao executar o Cliente, você deve ver os 3 serviços rodando normalmente, apresentando os dados da API. Caso um serviço seja parado ( docker stop (id_container) os demais serviços continuarão funcionando normalmente. Após o serviço ser restabelecido ( docker start ( id_container) os serviços voltam a enviar os dados.

## 💡 Como contribuir

- Faça um **_fork_** desse repositório;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Faça um **commit** com suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça um **push** para o seu branch: `git push origin minha-feature`;
- Faça um **pull request** com sua feature;

Pull requests são sempre bem-vindos. Em caso de dúvidas ou sugestões, crie uma _**issue**_ ou entre em contato comigo.

## 📲 Contato

Entre em contato comigo pelo meu LinkedIn:
https://www.linkedin.com/in/yullo-bomfim-50434627/


## 📝 Licença

Este projeto foi desenvolvido para atender aos critérios da disciplina de Sistemas Distribuidos na Internet, possuem carater didático, e os dados são fícticios para melhor compreensão da tecnologia.

***
