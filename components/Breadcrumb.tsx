import Link from "next/link";
import { ChevronsRight, House } from "lucide-react";

const Breadcrumb = ({ current, parent }: { current: string; parent?: { label: string; href: string } }) => {
  return (
    <nav className="flex items-center whitespace-nowrap text-sm leading-5 text-subtle">
      <Link href="/" className="flex items-center gap-1.5 hover:text-brand">
        <House className="size-4" />
        Homepage
      </Link>
      <ChevronsRight className="mx-2.5 size-3.5 shrink-0 sm:mx-4" />
      {parent && (
        <>
          <Link href={parent.href} className="hover:text-brand">
            {parent.label}
          </Link>
          <ChevronsRight className="mx-2.5 size-3.5 shrink-0 sm:mx-4" />
        </>
      )}
      <span className="text-brand">{current}</span>
    </nav>
  );
};

export default Breadcrumb;
