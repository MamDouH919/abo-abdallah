import Image from "next/image"
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const ImageStyle = ({ src, alt }: { src: string | StaticImport, alt: string }) => {
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Image
            loading='lazy'
            alt={alt}
            src={src}
            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    </div>
}