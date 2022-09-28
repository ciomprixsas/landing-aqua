import { Text } from '../';

interface CardProps {
    icon: string;
    title: string;
    desc: string;
  }
  
  export const CardIcon: React.FC<CardProps> = ({
    title,
    desc,
    icon,
  }: CardProps): JSX.Element => {
    return (
        <div className={`md:mx-2 lg:mx-3 xl:mx-8 px-2 lg:px-5 xl:px-2 py-4 lg:py-14 rounded-sm flex flex-col items-center text-center shadow-xl`}>
            <img className="max-h-32 lg:max-h-32 xl:max-h-36" src={icon}></img>
            <Text
                color="#FFF"
                align="text-left"
                size="1.055rem"
                weight={600}
                cssClass="mt-4"
            >
                {title}
            </Text>
            <Text
                color="#FFF"
                align="text-center"
                size="0.95rem"
                weight={400}
                cssClass="mt-4 mb-4"
            >
                {desc}
            </Text>
        </div>
    )
}