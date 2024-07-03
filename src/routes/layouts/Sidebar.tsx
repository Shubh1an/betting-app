import Button from "../../customComponents/Button/Button";
import bgImg from '../../assets/images/OrgBG1.png'
import profile from '../../assets/images/ProfileBG.png'
type Props = {
    isOpen: Boolean;
    clickFunction: Function;
}
const Sidebar = ({ isOpen, clickFunction }: Props) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''} w-full flex bg-transparent ease-in-out duration-300 fixed md:static top-0 bottom-0 left-0 z-40 ml-0`}>
            <div className="bg-white w-[250px] h-screen flex flex-col justify-between">
                <div>
                    <div className="p-2 flex">
                        <div className="image-container">
                            <img className="rounded-full overlay" src={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'}  alt="Overlay Image" />
                            <img src={profile} alt="Base Image" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <a className="flex gap-1 [&amp;>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-black" href="#">
                            <div>Dashboard</div>
                        </a>
                        <a className="flex gap-1 [&amp;>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-black" href="#">
                            <div>Wallet</div>
                        </a>
                    </div>
                </div>
                <div>
                    <Button title="Logout"
                        backgroundColor="black"
                        color="white"
                        className="w-full mx-3"
                    />
                    <label className="font-medium text-sm flex items-center justify-center">Verson:-0.0.1</label>
                </div>
            </div>
            <div className="w-9/12" onClick={() => clickFunction(false)}></div>
        </div>
    )
}

export default Sidebar
