
# Pro Finance

## Visão Geral
Pro Finance é um aplicativo de controle de finanças pessoais desenvolvido com React Native e Expo. Projetado para funcionar em ambos os sistemas operacionais, Android e iOS, este aplicativo ajuda os usuários a gerenciar suas despesas de forma manual, garantindo um controle preciso sobre suas finanças.

## Motivação
Desenvolvido para proporcionar uma experiência de usuário simplificada, o Pro Finance permite aos usuários inserir, acompanhar e analisar suas despesas sem complicações, incentivando um melhor planejamento financeiro e tomada de decisão.

## Características Principais

- **Cadastro de Despesas:** Permite que os usuários insiram e visualizem detalhes de suas despesas.
- **Suporte Multiplataforma:** Funciona em dispositivos iOS e Android.
- **Segurança de Dados:** Utiliza métodos de autenticação seguros para proteger as informações do usuário.
- **Intuitivo e Fácil de Usar:** Interface amigável projetada para facilitar o uso diário.

## Tecnologias Utilizadas
- **React Native:** Framework para desenvolvimento de aplicativos nativos.
- **Expo:** Plataforma de código aberto que permite desenvolvimento fácil e rápido.
- **TypeScript:** Adiciona tipagem estática para aumentar a confiabilidade e manutenibilidade do código.

## Instalação

Para rodar o Pro Finance em seu ambiente de desenvolvimento, siga os passos abaixo:

1. **Instale o Node.js e o Expo CLI:**
   ```bash
   npm install -g expo-cli
   ```

2. **Clone o repositório e instale as dependências:**
   ```bash
   git clone https://github.com/hugohsk99/proFinance.git
   cd proFinance
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   expo start
   ```
4. **Artigo Ciêntifico do Projeto**

[Clique aqui para acessar o documento](https://docs.google.com/document/d/1e70hDpn1Hwr_fs_A-rupBwyIlLtBYiby/edit#heading=h.3rylmof5o7qz)

## Estrutura do Projeto

O projeto ProFinance está organizado em uma estrutura modular, facilitando o desenvolvimento e a manutenção. Abaixo está a descrição básica da estrutura de diretórios:

- **android**: Contém todos os arquivos e configurações específicas para a plataforma Android, incluindo códigos Java e XML para configurações e interfaces.
- **ios**: Armazena os arquivos necessários para o desenvolvimento no iOS, como o código Objective-C, arquivos de configuração, e assets.
- **imagesfinancepro**: Pasta que contém as imagens e logos utilizadas no projeto.
- **src**: Inclui os arquivos TypeScript para as funcionalidades do app, organizados por telas e componentes.

### Detalhes

- **android/app/src**: Inclui código Java para atividades principais e configurações do aplicativo.
- **ios/profinance**: Contém arquivos específicos do projeto iOS, como `AppDelegate` e assets de imagem para telas de carregamento.

Esta organização ajuda a manter o projeto limpo e compreensível, permitindo que novos desenvolvedores entendam rapidamente a base de código e contribuam efetivamente.

## Configurações de Projeto
- **Estrutura de Arquivos:** Baseada em componentes e páginas, facilitando a organização e a manutenção.
- **Autenticação:** Implementada com autenticação via Google e Apple para segurança.
- **Gerenciamento de Estado:** Utiliza Zustand para gerenciamento de estado dentro da aplicação.

## Como Contribuir
Contribuições são bem-vindas! Por favor, leia nosso guia de contribuição para entender como fazer pull requests.

## Licença
Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Autores
- **Hugo Santana Rosa** - *Desenvolvimento inicial*

## Logos ProFinance

![Brasão ProFinance](./imagesfinancepro/brasaoFinancePro.png)

![Logo ProFinance](./imagesfinancepro/profinancelogo1.png)
