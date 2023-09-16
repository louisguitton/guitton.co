import clsx from "clsx";
import { Container } from "./Container";

export function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <Container className={clsx("mt-12", centered && "text-center")}>
      <h1>
        <span className="block font-display text-base font-semibold text-primary">
          {eyebrow}
        </span>
        <span className="sr-only"> - </span>
        <span
          className={clsx(
            "mt-6 block max-w-5xl font-display text-5xl text-neutral-950 [text-wrap:balance] sm:text-6xl",
            "font-extrabold tracking-tight",
            centered && "mx-auto"
          )}
        >
          {title}
        </span>
      </h1>
      <div
        className={clsx(
          "mt-6 max-w-3xl text-xl text-neutral-600",
          centered && "mx-auto"
        )}
      >
        {children}
      </div>
    </Container>
  );
}
