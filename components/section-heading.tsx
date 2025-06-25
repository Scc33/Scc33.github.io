import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  id?: string;
};

export default function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center" id={id}>
      {children}
    </h2>
  );
}
