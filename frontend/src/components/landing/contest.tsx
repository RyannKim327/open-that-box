import CardSwap, { Card } from '../animations/cardSwap';

export default function Contest() {
  return (
    <div className='flex h-fit w-screen overflow-hidden items-center justify-center'>
        <div className='container border relative h-[600px] flex flex-col lg:flex-row items-center justify-center lg:justify-start overflow-hidden p-8 sm:p-16 lg:p-28 rounded-4xl gap-8 lg:gap-0'>
            <div className='flex-shrink-0 z-10 text-center lg:text-left lg:pr-8'>
                <h2 className='font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-tight'>
                    Card stacks have never looked so good
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
                        <p className='text-white border-b p-4'>Hello!</p>
                        <img 
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                            alt="Featured Challenge - Web Development" 
                            className="w-full h-full object-cover block"
                        />
                    </Card>
                    <Card>
                        <h3>Card 2</h3>
                        <p>Your content here</p>
                    </Card>
                    <Card>
                        <h3>Card 3</h3>
                        <p>Your content here</p>
                    </Card>
                </CardSwap>
            </div>
        </div>
    </div>
  );
}