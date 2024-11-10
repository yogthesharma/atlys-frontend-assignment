
export interface TypographyComponentProps {
  children: string;
  Component?: JSX.Element['type']
  className?: string
}

export const Typography = (props: TypographyComponentProps) => {
  const { children, Component = "p", className } = props;
  return <Component className={className}>{children}</Component>;
};
