import type { CSSProperties } from "react";

// - Component
const style = {
  container: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--color-bg-body)",
    padding: "2rem",
    boxShadow: "var(--shadow-button)",
    border: "solid",
    borderWidth: "var(--size-border-width)",
    borderRadius: "var(--size-border-radius)",
    borderColor: "var(--color-bg-border)",
  },
  text: {
    padding: "0px",
    margin: "0px",
  },
} as {
  container: CSSProperties;
  text: CSSProperties;
};

export const MovedDiscloser = () => (
  <div style={style.container}>
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24">
      <path
        fill-rule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
        clip-rule="evenodd"
      />
    </svg>
    <p style={style.text}>
      I moved to: <a href="https://breakzero.io">breakziro.io</a>
    </p>
  </div>
);

// - Exports
export default MovedDiscloser;
