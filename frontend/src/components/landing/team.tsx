import TiltedCard from '@/components/animations/tiltedCard';
import Beams from '../animations/beam';

export default function Team() {
    return (
        <div className='flex min-h-[70vh] w-full overflow-hidden items-center justify-center flex-col py-8 px-4 sm:py-12 lg:py-16 relative'>
            <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 sm:mb-8 text-center z-20 mix-blend-difference text-white'>Built by</h2>
            <div className="absolute inset-0 z-0">
            <Beams
                beamWidth={2}
                beamHeight={15}
                beamNumber={12}
                lightColor="#ffffff"
                speed={2}
                noiseIntensity={1.75}
                scale={0.2}
                rotation={0}
            />
            </div>
            <div className='flex flex-col min-h-[50vh] w-full overflow-hidden items-center justify-center gap-8 sm:gap-12 md:gap-16 sm:flex-row'>
                
                <TiltedCard
                    imageSrc="https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-1/515263779_2802382743297420_2667865322298145280_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG6ItoVy16qfXMgX69ko5dlAvu-wHYtN40C-77Adi03jR81gVaSvyLeeDcftp5hAVLrnTMpLEurG2-yi2jMTpwM&_nc_ohc=1a-zHexBunsQ7kNvwEZBf0h&_nc_oc=Adk6XhMpT3msVdzmJkwhRCElMEsTNPwcu94v-9hrNPgCaAMcOt-lYXFhKiYux0rw3H4&_nc_zt=24&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=JJGtfbxi2v3vqjmV9UZ5Eg&oh=00_AfTRw2ViHf_7bti8Eq5j9VPoyXivyCYmBY1UWIlhKgU_-w&oe=6878CC07"
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
                    imageSrc="https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-1/497564151_682161591183795_5057839578905328837_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHJCa7fFNLViCWaF_5tcbbGxbMwy34o_QjFszDLfij9CNzx_hQeUZqLLXJ1YZPnwWqFYj9sX6wGiSCIUSjn3TJJ&_nc_ohc=0YdFLYlXxBsQ7kNvwEytUd3&_nc_oc=AdmMEesvEQHCU5LQ-Jy_vAGDzpAPP5nVz7FhFtgwu2llVeEkniRQRpWjoCd0cOegNh0&_nc_zt=24&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=e3SwOcIzFxZbWjXPMN9k-g&oh=00_AfREtTomnniYdovrllDUJTyhvHnHcocs9xZCTqo6OyG5yQ&oe=6878B4ED"
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
                    imageSrc="https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/466552625_8467222076732861_4906760345873461156_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeELjk3tOjNAbVTdcWUKMARUhcrynz_TwiSFyvKfP9PCJAyGFTBQLd56Pz4r5JyoHx1zpEF86WEXICmAQxUTEOdv&_nc_ohc=qexU-jtIkVoQ7kNvwECy94D&_nc_oc=Adml9G3p9LwgY9EBcQQZcZlKGO9n1lyvhDY6-Cxn46BeCn-QyyTOMgQg43aIOXId1yM&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=hHicp6ojD_EOsMZSk-SC2g&oh=00_AfSO7niOrrz60lQOXIQzylnxoT-27F5oL7v14CCASxQIhg&oe=6878CBA8"
                    altText="Kendrick Lamar - GNX Album Cover"
                    captionText="Khian DelaPena Calderon"
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