import { Image } from "primereact/image";
import { Button } from 'primereact/button'
import Logo from "../assets/Images/Logo.png";
import Nome from "../assets/Images/agrohistName.svg";

const Home = () => {
	return (
		<>
			<div className="flex w-full">

                

				<div about="NAVBAR" className="flex w-full justify-content-between ">
					<div className=" h-6rem ">
						<div className="flex m-auto mt-3 ml-4 ">
							<div className="align-items-start ">
								<Image src={Logo} alt="Image" width="50" />
							</div>
							<div className="align-items-end">
								<Image src={Nome} alt="Image" width="166" />
							</div>
						</div>
					</div>
                    <div className=" mt-3 mr-3 gap-1">

                    <Button label="Entrar" severity="success" text raised className="mr-3"/>
                    <Button label="Cadastra" severity="success" />

                    </div>
                
                </div>





			</div>
		</>
	);
};
export default Home;
