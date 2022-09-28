import { Text } from '../';

interface CardProps {
    children?: any;
    color: string;
    shadow?: string;
    title: string;
    desc: string;
    marginXl?: number;
  }
  
  export const CardSimple: React.FC<CardProps> = ({
    color,
    title,
    desc,
    marginXl,
    shadow,
    children,
  }: CardProps): JSX.Element => {
    return (
        <div className={`md:mx-2 lg:mx-3 xl:mx-${marginXl} px-2 lg:px-5 xl:px-10 py-14 rounded-sm flex flex-col items-center text-center hover:bg-slate-50 cursor-pointer shadow-xl`}
            style={{ backgroundColor: '#fbfbfb'}}
        >
            <span className={`p-5 rounded-full text-white shadow-lg ${shadow} ${color}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </span>
            <Text
                color="#2c3d84"
                align="text-left"
                size="1.055rem"
                weight={600}
                cssClass="mt-8"
            >
                {title}
            </Text>
            <Text
                color="#0F3460"
                align="text-center"
                size="0.95rem"
                weight={400}
                cssClass="mt-4 mb-4"
            >
                {desc}
            </Text>
        </div>
    );
};