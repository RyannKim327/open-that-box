export default function Challenges() {
  return (
    <div
      id="challenges"
      className="challenges flex flex-col items-center justify-center min-h-fit w-full overflow-x-hidden px-4 py-16 text-white bg-black"
    >
      <div className="text-center mb-12 max-w-4xl pt-40">
        <h1 className="text-4xl font-bold mb-4">Challenges</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore our exciting challenges designed to test your skills and creativity.
          Join the community and start solving today!
        </p>
      </div>

      <div className="container w-full space-y-1">
        <div className="p-6 transition-shadow duration-300">
          <div className="relative overflow-hidden rounded-xl border">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Featured Challenge - Web Development" 
              className="w-full h-64 object-cover block"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Featured Challenge: Full-Stack Web Development</h3>
              <p className="text-gray-200 text-sm max-w-4xl">Build a complete web application from scratch using modern frameworks and tools.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Algorithm Challenge" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-sm font-semibold mb-2">Algorithm Challenge</h3>
            <p className="text-gray-600">Solve complex algorithmic problems and optimize your solutions.</p>
          </div>
          
          <div className="p-6">
            <img 
              src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Data Science Challenge" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-sm font-semibold mb-2">Data Science</h3>
            <p className="text-gray-600">Analyze datasets and create meaningful insights from data.</p>
          </div>
          
          <div className="p-6">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Mobile Development Challenge" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-sm font-semibold mb-2">Mobile Development</h3>
            <p className="text-gray-600">Create native and cross-platform mobile applications.</p>
          </div>
        </div>
      </div>
    </div>
  )
}