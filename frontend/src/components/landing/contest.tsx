import CardSwap, { Card } from '../animations/cardSwap';

export default function Contest() {
  return (
    <div className='flex h-[80vh] w-screen overflow-hidden items-center justify-center bg-black'>
        <div className='container relative h-[600px] flex flex-col lg:flex-row items-center justify-center lg:justify-start overflow-hidden p-8 sm:p-16 lg:p-28 rounded-4xl gap-8 lg:gap-0 border'>
            <div className='flex-shrink-0 z-10 text-center lg:text-left lg:pr-8 text-white'>
                <h2 className='font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-tight'>
                    Contests that you should not miss!
                </h2>
                <p className='mt-4 text-lg sm:text-xl lg:text-2xl font-medium'>
                    Just look at it go!
                </p>
            </div>
            <div className='flex-1 flex justify-center lg:justify-end items-center min-h-0'>
                <CardSwap
                    cardDistance={30}
                    verticalDistance={70}
                    delay={5000}
                    pauseOnHover={false}
                >
                    <Card>
                        <h3>Card 1</h3>
                        <p className='text-white border-b pl-7 pb-4 font-bold'>Leaderboard</p>
                        <img 
                            src="https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg" 
                            alt="Featured Challenge - Web Development" 
                            className="w-full h-full object-cover block m-6 rounded-2xl"
                        />
                    </Card>
                    <Card>
                        <h3>Card 2</h3>
                        <p className='text-white border-b pl-7 pb-4 font-bold'>Prizes</p>
                        <img 
                            src="https://images.unsplash.com/photo-1650240852447-46505dba4726?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Featured Challenge - Web Development" 
                            className="w-full h-full object-cover block m-6 rounded-2xl"
                        />
                    </Card>
                    <Card>
                        <h3>Card 3</h3>
                        <p className='text-white border-b pl-7 pb-4 font-bold'>Connection</p>
                        <img 
                            src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg" 
                            alt="Featured Challenge - Web Development" 
                            className="w-full h-full object-cover block m-6 rounded-2xl"
                        />
                    </Card>
                </CardSwap>
            </div>
        </div>
    </div>
  );
}