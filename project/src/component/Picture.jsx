import Image from 'next/image';


export const Picture = ({ src, width, height, alt }) => {
    return (
        <Image src={src} width={width} height={height} alt={alt} />

    )
}