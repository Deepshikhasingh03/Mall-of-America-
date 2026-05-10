import { create } from "zustand";

export interface NavigationSection {
  id: string;
  label: string;
  path: string;
}

interface AppState {
  activeSection: string;
  isSidebarOpen: boolean;
  isLoaded: boolean;
  setActiveSection: (section: string) => void;
  toggleSidebar: () => void;
  setLoaded: (loaded: boolean) => void;
}

export const navigationSections: NavigationSection[] = [
  { id: "hero", label: "Home", path: "/" },
  { id: "why-moa", label: "Why MOA", path: "/why-moa" },
  { id: "retail", label: "Retail", path: "/retail" },
  { id: "luxury", label: "Luxury", path: "/luxury" },
  { id: "dining", label: "Dining", path: "/dining" },
  { id: "entertainment", label: "Entertainment", path: "/entertainment" },
  { id: "events", label: "Events", path: "/events" },
  { id: "venues", label: "Venues", path: "/venues" },
  { id: "demographics", label: "Demographics", path: "/demographics" },
  { id: "sponsorship", label: "Sponsorship", path: "/sponsorship" },
  { id: "leasing", label: "Leasing", path: "/leasing" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export const useAppStore = create<AppState>((set) => ({
  activeSection: "hero",
  isSidebarOpen: false,
  isLoaded: false,
  setActiveSection: (section) => set({ activeSection: section }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setLoaded: (loaded) => set({ isLoaded: loaded }),
}));
