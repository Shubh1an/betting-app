import { useEffect, useState } from "react";
import { CountDownCard } from "../../../../customComponents/count-down-card/CountDownCard";
import { GameHeader } from "../../../../customComponents/game-header/GameHeader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../hooks/hooks";
import { COLORS } from "../../../../shared/constants";
import { setActiveColorRoom } from "../../../../services/redux/commonSlice";
import instance from "../../../../services/interceptor";
import { getMyWinGoHistory, getWinGoHistory } from "../../../../services/api service/CommonService";

export const ColorGame = () => {
  const dispatch = useAppDispatch();
  const { activeColorRoom, wingoHistory, myWingoHistory } = useSelector(
    (s: any) => s.common
  );
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("color");
  const [selectedColor, setSelectedColor] = useState({
    color: "",
    name: "",
    value: "",
  });
  const [selectedNumber, setSelectedNumber] = useState({
    color: "",
    value: "",
  });
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState("all");
  const [currentDiff, setCurrentDiff] = useState("");
  const [allDisable, setAllDisable] = useState(false);
  let countDownTimer: number | undefined;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("api/room/getActiveRoom");
        joinRoom(data?.activeRoom?._id);
        dispatch(setActiveColorRoom(data?.activeRoom));
        getMyWinGoHistory();
        getWinGoHistory();
        listenRoom();
        listenOrder();
        RoomResult();
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    setAllDisable(false);
    clearInterval(countDownTimer);
    countDownTimer = setInterval(() => {
      if (activeColorRoom?.endTime) {
        getDiff();
      }
    }, 1000);
    return () => {
      clearInterval(countDownTimer);
    };
  }, [activeColorRoom]);

  const joinRoom = (roomId: any) => {
    // socket.emit("createNewParticipant", {
    //   roomId: roomId,
    // });
  };

  const listenRoom = () => {
    // socket.on("newRoom", (data: any) => {
    //   joinRoom(data?.data?._id);
    //   dispatch(setActiveColorRoom(data?.data));
    // });
  };

  const RoomResult = () => {
    // socket.on("resultOfRoom", (data: any) => {
    //   // console.log('result of Room ==> ', data);
    //   dispatch(updateWinGoHistory(data));
    // });
  };

  const listenOrder = () => {
    // socket.on("orderCreation", (data: any) => {
    //   if (data?.success) {
    //     // console.log(data?.data);
    //     dispatch(updateMyWinGoHistory(data?.data));
    //   } else {
    //     showError(data?.message);
    //   }
    // });
  };

  const onColorSelect = (color: any, name: any, value: any) => {
    setModalType("color");
    setSelectedColor({
      color: color,
      name: name,
      value: value,
    });
    setShowModal(true);
  };

  const onNumberSelect = (value: any) => {
    setModalType("number");
    setSelectedNumber({
      color: COLORS.Orange,
      value: value,
    });
    setShowModal(true);
  };

  const onCancel = () => {
    setSelectedAmount(10);
    setShowModal(false);
    setSelectedQuantity(1);
  };

  const onBet = () => {
    let numberBody = {
      roomId: activeColorRoom?._id,
      bitNumber: selectedNumber.value,
      contractCount: selectedQuantity,
      actualAmount: selectedAmount,
    };
    let colorBody = {
      roomId: activeColorRoom?._id,
      color: selectedColor.value,
      contractCount: selectedQuantity,
      actualAmount: selectedAmount,
    };
    if (modalType === "color") {
    //   socket.emit("bitAmountOrder", colorBody);
    } else {
    //   socket.emit("bitAmountOrder", numberBody);
    }
    setShowModal(false);
    setSelectedAmount(10);
    setSelectedQuantity(1);
  };

  const getDiff = () => {
    const targetDate = new Date(activeColorRoom?.endTime);
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    let totalSeconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    setCurrentDiff(`0${minutes} : ${sec}`);
    if (totalSeconds <= 30) {
      setAllDisable(true);
      setShowModal(false);
    }
    if (totalSeconds <= 0) {
      clearInterval(countDownTimer);
    }
  };
  return (
    <div>
      <GameHeader title="WinGo" />
      <CountDownCard currentDiff={currentDiff} />
    </div>
  );
};
