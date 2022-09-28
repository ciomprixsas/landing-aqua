import { Text } from '../';

interface CardProps {
    cover?: string;
    title: string;
    desc: string;
  }
  
  export const CardCover: React.FC<CardProps> = ({
    title,
    desc,
    cover,
  }: CardProps): JSX.Element => {
    return (
        <div className={`md:mx-2 lg:mx-3 px-2 lg:px-5 pb-4 rounded-sm mt-2 flex flex-col justify-end text-center md:text-left hover:opacity-90 bg-cover cursor-pointer shadow-xl bg-slate-200`}
            style={{ height: '22rem', backgroundImage: `url('${cover}')` }}
        >
            <Text
                color="#FFF"
                align="text-left"
                size="1.055rem"
                weight={600}
                cssClass="w-full mt-8"
            >
                {title}
            </Text>
            <Text
                color="#FFF"
                align="text-left"
                size="0.95rem"
                weight={400}
                cssClass="mt-4 mb-4"
            >
                {desc}
            </Text>
        </div>
    );
};