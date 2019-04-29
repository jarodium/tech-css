## Draft de Programção de uma Framework concorrente ao BS ##

1º Problema
Servir o CSS apropriado para o dispositivo.

Solução proposta

- O Javascript, através do mobiledetect, detectar qual o dispositivo 
    - Se encontrou, serve o ficheiro CSS apropriado da lista de ficheiros que temos
    - Se não encontrou, assume que o dispositivo é um computador e serve o geral


2º Problema
Colocação de estilos gerais

Solução proposta

- Criação de um css geral que ficará no topo dos pedidos
    ex:
        geral.css
        responsive-?.css

3º Problema 
Conteúdo presente na classe geral.

Solução proposta:


-   Adicionalmente colocar as seguintes
    - fs-X ( gerado via gerador)
    - fs-Xp ( font-size percentual ) definido na :root



Estrutura do "builder" para cada página

1º ficheiro
    https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css ( comprimido )
    + utilities + grid

2º ficheiro
    ficheiro css para a página

3º ficheiro
    todos os ficheiros de responsive colando as regras para dentro do ficheiro da página, fazendo o match às classes lá dentro

4º ficheiro
    os ficheiros que possuem as cores do tema para o website