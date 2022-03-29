# DESAFIO DO LOVE <3

---

### Repositório front

https://github.com/gustavopnunes/desafio-ilab-front

### Repositório back

https://github.com/gustavopnunes/desafio-ilab-back

---

## Login do entregador

### POST /login

**Campos necessários:**

- Login (email ou telefone) (obrigatório)
- Password (obrigatório)

**Retorno:**

- Status
  - 200
  - 401
- Token

```
//Exemplo de requisição:
{
    "email": "pedro@email.com", || "phone": "719999999",
    "password": "12345"
}
```

**Tratamento de erros:**

- Token inválido
- Email e/ou senha inválidos

## Alterar status do pedido e atribui pedido ao entregador

### POST /orders/:id_order/tracking-status

Altera o status do pedido(em andamento) atribui o pedido ao entregador através da criacao do rastreio(tracking-status), que já é iniciado em andamento.
Dessa forma a gente evita que o pedido fique no limbo entre seleção e inicio de tracking

**Quando é chamado?**

- ao selecionar pedido (em andamento)
- ao cancelar pedido (aberto)
- ao finalizar pedido (concluido)

**Campos necessários:**

- Header:
  - Token
- Path Param
  - order_id
- Body:
  - delivery_person_id

```
// Exemplo de requisição
{
    "idEntregador": id_entregador
}
```

**Retorno:**

- Status
  - 201
  - 400
- Body:
  - Objeto criado

---

## Consulta de pedidos abertos

### GET /orders?status=open&items=15

// Criar paginação (interface JPA Repository em vez de CrudRepository)
// O parâmetro "items" define quantos itens serão retornados
// Possibilidades de status: “aberto”, “em andamento”, “entregue”

**Campos necessários:**

- Header
  - Token
- Query Param
  - status
  - page

**Retorno:**

- Status
  - 200 (sucesso)
  - 400
- Lista de Pedidos

```
//Exemplo de retorno:

{
    "": "",
    "": ""
}
```

**Tratamento de erros:**

- Pedido com status diferente de "aberto"

---

## Receber geolocalização do entregador

### POST /tracking-history

**Quando é chamado?**

- ao clicar “iniciar tracking”
- de X em X segundos

**Campos necessários:**

- Header:
  - Token
- Body:
  - tracking_date
  - latitude,
  - longitude
  - tracking_status_id

```
// Exemplo de requisição
{
    "order_id": id;
    "delivery_person_id": id_entregador;
    "tracking_date": 1647969882259;
    "latitude": "23323455";
    "longitude": 23323180
}
```

**Retorno:**

- Status de sucesso:

  - 201 (created)

- Status de erro:
  - 400 (bad request)

---

## Alteração de status de rastreio

### PUT /tracking-status/:id

Sendo que ao finalizar tracking passando o status "concluido" o status do pedido tambem devera ser alterado

**Quando é chamado?**

- ao clicar cancelar pedido (cancelado)
- ao clicar finalizar pedido (concluido)

**Campos necessários:**

- Header:
  - Token
- PathParam
  - id_tracking_status
- Body:
  - novo status

```
//Exemplo de requisição:

{
    "status": "cancelado";
}
```

**Retorno:**

- Status
  - 200 (sucess)
  - 400 (bad request)
  - 401 (unauthorized)
- Body:
  - Objeto editado

**Tratamento de erros:**

-

---

## Endpoint para consultas de geolocalização por pedido

~~### GET /tracking-history?order-id=id~~

### GET /tracking-history/orders/id

??? Será feito com join ???

**Campos necessários:**

- Header:
  - Token
- PathParam
  - idOrder?

**Retorno:**

- Histórico de localização
- Status
  - 204
  - 400
  - 404

**Tratamento de erros:**

## Padrão de organização dos pacotes

#### Pacote base:

    * [br.com.grupodois.desafioilab] -> pb

    * pb.model
    * pb.controller
    * pb.services
    * pb.dao

post: orders/:idOrder/tracking

Endpoint q atribui pedido ao entregador, cria o rastreio e altera o status do pedido
