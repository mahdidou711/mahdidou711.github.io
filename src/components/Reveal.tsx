import { type ReactNode, type CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, delay = 0, className, as = "div" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-revealed={inView ? "true" : "false"}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
