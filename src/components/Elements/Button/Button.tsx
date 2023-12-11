'use client'

import dynamic from 'next/dynamic'
import clsx from "clsx";

interface ButtonProps {
  className?: any;
  children?: any;
  onClick?: () => void;
  title?: string;
}

export default function MyButton(props: ButtonProps){
  return (
    <button className={clsx(props.className)} onClick={props.onClick}>{props.children}</button>
  )
}