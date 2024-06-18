const questions = [
  {
    number: 1,
    question: "It's the first day of summer! You wake up, yawn, roll over, and notice a glowing green orb floating above your head.",
    image: "images-w/q1.webp",
    "image-alt": "green orb",
    answers: {
      A: {
        text: "I wonder what that is. <br/> You touch it with excitement.",
        scores: ["CEXMB"]
      },
      B: {
        text: "Huh, that's weird. You close your <br/> eyes and try to go back to sleep.",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 2,
    question: "Suddenly, the glowing green orb opens a portal and you get sucked in.",
  },
  {
    number: 3,
    question: "You have been transported to a mystical world with a lush green forest and deep blue waters.",
    image: "images-w/q3.webp",
    "image-alt": "forest",
    answers: {
      A: {
        text: "This place is so beautiful! I <br/> want to look around and explore.",
        scores: ["CEXMB"]
      },
      B: {
        text:  "Wait where am I? What's going on? <br/> I need to figure out how to get back home.",
        scores: ["CBRCAL"]
      }
    }
  },
  {
    number: 4,
    question: "You are walking through the forest. After some time, you come across a fork in the path. <br/> One path glows with soft, sparkling lights, while the other is shadowy and mysterious.",
    image: "images-w/q4.webp",
    "image-alt": "forked path",
    answers: {
      A: {
        text:  "​Follow the path that glows <br/> with soft, sparkling lights",
        scores: ["CEXMB"]
      },
      B: {
        text:  "Take the path that is <br/> shadowy and mysterious",
        scores: ["CBRCAL"]
      }
    }
  },
  {
    number: 5,
    question: "As you continue your journey, you find a hidden cave behind a waterfall. <br/> The sound of the water is soothing, and you feel a sense of wonder. Do you:",
    image: "images-w/q5.webp",
    "image-alt": "waterfall", 
    answers: {
      A: {
        text: "​​Enter the cave, hoping to <br/> find hidden treasures?",
        scores: ["CEXMB"]
      },
      B: {
        text: "Stay outside and listen carefully for any <br/> interesting sounds coming from within?",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 6,
    question: "Deeper in the forest, you encounter a mysterious stranger with a limp. They offer you a choice between two magical <br/> items. You don't know what it does but she promises you that they are both helpful. You can only pick one:",
    image: "images-w/q6.webp",
    "image-alt": "magical items",
    answers: {
      A: {
        text:  "​A glowing, crystal amulet",
        scores: ["CEXMB"]
      },
      B: {
        text: "A jar of pebbles with symbols on them",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 7,
    question: 'You encounter a lake, where the water sparkles with a thousand colors, and magical creatures swim playfully. A <br/> wise old turtle approaches you. The turtle speaks slowly and wisely, "Greetings, weary traveler. Would you like <br/> to swim with the magical creatures to refresh yourself, or sit with me and hear tales of ancient times?"',
    image: "images-w/q7.webp",
    "image-alt": "turtle",
    answers: {
      A: {
        text:  "Jump in and swim with <br/> the magical creatures?",
        scores: ["CEXMB"]
      },
      B: {
        text:  "Sit by the shore and talk <br/> to the wise old turtle?",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 8,
    question: "Suddenly, you hear a cry for help up ahead. You move towards the sound. There is a young elf with a shimmering green cloak who is stuck in a bush, and he is about to be attacked by a wild wolf with glowing red eyes. You want to help.",
    image: "images-w/q8.webp",
    "image-alt": "wolf",
    answers: {
      A: {
        text: "​You strategically charge at <br/> the wild wolf to try to stun it.",
        scores: ["CBRCAL"]
      },
      B: {
        text: "You simultaneously distract the wolf and help <br/> free the elf, and then run away with the elf.",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 9,
    question: "After saving the elf, you come to a clearing. In the middle of the clearing, you find an ancient magic <br/> book resting on a stone pedestal. The book's cover glows faintly, inviting you to open it. Do you:",
    image: "images-w/q9.webp",
    "image-alt": "book",
    answers: {
      A: {
        text: "Read a spell out loud <br/> to see what happens?",
        scores: ["CBRCAL"]
      },
      B: {
        text: "Study the book carefully <br/> to understand its secrets?",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 10,
    question: "As you explore further, you notice a floating island in the sky. It seems unreachable, but you feel a strong urge to get <br/> there. The sky begins to darken with storm clouds and the wind begins to pick up. How do you want to get there?",
    image: "images-w/q10.webp",
    "image-alt": "floating island",
    answers: {
      A: {
        text: "Choose a skinny dragon, who can get you there immediately for a cheap <br/> price, but cannot guarantee your safety because of the potential storm.",
        scores: ["CBRCAL"]
      },
      B: {
        text: "Choose a griffin, who can get you there tomorrow for twice the price of <br/> the dragon and will guarantee your safety even if there is a storm tomorrow.",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 11,
    question: 'After reaching the floating island, you find yourself in a meadow. You come across an ancient stone with an <br/> inscription carved into it. The inscription reads, "The greatest magic lies within those who dare to believe." Do you:',
    image: "images-w/q11.webp",
    "image-alt": "stone",
    answers: {
      A: {
        text: "Feel inspired and make a <br/> wish, believing in its power?",
        scores: ["CEXMB"]
      },
      B: {
        text: "Take a moment to reflect on the meaning of <br/> the words and how they apply to your journey?",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 12,
    question: "After making your wish or reflecting on the inscription, you continue your journey through the meadow. You <br/> come across a traveler who looks tired and lost. They ask for your help to find their way home. Do you:",
    image: "images-w/q12.webp",
    "image-alt": "traveler",
    answers: {
      A: {
        text: "Offer them your magical map <br/> to help them find their way?",
        scores: ["CEXMB"]
      },
      B: {
        text: "Decide to accompany them on their <br/> journey to ensure they get home safely?",
        scores: ["CBRCAL"]
      }
    }
  },
  {
    number: 13,
    question: "The traveler thanks you for your help. He suggests checking out a nearby town known for their artwork. <br/> You come across a beautiful piece of artwork painted on a wall that stands above the entrance to the <br/> town. It depicts a majestic scene of mythical creatures and enchanted landscapes. Do you:",
    image: "images-w/q13.webp",
    "image-alt": "artwork",
    answers: {
      A: {
        text: "Appreciate the art and <br/> marvel at its beauty?",
        scores: ["CEXMB"]
      },
      B: {
        text: "Make fun of the art and <br/> laugh at its odd details?",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 14,
    question: 'You enter the town and encounter two creatures, a hooded fairy and a stuttering dwarf. Both want to buy the magical item <br/> you found on your journey. The dwarf says, "I will use it to heal my sick brothers," but his eyes dart around suspiciously. <br/> The fairy says, "I need it for my collection of rare artifacts," but her face is covered up except for a sly grin. Do you:',
    image: "images-w/q14.webp",
    "image-alt": "creatures",
    answers: {
      A: {
        text: "Trust the stuttering dwarf <br/> and sell it to him?",
        scores: ["CBRCAL"]
      },
      B: {
        text: "Trust the hooded fairy <br/> and sell it to her?",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 15,
    question: "You pass by a narrow alley and something catches your eye. There is a <br/> mysterious key lying on the ground. It's heavy and feels important. Do you:",
    image: "images-w/q15.webp",
    "image-alt": "key",
    answers: {
      A: {
        text: "Try it in every lock you find <br/> to discover what it opens?",
        scores: ["CEXMB"]
      },
      B: {
        text: "Keep it safe until you <br/> find its rightful owner?",
        scores: ["CBRCAL"]
      }
    }
  },
  {
    number: 16,
    question: "After many adventures, you finally reach the end of your journey. You find yourself resting on a bench at a peaceful <br/> cliff overlooking the clear blue ocean. Nearby, you see a cozy eating establishment where the locals gather. Do you:",
    image: "images-w/q16.webp",
    "image-alt": "cliff",
    answers: {
      A: {
        text: "Go to the establishment to tell <br/> people about your adventures?",
        scores: ["CBRCAL"]
      },
      B: {
        text:  "Sit quietly on the bench and reflect <br/> on everything you've learned?",
        scores: ["WRCRS"]
      }
    }
  },
  {
    number: 17,
    question: "The glowing green orb suddenly reappears in front of you. You get sucked back into its portal.",
  },
  {
    number: 18,
    question: "You wake up in your room.",
    image: "images-w/q18.webp",
    "image-alt": "bed",
    answers: {
      A: {
        text: "That had to be a dream right? <br/> That was scary, but I'm so glad I'm back home.",
        scores: ["CBRCAL"]
      },
      B: {
        text: "That was the coolest adventure ever! <br/> I need to tell my friends about this!",
        scores: ["CEXMB"]
      }
    }
  },
]
