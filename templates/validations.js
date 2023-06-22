const answersValidations = {
  greetings: /^(sim|n[ãÃ]o)$/i,
  onboardingTwo: /^([1-9]|[1-9][0-9]|1[0-4][0-9]|150)$/
}

const storageAnswerByContext = [
  'onboardingOne',
  'onboardingTwo'
]

const getSubcontextByContext = [
  'greetings'
]

const dbColumnName = {
  onboardingOne: 'name',
  onboardingTwo: 'age'
}

module.exports = {answersValidations, storageAnswerByContext, getSubcontextByContext, dbColumnName}