import Format from "./Format/Format";

export default function Batches() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-10">
            <Format Image={"https:images.unsplash.com/photo-1588239034647-25783cbfcfc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amF2YXxlbnwwfHwwfHx8MA%3D%3D"} Title={"DSA with JAVA"} ActualPrice={5000} DiscountedPrice={4000} Description={"Get 20% off on all items!"}/>
            <Format Image={"https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkVBQ1R8ZW58MHx8MHx8fDA%3D"} Title={"React Series"} ActualPrice={2000} DiscountedPrice={1600} Description={"Get 20% off on all items!"}/>
            <Format Image={"https://media.istockphoto.com/id/1131109259/photo/java-programming-concept-virtual-machine-on-server-room-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=gGO8Pykgvid06WR97Ln2-DArKIokdUaK_rtS1f3ENj0="} Title={"Java full-stack"} ActualPrice={7000} DiscountedPrice={5250} Description={"Get 25% off on all items!"}/>
            <Format Image={"https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"} Title={"MERN"} ActualPrice={6000} DiscountedPrice={5400} Description={"Get 10% off on all items!"}/>
        </div>
    )
}
