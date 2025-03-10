# Sistema de Contagem de Estoque

Este é um sistema simples e eficiente para controle e contagem de estoque. Ele foi desenvolvido para facilitar o processo de registrar e monitorar os produtos e suas quantidades, com funcionalidades como cálculo de quantidade total de itens, adição e remoção de produtos, geração de relatórios formatados e salvamento dos dados temporariamente no navegador. Ideal para ser usado em dispositivos móveis.

## Funcionalidades

- **Adicionar produtos**: Permite cadastrar produtos com seus respectivos nomes e quantidades.
- **Remover produtos**: Caso você adicione um produto por engano, pode removê-lo rapidamente.
- **Calculadora de área**: Uma ferramenta para calcular a quantidade total de itens em uma área, útil para empilhamento de caixas ou paletes. Você insere as dimensões da altura e largura, e o sistema calcula a quantidade total.
- **Gerar relatório**: Um botão que gera uma lista formatada para ser copiada e colada no WhatsApp ou outro aplicativo de mensagens, incluindo o nome dos produtos, suas quantidades e a data da contagem.
- **Armazenamento temporário**: Utiliza o `localStorage` para salvar os dados no navegador, mantendo-os por até 8 horas. Caso o navegador seja fechado ou a página atualizada, os dados serão recuperados automaticamente, desde que dentro do período de 8 horas.

## Requisitos

- Navegador moderno que suporte HTML5, CSS3 e JavaScript.
- Nenhuma instalação adicional é necessária, pois o sistema funciona diretamente no navegador.

## Como usar

1. **Adicionando produtos**:
   - Insira o nome do produto e a quantidade no formulário na interface principal.
   - Clique no botão **"Adicionar Produto"** para registrar o item.

2. **Removendo produtos**:
   - Na tabela de produtos, clique em **"Remover"** ao lado do produto que deseja excluir.

3. **Calculando a quantidade total**:
   - Clique no botão **"Abrir Calculadora"**.
   - Insira os valores de **altura** e **largura** da área (em unidades de medida) e clique em **"Calcular"**. O sistema mostrará a quantidade total de itens (como caixas ou paletes) empilhados na área.

4. **Gerando relatório**:
   - Clique no botão **"Copiar Relatório"**.
   - A lista será copiada para a área de transferência, já formatada para ser colada diretamente em grupos de WhatsApp ou outros aplicativos de mensagens. O relatório incluirá o título "Contagem de Estoque", os nomes dos itens, suas quantidades e a data da contagem.

5. **Armazenamento temporário**:
   - Os dados são salvos automaticamente no navegador e preservados por até **8 horas**. Caso a página seja atualizada ou o navegador fechado dentro desse período, os dados serão recuperados. Após 8 horas, os dados são apagados do `localStorage`.

## Estrutura do Projeto

O sistema é composto pelos seguintes arquivos:

- `index.html`: Arquivo HTML principal que estrutura a interface do usuário.
- `style.css`: Arquivo CSS responsável pelo estilo e design da interface.
- `script.js`: Arquivo JavaScript que contém a lógica do sistema, como adição de produtos, cálculos e manipulação do `localStorage`.

## Como rodar o sistema

Este sistema é totalmente estático e pode ser executado diretamente no seu navegador. Para rodá-lo, siga as etapas abaixo:

1. Baixe ou clone o repositório para o seu computador.
2. Abra o arquivo `index.html` em seu navegador.
3. Comece a registrar os produtos e usar as funcionalidades!

## Tecnologia Utilizada

- **HTML5**: Para a estruturação da interface.
- **CSS3**: Para o estilo e design responsivo.
- **JavaScript**: Para a lógica de manipulação de dados e funcionalidades como cálculo e armazenamento local.
- **localStorage**: Para armazenar os dados temporariamente no navegador por até 8 horas.

## Exemplo de Relatório

Aqui está um exemplo de como a lista copiada para o WhatsApp ficará formatada:

```
Contagem de Estoque

* Produto A: 15 unidades
* Produto B: 10 unidades
* Produto C: 25 unidades

Total de itens: 50
Data: 06/03/2025
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.



