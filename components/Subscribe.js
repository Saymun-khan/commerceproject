
const Subscribe = () => {
  return (
    <div className="bg-red-300 p-10">
        <div className="grid grid-cols-2 p-10 mb-6 bg-white max-sm:grid-cols-1">
        <div>
            <h1 className="text-5xl font-bold mt-6">Subscribe for <br></br>Latest Trends And Offers</h1>
        </div>
        <div className="w-96 max-sm:w-64 max-sm:m-10 p-2 h-14 border-2 border-black mt-16 ml-10 max-sm:-ml-6">
            <input className="outline-none" placeholder="Enter your email" />
            <button className="w-28 h-10 font-semibold justify-end ml-16 bg-black text-white p-2 max-sm:block max-sm:mt-10">Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default Subscribe