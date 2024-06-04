import NextImage, {ImageProps} from 'next/image';

//TODO: Implement placeholder image/fallback
export default function Image(props: ImageProps) {
    return <NextImage {...props}/>
}