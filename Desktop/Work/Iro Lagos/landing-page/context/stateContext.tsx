"use client";
import useMousePosition from "@/utils/useMousePosition";
import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Step 2: Create a CursorProvider component to manage the cart state
interface CursorProviderProps {
  children: ReactNode;
}

interface CursorContextType {
  cursorVariant: string;
  setCursorVariant: Dispatch<SetStateAction<string>>;
  y: number;
  x: number;
}

export const CursorContext = createContext<CursorContextType | undefined>(
  undefined
);

export function CursorProvider({ children }: CursorProviderProps) {
  const [cursorVariant, setCursorVariant] = useState("default");

  const { x, y } = useMousePosition();

  return (
    <CursorContext.Provider
      value={{
        x: x,
        y: y,
        cursorVariant,
        setCursorVariant,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}
