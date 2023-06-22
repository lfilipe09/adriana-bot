const { greetings } = require("./messages/default")
const { onboardingOne, onboardingTwo, refuseOnboarding, fallbackOnboardingTwo, onboardingThree } = require("./messages/onboarding")

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
  }
}

const getFallbackByContext = {
  onboardingTwo: fallbackOnboardingTwo
}

module.exports = {templatebyContext, getFallbackByContext}