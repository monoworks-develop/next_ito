import Link, { LinkProps } from 'next/link'
import clsx from 'clsx';

interface MyLinkProps extends LinkProps {
  className?: any;
  children?: string;
  title?: string;
}

export default function MyLink({className, children, ...props}: MyLinkProps) {
  return (
    <Link className={clsx(className)} {...props}>
      {children}
    </Link>
  )
}