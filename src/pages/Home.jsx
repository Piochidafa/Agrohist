import { Image } from "primereact/image";
import Logo from "../assets/Images/agrohistLogo.svg";
import Nome from "../assets/Images/agrohistName.svg";

const Home = () => {
    return (
        <>
            <div className="flex m-auto">
                <div className="align-items-start">
                    <Image src={Logo} alt="Image" width="150" />
                </div>
                <div className="align-items-end">
                    <Image src={Nome} alt="Image" width="500" />
                </div>
            </div>

            
        </>
    )
}
export default Home