const { customFlows } = require("../flows/customFlows")
const { hangmanFlows } = require("../flows/hangmanFlow")

const answersValidations = {
  greetings: /^(sim|nao)$/i,
  onboardingTwo: /^([1-9]|[1-9][0-9]|1[0-4][0-9]|150)$/,
  onboardingThree: /^[a-zA-Z]{2}$/,
  onboardingFour: /^(masculino|feminino|outro)$/i,
  menu: /^(vamos_jogar|salvar_lembrete|vamos_cozinhar|ler_a_biblia|ler_a_biblia|mensagem_positiva|sobre_golpes)$/i,
  recipesIntro: /^(doce|salgada)$/i,
  recipesAnswer: /^(voltar_ao_menu|mais_uma)$/i,
  bibleMessage: /^(voltar_ao_menu|mais_uma)$/i,
  positiveMessage: /^(voltar_ao_menu|mais_uma)$/i,
  scamsMessage: /^(voltar_ao_menu|mais_uma)$/i,
  gameIntro: /^(menu|jogo_do_milhao|jogo_da_forca)$/i,
  hangmanWordsIntro: /^(voltar_ao_menu|escutar_instrucoes|jogar_agora)$/i,
  hangmanWordsRules: /^(voltar_ao_menu|jogar_agora)$/i,
  hangmanWordsWinner: /^(voltar_ao_menu|outra_vez)$/i,
  hangmanWordsLoser: /^(voltar_ao_menu|outra_vez)$/i
}

const storageAnswerByContext = [
  'onboardingOne',
  'onboardingTwo',
  'onboardingThree',
  'onboardingFour'
]
 
const getSubcontextByContext = [
  'greetings',
  'menu',
  'recipesAnswer',
  'gameIntro',
  'bibleMessage',
  'positiveMessage',
  'scamsMessage',
  'hangmanWordsIntro',
  'hangmanWordsRules',
  'hangmanWordsWinner',
  'hangmanWordsLoser'
]

const specialContext = [...Object.keys(customFlows), ...Object.keys(hangmanFlows) ]

const dbColumnName = {
  onboardingOne: 'name',
  onboardingTwo: 'age',
  onboardingThree: 'state',
  onboardingFour: 'gender'
}

module.exports = {answersValidations, storageAnswerByContext, getSubcontextByContext, dbColumnName, specialContext}