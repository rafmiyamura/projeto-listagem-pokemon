/*O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

-objetivo 1 - quando clicar no botão de troca de tema adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua
    - passo 1 - pegar no JS o elemento HTML correspondente ao botã ode troca de tema
    - passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body
    - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
    - paosso 4 - adicionar a classe modo-escuro no body
    - passo 5 - trocar a imagem do botão de alterar tema para lua

-objetivo 2 - quando clicar no botã ode troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro e mudar a imagem para sol.
    - passo 6 - remover a classe modo-escuro do body
    - passo7 - trocar a imagem do botão de alterar tema para sol.
 */

//objetivo 1 - aplicar o modo escuro ao clicar no botão

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao")
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemBotaoTrocadeTema.setAttribute("src", "./SRC/imagens/sun.png");
    } else {
        imagemBotaoTrocadeTema.setAttribute("src", "./SRC/imagens/moon.png");
    }
});