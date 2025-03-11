import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { AuthSlice, createAuthSlice } from './slices/auth.slice'

/**
 * App State Type (combined zustand slices)
 */
export type AppState = AuthSlice

export const useStore = create<
  AppState,
  [['zustand/devtools', never], ['zustand/persist', AppState]]
>(
  devtools(
    persist(
      (...params) => ({
        ...createAuthSlice(...params),
      }),
      {
        name: 'app-state',
      }
    )
  )
)

/**
 * SetState type for Zustand store.
 */
export interface SetState {
  (
    partial:
      | AppState
      | Partial<AppState>
      | ((state: AppState) => AppState | Partial<AppState>),
    replace?: false
  ): void
  (state: AppState | ((state: AppState) => AppState), replace: true): void
}
