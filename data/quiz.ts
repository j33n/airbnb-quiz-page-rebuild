import { QuizType } from "types"

// TODO: Enhance data to match buildappeal
const Quiz: QuizType = [
  {
    id: 1,
    title:
      "You're headed to the airport for an early morning flight. What are you wearing?",
    assetId: 1,
    answers: [
      {
        id: 1,
        description: 'Sweat pants. Duh.',
      },
      {
        id: 2,
        description: "Security lines be damned, I'm rocking boots.",
      },
      {
        id: 3,
        description:
          "Workout clothes, just in case there's a yoga room somewhere.",
      },
      {
        id: 4,
        description: 'Same outfit I was wearing last night. Oops.',
      },
      {
        id: 5,
        description: "Who cares, as long as it's comfortable.",
      },
    ],
  },
  {
    id: 2,
    title: 'Settling in for a long flight, what movie would you choose?',
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
    title: 'Which best describes your perfect first date?',
    assetId: 3,
    answers: [
      {
        id: 1,
        description: 'A 5-course dinner',
      },
      {
        id: 2,
        description: 'Hiking and smoothies',
      },
      {
        id: 3,
        description: 'Cocktails and dancing',
      },
      {
        id: 4,
        description: 'Catching a movie',
      },
      {
        id: 5,
        description: 'Browsing an art show',
      },
    ],
  },
]

export default Quiz
