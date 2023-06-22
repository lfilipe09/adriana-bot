const answersValidations = {
  greetings: /^(sim|n[ãÃ]o)$/i,
  onboardingTwo: /^([1-9]|[1-9][0-9]|1[0-4][0-9]|150)$/,
  onboardingThree: /^[a-zA-Z]{2}$/,
  onboardingFour: /^(masculino|feminino|outro)$/i
}

const storageAnswerByContext = [
  'onboardingOne',
  'onboardingTwo',
  'onboardingThree',
  'onboardingFour'
]

const getSubcontextByContext = [
  'greetings'
]

const dbColumnName = {
  onboardingOne: 'name',
  onboardingTwo: 'age',
  onboardingThree: 'state',
  onboardingFour: 'gender'
}

module.exports = {answersValidations, storageAnswerByContext, getSubcontextByContext, dbColumnName}