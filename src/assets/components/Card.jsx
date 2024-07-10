

const Card = ({Imagecard, Message}) => {

    return(
        <div className="ml-5 my-5 ">
            <div className="w-10 flex flex-column gap-3 align-items-center border-round-2xl justify-space-between " style={{
                    backgroundColor:"#259074a2"
                }}>
                    <img src={Imagecard} className=" w-7 mx-5 mt-1 "/>
                    <span className="mx-4 mb-4 mt-3 font-semibold " style={{

                        color:'white'

                    }}>{Message}</span>

            </div>
        
        </div>

    )

}
export default Card;