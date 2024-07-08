import { useSelector } from "react-redux";
import { BackIcon, Wallet } from "../../assets/svg/Svg";
type Prop = {
  title?: string;
  isWallet?: Boolean;
};
export const GameHeader = ({ title = "home", isWallet = true }: Prop) => {
  const {walletBalance} = useSelector((s:any) => s.common);
//   useEffect(() => {
//     socket.on('walletChange', data => {
//       dispatch(setWalletBalance(data));
//     });
//   }, []);
  return (
    <div className="flex justify-between items-center px-3 py-2 border-b border-slate-600">
      <BackIcon color="#E88246" />
      <label className="font-bold text-xl text-[#E88246]">{title}</label>
      {isWallet && (
        <div className="flex flex-col">
          <Wallet color="#E88246" />
          {'₹'+(walletBalance?.amount || 0)}
        </div>
      )}
    </div>
  );
};
