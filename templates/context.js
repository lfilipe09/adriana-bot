const { fallbackBible, bibleMessage } = require("./messages/bible")
const { greetings, menu, fallbackMenu, fallbackGreetings } = require("./messages/default")
const { gameIntro, gameIntroFallback } = require("./messages/game")
const { hangmanWordsIntro, hangmanWordsRules, hangmanWordsInGame, fallbackHangmanWordsIntro, fallbackHangmanWordsInGame, fallbackHangmanWordsRules, fallbackHangmanWordsWinner, fallbackHangmanWordsLoser } = require("./messages/hangmanWords")
const { onboardingOne, onboardingTwo, refuseOnboarding, fallbackOnboardingTwo, onboardingThree, fallbackOnboardingThree, fallbackOnboardingFour, onboardingFour } = require("./messages/onboarding")
const { positiveMessage, fallbackPositiveMessage } = require("./messages/positive")
const { recipesIntro, fallbackRecipesIntro, fallbackRecipesAnswer, recipesAnswer } = require("./messages/recipes")
const { fallbackScamsMessage, scamsMessage } = require("./messages/scams")

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
    },
    mensagem_positiva: {
      name: 'positiveMessage',
      template: positiveMessage
    },
    sobre_golpes: {
      name: 'scamsMessage',
      template: scamsMessage
    },
    vamos_jogar: {
      name: 'gameIntro',
      template: gameIntro
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
  },
  positiveMessage: {
    voltar_ao_menu: {
      name: 'menu',
      template: menu
    },
    mais_uma: {
      name: 'positiveMessage',
      template: positiveMessage
    }
  },
  scamsMessage: {
    voltar_ao_menu: {
      name: 'menu',
      template: menu
    },
    mais_uma: {
      name: 'scamsMessage',
      template: scamsMessage
    }
  },
  gameIntro: {
    jogo_da_forca: {
      name: 'hangmanWordsIntro',
      template: hangmanWordsIntro
    },
    menu:{
      name: 'menu',
      template: menu
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
  bibleMessage: fallbackBible,
  positiveMessage: fallbackPositiveMessage,
  scamsMessage: fallbackScamsMessage,
  gameIntro: gameIntroFallback,
  hangmanWordsIntro: fallbackHangmanWordsIntro,
  hangmanWordsInGame: fallbackHangmanWordsInGame,
  hangmanWordsRules: fallbackHangmanWordsRules,
  hangmanWordsWinner: fallbackHangmanWordsWinner,
  hangmanWordsLoser: fallbackHangmanWordsLoser
}

module.exports = {templatebyContext, getFallbackByContext}