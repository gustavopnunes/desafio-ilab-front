<h1 align="center">
  <img src="https://i.imgur.com/pnrj6LW.png" title="EntregaLover Logo" width="400" />
</h1>

## Sobre o projeto

<p>Nosso projeto consiste em uma aplicação para recuperação e armazenamento de dados de geolocalização em tempo real.</p>

+ Para ver a **API**, desenvolvida com Spring Boot, clique [aqui](https://github.com/gustavopnunes/desafio-ilab-back).</br>
+ Para ver o projeto no Vercel, clique [aqui]().

### 👩🏽‍💻 Equipe responsável
- [Bianca Andrade](https://github.com/biancaandradee)
- [Gustavo Nunes](https://github.com/gustavopnunes)
- [Jean Pierre Sisse](https://github.com/JeanSisse)
- [Lisandre Darioli](https://github.com/lisdrl)
- [Mayanna Porto](https://github.com/mayannap)
- [Quézia Balonecker](https://github.com/queziabalonecker)

## 💻 Tecnologias

Tecnologias que utilizamos para desenvolver esta API Rest:

- [ReactJS](https://reactjs.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [Geolocation API](https://w3c.github.io/geolocation-api/#geolocation_interface)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Styled Components](https://styled-components.com/)

## 🏁 Iniciando o projeto

- A [API](https://github.com/gustavopnunes/desafio-ilab-back) do projeto deve estar em execução.

**Clone o projeto e acesse a pasta:**

```bash
$ git clone https://github.com/gustavopnunes/desafio-ilab-front && cd desafio-ilab-front
```

**Siga as etapas abaixo:**

```bash
# Instale as dependências
$ yarn

# Inicie o client
$ yarn start
```
## ⚙️ Funcionalidades
Funcionalidades que o sistema oferece:
- Login de Pessoa Entregadora
- Lista de Pedidos Abertos (isto é, sem entregador associado)
- Página de Início de Rastreio
- Página de Conclusão ou Cancelamento da Entrega
	
## 📱 Telas 

Nesta seção serão exibidas as telas do sistema e sua navegabilidade.

### 🔑️ Login de Pessoa Entregadora
<p align="center">
<img src="https://i.imgur.com/VNvK0cU.png" title="tela de login" width="400" />
</p>
Nesta tela inicial, a pessoa entregadora deve fazer login com seu e-mail ou telefone. Caso não tenha sucesso, será exibido um alerta.

### 📦 Lista de Pedidos Abertos
<p align="center">
<img src="https://i.imgur.com/4auW9pu.png" title="tela de pedidos" width="400" />
</p>
Após o login, o usuário será redirecionado para a tela acima, na qual são listados todos os pedidos abertos - isto é, que ainda não estão associados a um entregador. Ao selecionar um pedido clicando nele, o usuário será redirecionado para a tela seguinte.

### Início do Rastreio
<p align="center">
<img src="https://i.imgur.com/er4mBAm.png" title="tela de pedidos" width="400" />
</p>
Após selecionar um pedido, o usuário pode confirmar sua escolha clicando em "Iniciar Rastreio" ou, caso tenha se arrependido do pedido escolhido, clicar em "Voltar" para retornar à tela anterior. 
Ao clicar em "Iniciar Rastreio", um novo rastreio será lançado no sistema, associando a pessoa entregadora ao pedido escolhido. Além disso, o status do pedido será redefinido como "in progress" e, a cada mudança de posição da pessoa entregadora, sua localização será armazenada no banco de dados.

### Conclusão ou Cancelamento do Rastreio
<p align="center">
<img src="https://i.imgur.com/ohUzjgI.png" title="tela de pedidos" width="400" />
</p>
Nesta página, o usuário tem duas opções:
- cancelar a entrega, de modo que o pedido retornará à lista de pedidos abertos - ou seja, terá seu status alterado para "open", enquanto que o status daquele rastreio em específico será definido como "canceled";
- concluir a entrega, de modo que o pedido e o rastreio terão seu status alterado para "delivered".

## 🔗 Links adicionais
- [Kanban da equipe](https://sharing.clickup.com/31041916/b/h/xkabw-103/afe7965c2387ca4)
