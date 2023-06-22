const { greetings, menu } = require("./messages/default")
const { onboardingOne, onboardingTwo, refuseOnboarding, fallbackOnboardingTwo, onboardingThree, fallbackOnboardingThree, fallbackOnboardingFour, onboardingFour } = require("./messages/onboarding")

const templatebyContext = {
  initialContact: {
    name: 'greetings', 
    template: greetings
  },
  greetings: {
    sim: {
      name:'onboardingOne', 
      template: onboardingOne
    },
    não: {
      name: 'refuseOnboarding', 
      template: refuseOnboarding
    }
  },
  onboardingOne: {
    name: 'onboardingTwo', 
    template: onboardingTwo
  },
  refuseOnboarding: {
    name: 'greetings', 
    template: greetings
  },
  onboardingTwo:{
    name: 'onboardingThree',
    template: onboardingThree
  },
  onboardingThree: {
    name: 'onboardingFour',
    template: onboardingFour
  },
  onboardingFour: {
    name: 'menu',
    template: menu
  }
}

const getFallbackByContext = {
  onboardingTwo: fallbackOnboardingTwo,
  onboardingThree: fallbackOnboardingThree,
  onboardingFour: fallbackOnboardingFour
}

module.exports = {templatebyContext, getFallbackByContext}