const { fallbackBible, bibleMessage } = require("./messages/bible")
const { greetings, menu, fallbackMenu, fallbackGreetings } = require("./messages/default")
const { onboardingOne, onboardingTwo, refuseOnboarding, fallbackOnboardingTwo, onboardingThree, fallbackOnboardingThree, fallbackOnboardingFour, onboardingFour } = require("./messages/onboarding")
const { recipesIntro, fallbackRecipesIntro, fallbackRecipesAnswer, recipesAnswer } = require("./messages/recipes")

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
    nao: {
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
  },
  menu: {
    vamos_cozinhar: {
      name: 'recipesIntro',
      template: recipesIntro
    },
    ler_a_biblia: {
      name: 'bibleMessage',
      template: bibleMessage
    }
  },
  recipesIntro:{
    name: 'recipesAnswer',
    template: recipesAnswer
  },
  recipesAnswer: {
    voltar_ao_menu: {
      name: 'menu',
      template: menu
    },
    mais_uma: {
      name: 'recipesIntro',
      template: recipesIntro
    }
  },
  bibleMessage: {
    voltar_ao_menu: {
      name: 'menu',
      template: menu
    },
    mais_uma: {
      name: 'bibleMessage',
      template: bibleMessage
    }
  }
}

const getFallbackByContext = {
  greetings: fallbackGreetings,
  onboardingTwo: fallbackOnboardingTwo,
  onboardingThree: fallbackOnboardingThree,
  onboardingFour: fallbackOnboardingFour,
  menu: fallbackMenu,
  recipesIntro: fallbackRecipesIntro,
  recipesAnswer: fallbackRecipesAnswer,
  bibleMessage: fallbackBible
}

module.exports = {templatebyContext, getFallbackByContext}