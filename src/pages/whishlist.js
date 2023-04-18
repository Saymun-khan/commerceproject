import WhishlistCard from "../../components/WhishlistCard"

const whishlist = () => {
  return (
    <div>
                <div className="text-center p-10 mt-16 mb-6">
                    <h1 className="text-6xl font-bold">My Wishlist</h1>
                    <h1 className="font-light uppercase p-6">Home - whishlist</h1>
                </div>
                <div>
                    <WhishlistCard />
                </div>
    </div>
  )
}

export default whishlist