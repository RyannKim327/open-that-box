import TiltedCard from '@/components/animations/tiltedCard';


export default function Team() {
    return (
        <div className='flex h-screen w-screen overflow-hidden items-center justify-center flex-col border'>
            <h2 className='font-bold text-7xl'>Built By</h2>
            <div className='flex h-[60vh] w-screen overflow-hidden items-center justify-center gap-16'>
                
                <TiltedCard
                    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Rogemson Molina"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text bg-black/50 text-white p-2 rounded-lg">
                            Jemson
                        </p>
                    }
                />
                <TiltedCard
                    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Ryann Kim Sesgundo"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text bg-black/50 text-white p-2 rounded-lg">
                            Ryann
                        </p>
                    }
                />
                <TiltedCard
                    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Rogemson Molina"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                        <p className="tilted-card-demo-text bg-black/50 text-white p-2 rounded-lg">
                            Khian
                        </p>
                    }
                />
            </div>
        </div>
    )
}