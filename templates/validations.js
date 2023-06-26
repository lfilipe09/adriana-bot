const answersValidations = {
  greetings: /^(sim|nao)$/i,
  onboardingTwo: /^([1-9]|[1-9][0-9]|1[0-4][0-9]|150)$/,
  onboardingThree: /^[a-zA-Z]{2}$/,
  onboardingFour: /^(masculino|feminino|outro)$/i,
  menu: /^(vamos_jogar|salvar_lembrete|vamos_cozinhar|ler_a_biblia|ler_a_biblia|mensagem_positiva|sobre_golpes)$/i,
  recipesIntro: /^(doce|salgada)$/i,
  recipesAnswer: /^(voltar_ao_menu|mais_uma)$/i
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
  'recipesAnswer'
]

const specialContext = [
  'recipesIntro'
]

const dbColumnName = {
  onboardingOne: 'name',
  onboardingTwo: 'age',
  onboardingThree: 'state',
  onboardingFour: 'gender'
}

module.exports = {answersValidations, storageAnswerByContext, getSubcontextByContext, dbColumnName, specialContext}