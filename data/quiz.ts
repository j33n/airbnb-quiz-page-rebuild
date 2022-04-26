import { QuizType } from "types"

const Quiz: QuizType = [
  {
    id: 1,
    title:
      "How big will your family be in five yars?",
    assetId: 1,
    answers: [
      {
        id: 1,
        description: 'When you decide to go somewhere together you use a minibus',
      },
      {
        id: 2,
        description: "Me, my partner, and our puppy",
      },
      {
        id: 3,
        description:
          "I'm not sure yet",
      },
      {
        id: 4,
        description: 'A very small family',
      },
      {
        id: 5,
        description: "My own family and my extended family",
      },
    ],
  },
  {
    id: 2,
    title: "It's movie night, what movie would you choose?",
    assetId: 2,
    answers: [
      {
        id: 1,
        description: 'A comedy',
      },
      {
        id: 2,
        description: 'An action movie',
      },
      {
        id: 3,
        description: 'A documentary',
      },
      {
        id: 4,
        description: 'A historical drama',
      },
      {
        id: 5,
        description: 'A musical',
      },
    ],
  },
  {
    id: 3,
    title: 'What do you do first thing when you wake up?',
    assetId: 3,
    answers: [
      {
        id: 1,
        description: 'A cold or hot shower',
      },
      {
        id: 2,
        description: 'Make breakfast',
      },
      {
        id: 3,
        description: 'Workout or go for a run',
      },
      {
        id: 4,
        description: 'Meditate, Pray or listen to music',
      },
      {
        id: 5,
        description: 'Straight to the home office',
      },
    ],
  },
  {
    id: 4,
    title: 'What does your ideal neighbourhood look like?',
    assetId: 4,
    answers: [
      {
        id: 1,
        description: 'Located in coastal and sunbelt cities, where homes are mostly small apartments and condos',
      },
      {
        id: 2,
        description: 'Located miles from the city and consisting of custom-built homes with plenty of room to grow',
      },
      {
        id: 3,
        description: 'Located in the suburbs and new areas',
      },
      {
        id: 4,
        description: 'Located near downtowns and suburbs, the houses are mostly fixer-uppers and apartment buildings',
      },
      {
        id: 5,
        description: 'Located near business hubs, though not the city’s main downtown',
      },
    ],
  }
]

export default Quiz
