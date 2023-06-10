const bemVindo = alert(
  "Bem vindo! A seguir pediremos que informe alguns dados!"
);

let nome = prompt("Informe seu nome:");
let idade = prompt("Informe sua idade:");

const ageConfirmation = confirm("Sua idade é: " + idade + " anos ");

const informacao = alert(
  "Nome do usuário: " +
    nome +
    "\nIdade: " +
    idade +
    "\nIdade confirmada: " +
    ageConfirmation
);

/* Aqui foi usado o "alert" | "Prompt" | "Confirm" 
Usamos também as variáveis "const" | "let"
*/
