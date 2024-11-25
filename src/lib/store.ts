import { create } from 'zustand';

type Screen = 'welcome' | 'signup' | 'home' | 'winery' | 'wine';

interface AppState {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
  user: {
    name?: string;
    email?: string;
    preferences?: string[];
  };
  setUser: (user: Partial<AppState['user']>) => void;
}

export const useStore = create<AppState>((set) => ({
  currentScreen: 'welcome',
  setScreen: (screen) => set({ currentScreen: screen }),
  user: {},
  setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
}));