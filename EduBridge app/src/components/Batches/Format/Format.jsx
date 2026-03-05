
export default function Format({
    Image,
    Title,
    ActualPrice,
    DiscountedPrice,
    Description

}){

return(
    <div className="bg-gray-100 h-120 w-90 rounded-2xl hover:shadow-2xl transition-all duration-300 ease-in-out">
        <img 
        className="w-full h-80 rounded-t-2xl font-serif"
        src={Image} alt="" />

        <p className=" p-2 font-bold text-2xl text-slate-700"> {Title}</p>
        <div className="flex italic text-2xl p-2 text-center"> Price :  
            <p className=" font-bold line-through text-sm pl-3 text-center"> {ActualPrice}</p>
            <p className=" font-bold text-lg pl-3"> {DiscountedPrice}</p>
        </div>
        <p className=" p-2 italic overflow-auto"> {Description} OFF</p>
       
        
    </div>
)
}