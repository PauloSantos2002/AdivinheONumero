# 🎯 Adivinhe o Número

Jogo simples em JavaScript onde o computador gera um número aleatório e o jogador tenta adivinhá-lo em até 20 tentativas.  
Quanto menos palpites usados, maior é sua pontuação máxima.

---

## 📖 Sobre

Este projeto é um exercício prático de lógica, interação com o usuário e manipulação de DOM (ou terminal, dependendo da versão).  
Ele permite que o jogador faça “chutes” sucessivos até acertar ou esgotar as tentativas, com feedback em cada estágio, e registra a melhor pontuação conquistada.

Segundo a descrição do repositório:  
> “Jogo que gera um número randômico e o desafio do jogador é adivinhar esse número, são 20 tentativas, a cada chute perde uma tentativa, ao acertar é guardada a maior nota, quanto menos tentativas maior a nota.” :contentReference[oaicite:0]{index=0}

---

## 🧩 Funcionalidades

- Número aleatório gerado entre um intervalo definido (por exemplo, 1 a 100).  
- Até 20 tentativas para acertar.  
- Cada chute reduz o número de tentativas restantes.  
- Feedback após cada tentativa: “muito alto”, “muito baixo” ou “acertou”.  
- Registro da **melhor pontuação** (quanto menos palpites, melhor).  
- Interface simples de usuário (HTML + CSS + JS) ou versão de console.

---

## 📂 Estrutura sugerida do projeto

AdivinheONumero/
│
├── index.html ← Estrutura da página
├── style.css ← Estilos visuais
├── script.js ← Lógica do jogo
├── README.md ← Este arquivo de documentação
└── LICENSE


src/
│ ├── jogo.js ← lógica central do jogo
│ ├── ui.js ← manipulação do DOM / interface
│ └── utils.js ← funções auxiliares (gerar número, validações)


---

## 🛠 Tecnologias e conceitos aplicados

- JavaScript puro (ES6+): `let`, `const`, arrow functions, template literals  
- Manipulação do DOM (caso versão web): `querySelector`, `addEventListener`, `innerText`  
- Controle de fluxo e condicionais  
- Geração aleatória: `Math.random()` e `Math.floor()`  
- Variáveis de estado: tentativas restantes, chute atual, melhor pontuação  
- Boas práticas de código e legibilidade  

---

## ▶️ Como rodar / testar o jogo

### Versão web

1. Clone o repositório  
   ```bash
   git clone https://github.com/PauloSantos2002/AdivinheONumero.git
Entre na pasta

bash
Copiar código
cd AdivinheONumero
Abra o index.html no navegador (duplo clique ou via servidor local)

bash
Copiar código
# Se preferir usar um servidor simples:
npx serve .  
Jogue no navegador: insira palpites, receba feedback e visualize sua pontuação.

## 🎮 Exemplo de jogo (simulação)

Tentativas restantes: 20  
Digite seu palpite: 50  
Resultado: Muito alto!  
Tentativas restantes: 19  
Digite seu palpite: 25  
Resultado: Muito baixo!  
...
Acertou! Você usou 7 palpites!  
Melhor pontuação: 13  
Ou, se for versão visual, pode incluir um screenshot ou GIF aqui:


## 💡 Possíveis melhorias futuras
Permitir escolher intervalo de números (ex: 1–1000)

Botão “Reiniciar jogo”

Interface mais visual para indicar “calor/frio” com cores

Edição responsiva para mobile

Persistência da melhor pontuação usando localStorage

Versão em terminal (Node.js) para uso via CLI

Modo avançado: dicas extras (ex: “você chegou perto”)

Temporizador (limite de tempo para chutes)

🧾 Licença
Este projeto está licenciado sob a MIT License.
Você é livre para usar, modificar e distribuir conforme desejar.

Desenvolvido por Paulo Santos
Projeto criado para prática e demonstração de lógica com JavaScript.
