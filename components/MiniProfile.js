function MiniProfile() {
    return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img className="rounded-full border p-[2px] w-16 h-16"
      src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1242&q=80" alt="" />
      <div className=" flex-1 mx-4">
        <h2 className="font-bold">Ritik</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram!</h3>
      </div>
      <button className="text-blue-400 text-sm font-semibold">Sign Out!</button>
    </div>
  );
}

export default MiniProfile;
