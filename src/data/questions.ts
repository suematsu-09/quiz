import { Question } from "@/types/question";

export const questions: Question[] = [
    {
        question: 'O que é o React?',
        options: [
            'Um banco de dados NoSQL',
            'Uma linguagem de programação',
            'Uma biblioteca JavaScript para criação de interfaces', 
            'Um framework de backend'
        ],
        answer:2
    },
    {
        question: 'Qual é a principal função do JSX no React?',
        options: [
            'Criar estilos CSS diretamente no JavaScript',
            'Permitir escrever HTML dentro do JavaScript', 
            'Fazer requisições HTTP',
            'Gerenciar rotas da aplicação',
        ],
        answer: 1
    },
    {
        question: 'Para que serve o useState no React?',
        options: [
            'Fazer chamadas à API',
            'Criar componentes de classe',
            'Gerenciar estado dentro de componentes funcionais', 
            'Criar efeitos colaterais'
        ],
        answer: 2
    },
    {
        question: 'O que acontece quando o estado de um componente React muda?',
        options: [
            'O navegador é recarregado',
            'O React ignora a mudança',
            'O componente é re-renderizado', 
            'O HTML é apagado'
        ],
        answer: 2
    },
    {
        question: 'Qual das opções abaixo é uma forma correta de passar uma prop para um componente?',
        options: [
            '<Componente prop="valor" />',
            '<Componente {prop="valor"} />',
            '<Componente prop:valor />',
            '<Componente prop(valor) />',
        ],
        answer: 0
    },
    {
        question: 'Qual método JavaScript é mais usado para renderizar listas no React?',
        options: [
            'for',
            'while',
            'map()',
            'filter()'
        ],
        answer: 2
    },
    {
        question: 'Para que serve a propriedade key ao renderizar listas no React?',
        options: [
            'Definir estilos CSS',
            'Ajudar o React a identificar elementos únicos na lista',
            'Passar dados para o componente',
            'Criar eventos de clique'
        ],
        answer: 1
    },
    {
        question: 'O que é uma SPA (Single Page Application)?',
        options: [
            'Uma aplicação com várias páginas HTML',
            'Uma aplicação que só funciona offline',
            'Uma aplicação que atualiza o conteúdo sem recarregar a página',
            'Um site feito apenas com HTML'
        ],
        answer: 2
    },
    {
        question: 'Qual é a função do useEffect no React?',
        options: [
            'Criar estados locais',
            'Executar efeitos colaterais como chamadas à API',
            'Criar rotas',
            'Renderizar JSX'
        ],
        answer: 1
    },

];