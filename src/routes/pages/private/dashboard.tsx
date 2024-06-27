import { useNavigate } from "react-router-dom";

type Props = {
  isAuth: boolean;
  title: string;
};

const Dashboard = ({ title }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-between items-center">
        <div style={{ flexDirection: "row", alignItems: "center" }}>
          <div
            onClick={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          >
            <Entypo name="menu" size={34} color={COLORS.Orange} />
          </div>
          {title && <p className="">{`${title}`}</p>}
        </div>
        <div style={{ flexDirection: "row" }}>
          <div
            onClick={() => {
              navigate("NotificationScreen");
            }}
          >
            <NotificationIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
