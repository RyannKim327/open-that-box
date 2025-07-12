import TiltedCard from '@/components/animations/tiltedCard';

export default function Team() {
    return (
        <div className='flex min-h-[70vh] w-full overflow-hidden items-center justify-center flex-col py-8 px-4 sm:py-12 lg:py-16 text-white bg-black'>
            <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 sm:mb-12 text-center'>Built By</h2>
            <div className='flex flex-col min-h-[50vh] w-full overflow-hidden items-center justify-center gap-8 sm:gap-12 md:gap-16 sm:flex-row'>
                
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
                        <p className="tilted-card-demo-text bg-black/50 text-white p-2 rounded-lg text-sm sm:text-base">
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
                        <p className="tilted-card-demo-text bg-black/50 text-white p-2 rounded-lg text-sm sm:text-base">
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
                        <p className="tilted-card-demo-text bg-black/50 text-white p-2 rounded-lg text-sm sm:text-base">
                            Khian
                        </p>
                    }
                />
            </div>
        </div>
    )
}