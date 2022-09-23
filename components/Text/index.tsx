interface TextProps {
    children: any;
    color: string;
    size: string;
    align: string;
    weight?: number;
    cssClass?: string;
  }
  
  export const Text: React.FC<TextProps> = ({
    color,
    size,
    align,
    weight,
    cssClass,
    children,
  }: TextProps): JSX.Element => {
    return (
      <p
        className={`tracking-normal leading-5 ${align} ${cssClass}`}
        style={{ color, fontSize: size, fontWeight: weight }}
      >
        {children}
      </p>
    );
  };