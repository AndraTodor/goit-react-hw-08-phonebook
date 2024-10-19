const HomePage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center p-10 bg-white bg-opacity-90 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-text mb-6">
          Welcome to Your Phonebook!
        </h1>
        <p className="text-xl font-medium text-gray-700 tracking-wide animate-fade-in">
          Please log in or register to access your contacts.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
