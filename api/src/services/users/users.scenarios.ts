import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        id: 'String',
        email: 'String6781940',
        updatedAt: '2023-04-10T16:44:46.903Z',
      },
    },
    two: {
      data: {
        id: 'String',
        email: 'String6804910',
        updatedAt: '2023-04-10T16:44:46.903Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
