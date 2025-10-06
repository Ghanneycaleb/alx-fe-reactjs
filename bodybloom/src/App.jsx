function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold"> BodyBloom</h1>
          <p className="text-blue-100 mt-1">Your Fitness Journey Starts Here</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to BodyBloom! 
          </h2>
          <p className="text-gray-600">
            This is your fitness tracking companion. We're just getting started!
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-600"> Log Workouts</h3>
              <p className="text-sm text-gray-600 mt-2">Track your exercises and progress</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-600"> View Progress</h3>
              <p className="text-sm text-gray-600 mt-2">See your fitness journey</p>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-orange-600"> Get Motivated</h3>
              <p className="text-sm text-gray-600 mt-2">Quotes and music suggestions</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;