import CardSwap, { Card } from '../animations/cardSwap';


export default function Contest() {
  return (
    <div className='flex h-screen w-screen overflow-hidden items-center justify-center'>
        <div className='container relative h-[600px] flex items-center justify-start border overflow-hidden p-28 rounded-4xl'>
            <div>
                <h2 className='font-bold text-5xl max-w-3xl'>Card stacks have never looked so good</h2>
                <p className='mt-4 text-2xl font-medium'>Just look at it go!</p>
            </div>
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
    );
}