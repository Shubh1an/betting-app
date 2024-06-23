import Lottie from "lottie-react";
import LoadingJSON from '../../assets/Loading.json';

const Loader = () => {
    return (
        <div className="absolute flex justify-center items-center bg-[#0000009a] z-[10000] w-full h-full">
            <Lottie
                autoPlay
                loop
                animationData={LoadingJSON}
            />
        </div>
    )
}

export default Loader
