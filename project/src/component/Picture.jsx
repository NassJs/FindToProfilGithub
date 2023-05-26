import Image from 'next/image';



export const Picture = ({ children, src, width, height, }) => {
    <Image src={src} width={width} height={height}>
        {children}
    </Image>
}