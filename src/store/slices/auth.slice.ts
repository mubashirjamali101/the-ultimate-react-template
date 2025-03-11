import { StateCreator } from 'zustand'
import { User } from '../../types/auth'

export interface AuthSlice {
  user: User | null
  accessToken: string | null
  setAuthUser: (user: User, accessToken: string) => void
  clearAuthUser: () => void
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  /**
   * Logged in user
   */
  user: null,

  /**
   * JWT Access Token
   */
  accessToken: null,

  /**
   * @description Set the authenticated user
   * @param user
   * @param accessToken
   */
  setAuthUser: (user, accessToken) => {
    set({
      user,
      accessToken,
    })
  },

  /**
   * @description Clear the authenticated user
   */
  clearAuthUser: () => {
    set({
      user: null,
      accessToken: null,
    })
  },
})
