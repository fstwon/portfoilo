import { ReactComponent as TextLogo } from "./text_logo.svg";

interface TProps {
  className: string;
}

export function SoTextLogo({ className }:TProps) {
  return (
    <TextLogo className={className} />
  )
};