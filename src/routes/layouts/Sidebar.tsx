import Button from "../../customComponents/Button/Button"

const Sidebar = () => {
    return (
        <div className="bg-white w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40 ml-0 flex flex-col justify-between">
            <div>
                <div className="p-2 flex">
                    <a href="/">
                        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="Company Logo" width="300" height="300" />
                    </a>
                </div>
                <div className="flex flex-col">
                    <a className="flex gap-1 [&amp;>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-black" href="/">
                        <div>Dashboard</div>
                    </a>
                    <a className="flex gap-1 [&amp;>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 text-black" href="/">
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
    )
}

export default Sidebar
