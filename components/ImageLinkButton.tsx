import Link from 'next/link';
import Image from 'next/image';

type ImageLinkButtonProps = {
    href: string;
    src: string;
    alt: string;
};

const ImageLinkButton: React.FC<ImageLinkButtonProps> = ({ href, src, alt }) => {
    return (
        <Link href={href} target="_blank" passHref className={`inline-block justify-center items-center`}>
            <Image src={src} alt={alt} width={30} height={30} />
        </Link>
    );
};

export default ImageLinkButton;