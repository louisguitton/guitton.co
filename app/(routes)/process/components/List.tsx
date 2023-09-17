import clsx from "clsx";
import { Border } from "./Border";

export function List({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <ul role="list" className={clsx("text-base text-neutral-600", className)}>
        {children}
      </ul>
    </div>
  );
}

export function ListItem({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <li className="group mt-10 first:mt-0">
      <div>
        <Border className="pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
          {title && (
            <strong className="font-semibold text-neutral-950">{`${title}. `}</strong>
          )}
          {children}
        </Border>
      </div>
    </li>
  );
}
